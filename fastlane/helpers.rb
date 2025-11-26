# Global configuration: Increment value added to CI_PIPELINE_IID for build numbers
# This is to make sure we have a higher version than in Bitrise builds
BUILD_NUMBER_INCREMENT = 20000

# Helper method to get the incremented build number
# This method is available to all lanes
def get_build_number
  base_build_number = ENV['CI_PIPELINE_IID']
  if base_build_number.nil? || base_build_number.empty?
    return nil
  end
  
  begin
    incremented_number = base_build_number.to_i + BUILD_NUMBER_INCREMENT
    return incremented_number.to_s
  rescue
    return base_build_number
  end
end

# Helper method to upload binaries to S3 bucket
# This method is available to all lanes and works for both Android (APKs) and iOS (IPAs)
def upload_to_s3(options)
  bucket_name = options[:bucket_name] || ENV['BINARY_S3_BUCKET_NAME']
  architecture = options[:architecture]
  build_number = options[:build_number] || get_build_number || "0"
  environment = options[:environment] || ENV['RELEASE_ENVIRONMENT'] || "develop"
  file_path = options[:file_path]
  platform = options[:platform] # 'android' or 'ios'
  version = options[:version] || get_package_version
  
  # Validate required parameters
  unless bucket_name && file_path && platform
    UI.user_error!("upload_to_s3 requires: bucket_name, file_path, and platform")
  end
  
  # Check if file exists
  unless File.exist?(file_path)
    UI.user_error!("File not found: #{file_path}")
  end
  
  # Build S3 key path: platform/environment/version/build_number/filename
  # For iOS: platform/environment/version/build_number/yulife.ipa (no architecture)
  # For Android: platform/environment/version/build_number/yulife_architecture.apk
  if platform == "ios"
    file_name = "yulife.ipa"
  elsif platform == "android"
    file_name = "yulife_#{architecture}.apk"
  else
    UI.user_error!("Unsupported platform: #{platform}")
  end
  s3_key = [platform, environment, version, build_number, file_name].join('/')
  
  # Construct full S3 URI
  s3_uri = "s3://#{bucket_name}/#{s3_key}"
  
  UI.message("Uploading #{platform.upcase} binary to S3...")
  UI.message("  File: #{File.basename(file_path)}")
  UI.message("  Bucket: #{bucket_name}")
  UI.message("  S3 Key: #{s3_key}")
  UI.message("  Platform: #{platform}")
  UI.message("  Environment: #{environment}")
  UI.message("  Version: #{version}")
  UI.message("  Build Number: #{build_number}")
  UI.message("  Architecture: #{architecture || 'N/A'}") if platform == 'android'
  
  # Upload using AWS CLI
  upload_command = "aws s3 cp \"#{file_path}\" \"#{s3_uri}\""

  # For ios, add the content type
  if platform == "ios"
    upload_command += " --content-type 'application/octet-stream'"
  end
  
  begin
    sh(upload_command)
    UI.success("✅ Successfully uploaded to S3: #{s3_uri}")
  rescue => ex
    UI.user_error!("❌ Failed to upload to S3: #{ex.message}")
  end
end

# Helper method to generate signed download URL using JWT
# This generates a 30 days download link for binaries
def generate_download_url(options)
  lambda_url = ENV['LAMBDA_DOWNLOADS_URL']
  secret_key = ENV['DOWNLOAD_URL_SECRET_KEY']
  
  unless secret_key
    UI.user_error!("DOWNLOAD_URL_SECRET_KEY environment variable is required for generate_download_url")
  end
  
  version = options[:version]
  build_number = options[:build_number]
  platform = options[:platform] # 'android' or 'ios'
  architecture = options[:architecture] # Optional, only for Android
  environment = options[:environment]
  
  # Build JWT payload with expiration (30 days from now, same as S3 bucket expiration)
  expiration_time = Time.now.to_i + (30 * 24 * 60 * 60) # 30 days in seconds
  payload = {
    version: version,
    build_number: build_number,
    platform: platform,
    environment: environment,
    exp: expiration_time
  }
  
  # Add architecture to payload if provided (for Android)
  payload[:architecture] = architecture if architecture && !architecture.empty?
  
  # Generate JWT with payload and sign with secret key
  begin
    jwt = JWT.encode(payload, secret_key, 'HS256')
    download_url = "#{lambda_url}?token=#{jwt}"
    UI.success("✅ Generated download URL (valid for 30 days)")
    return download_url
  rescue => ex
    UI.user_error!("❌ Failed to generate download URL: #{ex.message}")
  end
end

# Helper method to get version from package.json (return only major.minor version)
def get_package_version
  package_json_path = File.expand_path(File.join(ENV['CI_PROJECT_DIR'] || Dir.pwd, 'package.json'))
  if File.exist?(package_json_path)
    begin
      package_json = JSON.parse(File.read(package_json_path))
      return package_json['version'].split('.')[0..1].join('.')
    rescue => ex
      UI.important("Could not read package.json version: #{ex.message}")
      return 'unknown'
    end
  end
  return 'unknown'
end

