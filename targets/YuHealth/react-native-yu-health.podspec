require "json"

Pod::Spec.new do |s|
  s.name         = "react-native-yu-health"
  s.version      = "1.5.0"
  s.summary      = "YuLife Health module"
  s.homepage     = "https://gitlab.com/yu-life/yulife-rn-client"
  s.license      = "MIT"
  s.authors      = "YuLife"

  s.platforms    = { :ios => "16.0" }
  s.source       = { :git => ".", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm}"

  if respond_to?(:install_modules_dependencies, true)
    install_modules_dependencies(s)
  else
    s.dependency "React-Core"
  end
end
