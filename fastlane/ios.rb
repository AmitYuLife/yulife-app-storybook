platform :ios do
  desc "Setup app store connect api key. This action generates a lane context variable (also available as an environment variable)"
  desc "`APP_STORE_CONNECT_API_KEY` that can be used in other actions."
  desc "The API key is stored in the keychain and is used to authenticate with the App Store Connect API."
  lane :app_store_connect do
    app_store_connect_api_key(
      key_id: ENV["SPACESHIP_CONNECT_API_KEY_ID"],
      issuer_id: ENV["SPACESHIP_CONNECT_API_ISSUER_ID"],
      key_filepath: ENV["SPACESHIP_CONNECT_API_KEY_FILEPATH"]
    )
  end

  desc "Download certificates and provisioning profiles. This action creates a new keychain for duration of the build."
  desc "Then it downloads the certificates and provisioning profiles using the match action."
  lane :ci_certificates do
    create_keychain(
      name: "fastlane.build.keychain",
      password: ENV["FL_KEYCHAIN_PASSWORD"],
      default_keychain: true,
      unlock: true,
      timeout: 3600,
      add_to_search_list: true
    )
    app_store_connect
    match(
      app_identifier: [ENV["FL_APP_IDENTIFIER"], ENV["FL_WATCH_APP_IDENTIFIER"]], 
      type: ENV["FL_IOS_CERT_TYPE"], 
      keychain_name: "fastlane.build.keychain",
      keychain_password: ENV["FL_KEYCHAIN_PASSWORD"],
      readonly: true,
    )
  end
  # Private lane for generic iOS build
  private_lane :ios_build do |options|
    environment = options[:environment]
    
    unless environment
      UI.user_error!("Environment parameter is required. Supported: develop, uat, production")
    end
    
    unless ['develop', 'uat', 'production'].include?(environment)
      UI.user_error!("Unknown environment: #{environment}. Supported: develop, uat, production")
    end
    
    ci_certificates
    profile_mapping = Actions.lane_context[SharedValues::MATCH_PROVISIONING_PROFILE_MAPPING]
    ios_project_path = "ios/YuLife.xcodeproj"
    ios_workspace_path = "ios/YuLife.xcworkspace"
    ios_signing_identity = "Apple Distribution: Yu Life Limited (#{ENV["FL_TEAM_ID"]})"

    update_code_signing_settings(
      use_automatic_signing: false,
      path: ios_project_path,
      team_id: ENV["FL_TEAM_ID"],
      profile_name: profile_mapping[ENV["FL_APP_IDENTIFIER"]],
      bundle_identifier: ENV["FL_APP_IDENTIFIER"],
      targets: ["YuLife"]
    )

    update_code_signing_settings(
      use_automatic_signing: false,
      path: ios_project_path,
      team_id: ENV["FL_TEAM_ID"],
      profile_name: profile_mapping[ENV["FL_WATCH_APP_IDENTIFIER"]],
      bundle_identifier: ENV["FL_WATCH_APP_IDENTIFIER"],
      targets: ["YuWatch"]
    )

    # Replace app group for watch (production only)
    if environment == "production"
      UI.message("Replacing app group for watch in production build...")
      yulife_entitlements_path = "#{ENV['CI_PROJECT_DIR']}/ios/YuLife/YuLife.entitlements"
      yuwatch_entitlements_path = "#{ENV['CI_PROJECT_DIR']}/targets/YuWatch/yuwatch.entitlements"
      info_plist_path = "#{ENV['CI_PROJECT_DIR']}/ios/YuLife/Info.plist"
      project_pbxproj_path = "#{ENV['CI_PROJECT_DIR']}/ios/YuLife.xcodeproj/project.pbxproj"
      sh("sed -i -e 's/group.com.yulife.develop/group.com.yulife.main/g' #{yulife_entitlements_path}")
      sh("cat #{yulife_entitlements_path}")
      sh("sed -i -e 's/group.com.yulife.develop/group.com.yulife.main/g' #{yuwatch_entitlements_path}")
      sh("cat #{yuwatch_entitlements_path}")
      sh("/usr/libexec/PlistBuddy -c \"Set :WKCompanionAppBundleIdentifier com.yulife.main.yuwatch\" \"#{info_plist_path}\"")
      sh("sed -i '' 's/INFOPLIST_KEY_WKCompanionAppBundleIdentifier = [^;]*;/INFOPLIST_KEY_WKCompanionAppBundleIdentifier = com.yulife.main;/' #{project_pbxproj_path}")
      UI.message("App group replacement completed")
    end

    build_app(
      clean: true,
      codesigning_identity: ios_signing_identity,
      configuration: "Release",
      export_method: ENV["FL_IOS_EXPORT_METHOD"],
      export_options: {
        installerSigningCertificate: ios_signing_identity,
        method: ENV["FL_IOS_EXPORT_METHOD"],
        provisioningProfiles: ENV["MATCH_PROVISIONING_PROFILE_MAPPING"],
        signingCertificate: "Apple Distribution",
      },
      output_directory: "builds/ios",
      scheme: "YuLife",
      workspace: ios_workspace_path,
    )
    
    version = get_package_version
    build_number = get_build_number
    full_version = "#{version}.#{build_number}"
    
    # Upload IPA to S3 (only develop builds)
    if environment == "develop"
      ipa_path = File.expand_path(File.join(ENV['CI_PROJECT_DIR'], "builds/ios/YuLife.ipa"))
      if File.exist?(ipa_path)
        s3_url = upload_to_s3(
          bucket_name: ENV['BINARY_S3_BUCKET_NAME'],
          build_number: build_number,
          environment: environment,
          file_path: ipa_path,
          platform: "ios",
          version: version,
        )

        ipa_artifact_url = generate_download_url(
          build_number: build_number,
          environment: environment,
          platform: "ios",
          version: version,
        )
      else
        UI.important("IPA file not found at #{ipa_path}, skipping download URL generation")
      end

      slack(
        message: "✅ YuLife iOS #{environment} build completed successfully",
        channel: "#alerts-engineering",
        slack_url: ENV['ALERTS_ENGINEERING_SLACK_WEBHOOK_URL'],
        username: "Gitlab CI MacOS Runner",
        icon_emoji: ":apple-icon:",
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
          actions: [
            {
              type: "button",
              text: "📱 Install App",
              url: ipa_artifact_url,
            }
          ]
        }
      )
    end
    
    # Upload to TestFlight for UAT and production (both use identical configuration)
    if environment == "uat" || environment == "production"
      upload_to_testflight(
        app_identifier: ENV["FL_APP_IDENTIFIER"],
        app_platform: "ios",
        ipa: ENV["IPA_OUTPUT_PATH"],
        pkg: ENV["PKG_OUTPUT_PATH"],
        notify_external_testers: false,
        skip_waiting_for_build_processing: true,
        app_version: full_version,
        build_number: build_number,
      )
      slack(
        message: "✅ YuLife iOS #{environment} build completed successfully",
        channel: "#alerts-engineering",
        slack_url: ENV['ALERTS_ENGINEERING_SLACK_WEBHOOK_URL'],
        username: "Gitlab CI MacOS Runner",
        icon_emoji: ":apple-icon:",
        default_payloads: ["git_branch", "git_author"],
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
          ]
        }
      )
    end
  end

  desc "iOS Develop build"
  lane :develop_build do
    ios_build(environment: 'develop')
  end

    desc "iOS UAT build"
    lane :uat_build do
      ios_build(environment: 'uat')
    end

    desc "iOS Production build"
    lane :production_build do
      ios_build(environment: 'production')
    end

  desc "Generate new develop certificates and provisioning profiles. To be run locally. Need S3 Bucket access permissions.(Lane for DevOps team)"
  desc "Matchfile needs to be updated with the correct environment variables."
  lane :develop_certs_and_profiles do
    # Develop builds
    match(
      app_identifier: ["com.yulife.develop","com.yulife.develop.yuwatch"], 
      type: "adhoc", 
      readonly: false,
      force_for_new_devices: true,
      storage_mode: "s3",
      s3_bucket: "yu-develop-react-native-certificates",
      s3_region: "eu-west-2",
      team_id: "739BJV2T6V"
    )
  end

  desc "Generate new UAT certificates and provisioning profiles. To be run locally. Need S3 Bucket access permissions.(Lane for DevOps team)"
  desc "Matchfile needs to be updated with the correct environment variables."
  lane :uat_certs_and_profiles do
    # Needs the following environment variables:
    # FL_MATCH_PASSWORD - Can be found in CI/CD Variables (CDK)
    match(
      app_identifier: ["com.yulife.develop","com.yulife.develop.yuwatch"], 
      type: "appstore", 
      readonly: false,
      storage_mode: "s3",
      s3_bucket: "yu-develop-react-native-certificates",
      s3_region: "eu-west-2",
      team_id: "739BJV2T6V"
    )
  end

  desc "Generate new production certificates and provisioning profiles. To be run locally. Need S3 Bucket access permissions.(Lane for DevOps team)"
  desc "Matchfile needs to be updated with the correct environment variables."
  lane :production_certs_and_profiles do
    # Needs the following environment variables:
    # FL_MATCH_PASSWORD - Can be found in CI/CD Variables (CDK)
    match(
      app_identifier: ["com.yulife.main","com.yulife.main.yuwatch"], 
      type: "appstore", 
      readonly: false,
      storage_mode: "s3",
      s3_bucket: "yu-production-react-native-certificates",
      s3_region: "eu-west-2",
      team_id: "739BJV2T6V"
    )
  end

  desc "iOS local develop build"
  lane :local_build do
    match(
      app_identifier: ["com.yulife.develop","com.yulife.develop.yuwatch"], 
      type: "adhoc",
      readonly: true,
    )
    build_app(
      workspace: "ios/YuLife.xcworkspace", 
      scheme: "YuLife",
      configuration: "Release",
      clean: true,
      export_method: "ad-hoc",
      export_team_id: "739BJV2T6V",
      output_directory: "builds/ios",
      export_options: {
        installerSigningCertificate: "Apple Distribution: Yu Life Limited (739BJV2T6V)"
      }
    )
  end

  desc "Push the already uploaded release to pre-internal TestFlight"
  lane :submit_to_internal do
    app_store_connect
    upload_to_testflight(
      app_identifier: "com.yulife.main",
      app_platform: "ios",
      groups: ["- Pre-internal"],
      notify_external_testers: true, # Notify testers when a new build is available
      distribute_external: true, # Distribute the build to external testers
      distribute_only: true, # Do not upload the build to App Store Connect
      skip_waiting_for_build_processing: false, # Wait for Apple's processing to complete
      changelog: "Bug fixes." # Optional release notes
    )
  end

  desc "Push the already uploaded release to P&T TestFlight"
  lane :submit_to_pt do
    app_store_connect
    upload_to_testflight(
      app_identifier: "com.yulife.main",
      app_platform: "ios",
      groups: ["P&T"],
      notify_external_testers: true, # Notify testers when a new build is available
      distribute_external: true, # Distribute the build to external testers
      distribute_only: true, # Do not upload the build to App Store Connect
      skip_waiting_for_build_processing: false, # Wait for Apple's processing to complete
      changelog: "Bug fixes." # Optional release notes
    )
  end

  desc "Push the already uploaded release to the YuCrew TestFlight"
  lane :submit_to_yucrew do
    app_store_connect
    upload_to_testflight(
      app_identifier: "com.yulife.main",
      app_platform: "ios",
      groups: ["YuCrew", "Translators"],
      notify_external_testers: true, # Notify testers when a new build is available
      distribute_external: true, # Distribute the build to external testers
      distribute_only: true, # Do not upload the build to App Store Connect
      skip_waiting_for_build_processing: false, # Wait for Apple's processing to complete
      changelog: "Bug fixes." # Optional release notes
    )
  end
end

