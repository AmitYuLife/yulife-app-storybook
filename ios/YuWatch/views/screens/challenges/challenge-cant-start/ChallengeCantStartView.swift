import Foundation
import SwiftUI

struct ChallengeCantStartView: View {
  var goBack: () -> Void;
  var canStartChallenge: CanStartChallenge;
  
  @ObservedObject private var viewModel: ChallengeCantStartViewModel
  
  init(goBack: @escaping () -> Void, canStartChallenge: CanStartChallenge) {
    self.goBack = goBack
    self.canStartChallenge = canStartChallenge
    self._viewModel = ObservedObject(initialValue: ChallengeCantStartViewModel(goBack: goBack))
  }
  
  var statusText: String {
    switch canStartChallenge {
    case .yes:
      return ""
    case .no:
      return "Something's gone wrong!"
    case .noChallengesLeft:
      return "Already completed all available challenges for today"
    case .hasUnityLeft:
      return "Check your phone to continue!"
    case .challengeOnPhone:
      return "There's already a challenge in progress on your phone!"
    }
  }
  
  var body: some View {
    ZStack {
      AlertView(
        text: statusText,
        buttonText: "Retry",
        buttonAction: viewModel.onRefresh,
        isLoading: viewModel.isLoading,
        isNavigatedScreen: true
      )
      .edgesIgnoringSafeArea(.all)
      .padding(.top, 10)
    }
  }
}
    
