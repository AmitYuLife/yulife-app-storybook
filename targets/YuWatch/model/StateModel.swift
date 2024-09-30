import Combine
import Foundation

enum RootStack {
  case home
  case onboarding
  case challengeProgress
  case challengeComplete
  case loading
  case offline
}

class StateModel: ObservableObject {
  @Published var rootStack: RootStack = .loading
  
  func setRoot(stack: RootStack) {
    DispatchQueue.main.async {
      AppConsoleModel.shared.showAlert(message: "New root stack: \(stack)")
      self.rootStack = stack;
    }
  }
  
  static let shared = StateModel()
}

