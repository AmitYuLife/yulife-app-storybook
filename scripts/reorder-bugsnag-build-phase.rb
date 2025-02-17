require 'fileutils'
require 'xcodeproj'
require 'plist'

def reorder_bugsnag_build_phase()
  print("Reordering Bugsnag source maps build phase...")
  project_path = './YuLife.xcodeproj'
  app_target_name = 'YuLife'

  project = Xcodeproj::Project.open(project_path)
  app_target = project.targets.find { |target| target.name == app_target_name }

  project.targets.each do |target|
    target.build_phases.each do |phase|
      if phase.is_a?(Xcodeproj::Project::Object::PBXShellScriptBuildPhase)
        if phase.name == "Upload source maps to Bugsnag"
          target.build_phases.delete(phase)
          target.build_phases << phase
        end
      end
    end
  end

  project.save
end

reorder_bugsnag_build_phase()