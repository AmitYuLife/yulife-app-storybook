platform :android do
  # Private lane to get signing properties for gradle
  private_lane :get_signing_properties do
    keystore_path = File.expand_path(File.join(ENV['CI_PROJECT_DIR'], ENV['FL_ANDROID_KEYSTORE_PATH']))
    keystore_password = ENV['FL_ANDROID_KEYSTORE_PASSWORD']
    key_alias = ENV['FL_ANDROID_KEY_ALIAS']
    key_password = ENV['FL_ANDROID_KEY_PASSWORD']
    
    unless keystore_path && keystore_password && key_alias && key_password
      UI.user_error!("Missing signing credentials. Please set FL_ANDROID_KEYSTORE_PATH, FL_ANDROID_KEYSTORE_PASSWORD, FL_ANDROID_KEY_ALIAS, and FL_ANDROID_KEY_PASSWORD environment variables")
    end
    {
      "android.injected.signing.store.file" => keystore_path,
      "android.injected.signing.store.password" => keystore_password,
      "android.injected.signing.key.alias" => key_alias,
      "android.injected.signing.key.password" => key_password
    }
  end

  # Private lane to publish Bugsnag release (set metadata and upload sourcemaps)
  private_lane :bugsnag_publish do |options|
    release_environment = options[:release_environment]

    package_json_path = File.expand_path(File.join(ENV['CI_PROJECT_DIR'], 'package.json'))
    dotenv_path = File.expand_path(File.join(ENV['CI_PROJECT_DIR'], '.env'))
    package_version = sh("cat #{package_json_path} | jq -r '.version'").strip
    prefix_version = "#{package_version.split('.')[0]}.#{package_version.split('.')[1]}"
    build_number = get_build_number || ENV['CI_PIPELINE_IID'] || "1"
    bugsnag_release_version = "#{prefix_version}.#{build_number}"
    bugsnag_api_key = sh("grep '^BUGSNAG_API_KEY=' #{dotenv_path} | cut -d '=' -f2- | tr -d '\"'").strip

    UI.message("Bugsnag Release Version: #{bugsnag_release_version}")
    UI.message("Bugsnag Release Environment: #{release_environment}")
    UI.message("App Version: #{prefix_version}")

    # Resolve sourcemap/bundle paths
    bundle_output_folder = ENV['BUNDLE_OUTPUT_FOLDER']
    bundle_output_assets_folder = ENV['BUNDLE_OUTPUT_ASSETS_FOLDER']
    app_version_code = get_build_number || ENV['CI_PIPELINE_IID'] || "local"

    source_map_path = File.expand_path(File.join(ENV['CI_PROJECT_DIR'], "android/app/build/generated/sourcemaps/react/#{bundle_output_folder}/index.android.bundle.map"))
    bundle_path = File.expand_path(File.join(ENV['CI_PROJECT_DIR'], "android/app/build/generated/assets/#{bundle_output_assets_folder}/index.android.bundle"))

    UI.message("Uploading Bugsnag source maps")
    sh(
      [
        'npx @bugsnag/source-maps@2.3.3 upload-react-native',
        "--api-key \"#{bugsnag_api_key}\"",
        '--platform android',
        "--source-map \"#{source_map_path}\"",
        "--bundle \"#{bundle_path}\"",
        "--app-version \"#{bugsnag_release_version}\"",
        "--app-version-code \"#{app_version_code}\""
      ].join(' ')
    )
    UI.success("Successfully uploaded Bugsnag source maps")
    UI.message("Publishing Bugsnag release")
    sh(
      [
        'npx bugsnag-build-reporter@2.0.0',
        "--api-key \"#{bugsnag_api_key}\"",
        "--app-version \"#{bugsnag_release_version}\"",
        "--release-stage \"#{release_environment}\"",
        "--source-control-provider gitlab",
        "--source-control-repository \"#{ENV['CI_PROJECT_URL']}\"",
        "--source-control-revision \"#{ENV['CI_COMMIT_SHA']}\"",
        "--builder-name \"#{ENV['CI_COMMIT_AUTHOR']}\""
      ].join(' ')
    )
    UI.success("Successfully published Bugsnag release")
  end

  # Private lane for generic Android build (used by specific build lanes)
  private_lane :android_build do |options|
    environment = options[:environment]
    
    # Build configuration based on environment
    build_configs = {
      'develop' => {
        bundle_output_folder: 'release',
        bundle_output_assets_folder: 'createBundleReleaseJsAndAssets',
        gradle_task: 'app:assembleRelease',
        run_clean_gradle: false
      },
      'uat' => {
        bundle_output_folder: 'release',
        bundle_output_assets_folder: 'createBundleReleaseJsAndAssets',
        gradle_task: 'assembleRelease',
        run_clean_gradle: true
      },
      'production' => {
        bundle_output_folder: 'release',
        bundle_output_assets_folder: 'createBundleReleaseJsAndAssets',
        gradle_task: 'assembleRelease',
        run_clean_gradle: false
      }
    }
    
    config = build_configs[environment]
    unless config
      UI.user_error!("Unknown environment: #{environment}. Supported: develop, uat, production")
    end
    
    ENV['RELEASE_ENVIRONMENT'] = environment
    ENV['BUNDLE_OUTPUT_FOLDER'] = config[:bundle_output_folder]
    ENV['BUNDLE_OUTPUT_ASSETS_FOLDER'] = config[:bundle_output_assets_folder]
    
    project_dir = File.expand_path(File.join(ENV['CI_PROJECT_DIR'], 'android'))
    apk_output_path = File.expand_path(File.join(project_dir, 'app/build/outputs/apk/release'))
    
    # Get signing properties
    signing_properties = get_signing_properties
    
    if config[:run_clean_gradle]
      gradle(
        task: 'clean',
        project_dir: project_dir
      )
    end
    
    # Build and sign the app with split APKs
    gradle(
      task: config[:gradle_task],
      project_dir: project_dir,
      flags: '--project-prop splitApks=true -Dorg.gradle.jvmargs="-Xmx6144m"',
      properties: signing_properties,
      print_command: false  # Hide sensitive signing info from logs
    )
    
    # Get signed APK paths from build output
    signed_apks = Dir.glob("#{apk_output_path}/**/*.apk").reject { |f| f.include?('unsigned') }
    
    unless signed_apks.any?
      UI.user_error!("No signed APKs found in #{apk_output_path}")
    end

    build_number = get_build_number || "0"
    version = get_package_version

    # Rename APKs to include CI job ID for unique filenames
    signed_apks = signed_apks.map do |apk_path|
      new_path = apk_path.sub(/\.apk$/, "-#{build_number}.apk")
      File.rename(apk_path, new_path)
      UI.message("Renamed #{File.basename(apk_path)} → #{File.basename(new_path)}")
      new_path
    end

    # Publish Bugsnag release (metadata + sourcemaps)
    bugsnag_publish(release_environment: environment)
    
    # For production, upload to Google Play Store (TODO: To be tested on production builds)
    if environment != 'production'
       # If not production build, upload all APKs to S3
       arch_links = []
       signed_apks.each do |apk_path|

        apk_name = File.basename(apk_path)
        architecture = nil
        download_text = nil
        if apk_name.include?('armeabi-v7a')
          architecture = 'armeabi-v7a'
          download_text = "ARM 32-bit"
        elsif apk_name.include?('arm64-v8a')
          architecture = 'arm64-v8a'
          download_text = "ARM 64-bit"
        elsif apk_name.include?('x86_64')
          architecture = 'x86_64'
          download_text = "x86_64"
        elsif apk_name.include?('x86')
          architecture = 'x86'
          download_text = "x86"
        end

        upload_to_s3(
          bucket_name: ENV['BINARY_S3_BUCKET_NAME'],
          architecture: architecture,
          build_number: build_number,
          environment: environment,
          file_path: apk_path,
          platform: "android",
          version: version,
        )
        download_url = generate_download_url(
          architecture: architecture,
          build_number: build_number,
          environment: environment,
          platform: "android",
          version: version,
        )

        arch_links << { text: download_text, url: download_url, architecture: architecture }
      end
      UI.message("Signed APKs: #{signed_apks.join(', ')}")
      slack(
        message: "✅ YuLife Android #{environment} build completed successfully",
        channel: "#alerts-engineering",
        slack_url: ENV['ALERTS_ENGINEERING_SLACK_WEBHOOK_URL'],
        username: "Gitlab CI MacOS Runner",
        icon_emoji: ":android-icon:",
        default_payloads: ["git_branch", "git_author", "last_git_commit", "last_git_commit_hash"],
        payload: {
          "Build Version" => version,
          "Build Number" => build_number,
          "Environment" => environment
        },
        attachment_properties: {
          color: "good",
          fields: [
            {
              title: "View Build",
              value: "<#{ENV['CI_JOB_URL']}|:gitlab: Open GitLab Job>",
              short: true
            }
          ],
          actions: arch_links.map do |link|
            {
              type: "button",
              text: "📱 #{link[:text]}",
              url: link[:url]
            }
          end
        }
      )
      UI.success("Successfully sent Slack notification")
      if environment == 'uat'
        # Update bug bounty Android asset links
        UI.message("Updating bug bounty Android asset...")
        script_path = File.expand_path(File.join(Dir.pwd, 'actions', 'update-bug-bounty-android-asset.js'))
        sh("node #{script_path} '#{arch_links.to_json}'")
        UI.success("Bug bounty Android asset updated successfully!")
      end
    else
      # Upload to Google Play Store internal track
      upload_to_play_store(
        package_name: ENV['BUNDLE_ID'],
        track: 'internal',
        apk_paths: ENV['GRADLE_ALL_APK_OUTPUT_PATHS'],
        version_name: "#{version}.#{build_number}",
        skip_upload_metadata: true,
        skip_upload_images: true,
        skip_upload_screenshots: true
      )

      UI.success("Successfully deployed to Google Play Store (internal track)")

      slack(
        message: "✅ YuLife Android #{environment} build completed successfully",
        channel: "#alerts-engineering",
        slack_url: ENV['ALERTS_ENGINEERING_SLACK_WEBHOOK_URL'],
        username: "Gitlab CI MacOS Runner",
        icon_emoji: ":android-icon:",
        default_payloads: ["git_branch", "git_author"],
        payload: {
          "Build Version" => version,
          "Build Number" => build_number,
          "Environment" => environment
        }
      )
     
    end
    
    UI.success("Android #{environment} build completed successfully!")
  end

  desc "Android Develop build"
  lane :develop_build do
    android_build(environment: 'develop')
  end

  desc "Android UAT build"
  lane :uat_build do
    android_build(environment: 'uat')
  end

  desc "Android Production build"
  lane :production_build do
    android_build(environment: 'production')
  end

  desc "Push the already uploaded release to P&T"
  lane :submit_to_pt do
    upload_to_play_store(
      package_name: "com.yulife.app",
      rollout: "1.0",
      track: "internal",
      track_promote_to: "Product & Tech"
    )
  end

  desc "Push the already uploaded release to Open Testing (YuCrew)"
  lane :submit_to_yucrew do
    upload_to_play_store(
      package_name: "com.yulife.app",
      rollout: "1.0",
      track: "Product & Tech",
      track_promote_to: "beta"
    )
  end

  desc "Push the already uploaded release to Production"
  lane :submit_to_production do
    upload_to_play_store(
      package_name: "com.yulife.app",
      rollout: "1.0",
      track: "beta",
      track_promote_to: "production",
      changelog: {
        "en-GB" => ENV["RELEASE_NOTES"],
        "en-US" => ENV["RELEASE_NOTES"],
      }
    )
  end
end

