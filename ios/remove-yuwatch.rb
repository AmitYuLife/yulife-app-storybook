require 'fileutils'
require 'xcodeproj'
require 'plist'

def remove_yu_watch_from_project()
  print("Removing YuWatch from project...")
  project_path = './YuLife.xcodeproj'
  app_target_name = 'YuLife'

  project = Xcodeproj::Project.open(project_path)
  app_target = project.targets.find { |target| target.name == app_target_name }

  project.targets.each do |target|
    if target.name.include?("YuWatch")
        project.targets.delete(target)
        puts "Removed target: #{target.name}"
    end
  end

  project.targets.each do |target|
    target.dependencies.each do |dependency|
      if dependency.target&.name&.include?('YuWatch')
        target.dependencies.delete(dependency)
        puts "Removed dependency for YuWatch from #{target.name}"
      end
    end
  end

  def remove_yuwatch_from_group_children(group)
    group.children.delete_if do |child|
      if child.display_name&.include?('YuWatch')
        puts "Removed YuWatch group or file reference: #{child.display_name}"
        true
      elsif child.is_a?(Xcodeproj::Project::Object::PBXGroup)
        remove_yuwatch_from_group_children(child) # Recursive clean-up
        false
      else
        false
      end
    end
  end

  remove_yuwatch_from_group_children(project.main_group)

  project.build_configurations.each do |config|
    if config.name.include?("YuWatch")
      project.build_configurations.delete(config)
      puts "Removed build configuration: #{config.name}"
    end
  end

  project.targets.each do |target|
    target.build_phases.each do |phase|
      if phase.is_a?(Xcodeproj::Project::Object::PBXCopyFilesBuildPhase) && phase.name == "Embed Watch Content"
        target.build_phases.delete(phase)
        puts "Removed 'Embed Watch Content' build phase from target: #{target.name}"
      end
    end
  end

  def remove_generated_group(group)
    group.children.each do |child|
      if child.is_a?(Xcodeproj::Project::Object::PBXGroup) && child.name == 'generated' && child.path == 'YuWatch/generated'
        group.remove_reference(child)
        puts "Removed 'generated' group with path YuWatch/generated"
      break
      elsif child.is_a?(Xcodeproj::Project::Object::PBXGroup)
        remove_generated_group(child)
      end
    end
  end

  remove_generated_group(project.main_group)
  scheme_path = File.join(project_path, 'xcshareddata/xcschemes/YuWatch.xcscheme')

  if File.exist?(scheme_path)
    FileUtils.rm(scheme_path)
    puts "Removed scheme: YuWatch.xcscheme"
  else
    puts "Scheme file not found: YuWatch.xcscheme"
  end

  info_plist_path = File.join('.', 'YuLife', 'Info.plist')
  if File.exist?(info_plist_path)
    info_plist = Plist.parse_xml(info_plist_path)
    if info_plist.key?('WKCompanionAppBundleIdentifier')
      info_plist.delete('WKCompanionAppBundleIdentifier')
      File.open(info_plist_path, 'wb') do |file|
        file.write(info_plist.to_plist)
      end
      puts "Removed WKCompanionAppBundleIdentifier from Info.plist"
    else
      puts "WKCompanionAppBundleIdentifier not found in Info.plist"
    end
  else
    puts "Info.plist file not found at path: #{info_plist_path}"
  end

  entitlements_path = File.join('.', 'YuLife', 'YuLife.entitlements')
  if File.exist?(entitlements_path)
    entitlements = Plist.parse_xml(entitlements_path)
    if entitlements.key?('com.apple.security.application-groups')
      entitlements.delete('com.apple.security.application-groups')
      File.open(entitlements_path, 'wb') do |file|
        file.write(entitlements.to_plist)
      end
      puts "Removed com.apple.security.application-groups from YuLife.entitlements"
    else
      puts "com.apple.security.application-groups not found in YuLife.entitlements"
    end
  else
    puts "YuLife.entitlements file not found at path: #{entitlements_path}"
  end

  project.save
end