import Foundation
import UIKit
import SwiftUI
enum OnboardingState {
  case authentication
  case permissions
  case permissionsNeedsSettings
}

class OnboardingViewModel: ObservableObject {
  @Published var isLoading: Bool = false;
  @Published var onboardingDetails: OnboardingDetails?
  
  var currentState: OnboardingState {
    didSet {
      updateOnboardingDetails()
    }
  }
  
  init() {
    let permissionStatus = PedometerModel.shared.checkPermissions()
    currentState = .permissions
    if(permissionStatus == .denied){
      currentState = .permissionsNeedsSettings
    }
    
    if(permissionStatus == .authorized) {
      Task {
        do {
          try await PedometerModel.shared.startUpdates();
        } catch { print("Failed to start pedometer in OnboardingViewModel init", error) }
      }
      currentState = .authentication
    }
    
    self.updateOnboardingDetails()
  }
  
  
  private func updateOnboardingDetails() {
    DispatchQueue.main.async {
      switch self.currentState {
      case .authentication:
        self.onboardingDetails = OnboardingDetails(message: "screens.onboarding.open_on_phone", buttonText: "Continue", onPress: self.requestAuthToken)
      case .permissions:
        self.onboardingDetails = OnboardingDetails(message: "screens.onboarding.pedometer", buttonText: "Continue", onPress: self.onRequestPermissions)
      case .permissionsNeedsSettings:
        self.onboardingDetails = OnboardingDetails(message: "screens.onboarding.systemPermissionNeeded", buttonText: "Retry", onPress: self.onRequestPermissions)
      }
    }
  }
  
  private func setIsLoading(isLoading: Bool) {
    DispatchQueue.main.async {
      self.isLoading = isLoading;
    }
  }
  
  func afterRequestPermissions() {
    // Do we already have an auth token
    let isLoggedIn = AuthenticationModel.shared.initAuthentication()
    if(!isLoggedIn) {
      self.currentState = .authentication
      return
    }
    
    completeFlow()
  }
  
  func onRequestPermissions() {
    Task {
      setIsLoading(isLoading: true)
      
      do {
        // You request permissions by attempting to use the pedometer
        try await PedometerModel.shared.startUpdates()
        afterRequestPermissions()
      } catch {
        print(error.localizedDescription)
        // On simulator you can't start the pedometer
        // Would take apple like a single 3am coding sesh to implement
#if targetEnvironment(simulator)
        afterRequestPermissions()
        setIsLoading(isLoading: false)
#else
        self.currentState = .permissionsNeedsSettings;
#endif
      }
      
      setIsLoading(isLoading: false)
    }
  }
  
  private func requestAuthToken() {
    setIsLoading(isLoading: true)
    ConnectivityModel.shared.sendMessage(message: ["type": "GetAuthToken"]) { response in
      DispatchQueue.main.async {
        print("Processing response! ")
        self.processResponse(response)
      }
    } errorHandler: { error in
      self.setIsLoading(isLoading: false)
      print("Failed to send phone message")
      print(error.localizedDescription)
      DispatchQueue.main.async {
        self.onboardingDetails = OnboardingDetails(message: "Make sure YuLife is running on your phone!", buttonText: "Retry", onPress: self.requestAuthToken)
      }
    }
  }
  
  func completeFlow() {
    StateModel.shared.setRoot(stack: RootStack.loading)
  }
  
  private func processResponse(_ response: Any) {
    self.setIsLoading(isLoading: false)
    guard let dict = response as? [String: Any],
          let token = dict["token"] as? String,
          let apiUrl = dict["api_url"] as? String,
          let clientToken = dict["client_token"] as? String,
          let mixpanelToken = dict["mixpanel_token"] as? String,
          let userId = dict["user_id"] as? String
    else {
      DispatchQueue.main.async {
        self.onboardingDetails = OnboardingDetails(message: "Invalid response format", buttonText: "Retry", onPress: self.requestAuthToken)
      }
      
      return
    }
    
    
    AuthenticationModel.shared.loginUser(
      token: token,
      apiUrl: apiUrl,
      clientToken: clientToken,
      mixpanelToken: mixpanelToken,
      userId: userId
    )
    
    completeFlow()
  }
}

struct OnboardingDetails {
  let message: LocalizedStringKey
  let buttonText: LocalizedStringKey
  let onPress: () -> Void
}
