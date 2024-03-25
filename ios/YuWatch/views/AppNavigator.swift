import SwiftUI
import Foundation


struct AppNavigator: View {
  @StateObject private var stateManager = StateModel.shared
  
  var body: some View {
    switch stateManager.rootStack {
    case .loading:
      LoadingView()
    case .onboarding:
      OnboardingView()
    case .home:
      HomeScreenView()
    case .challengeProgress:
      ChallengeProgressView()
    case .challengeComplete:
      ChallengeCompleteView()
        case .offline:
        OfflineView()
    }
  }
}
