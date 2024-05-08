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
  
  var statusText: LocalizedStringKey {
    switch canStartChallenge {
    case .yes:
      return ""
    case .no:
      return "screens.challenge_start_fail.errors.generic_error"
    case .noChallengesLeft:
      return "screens.challenge_start_fail.errors.no_challenges_left"
    case .hasUnityLeft:
      return "screens.challenge_start_fail.errors.has_unity_left"
    case .challengeOnPhone:
      return "screens.challenge_start_fail.errors.challenge_on_phone"
    }
  }
  
  var body: some View {
    ZStack {
      AlertView(
        text: statusText,
        buttonText: "common.retry",
        buttonAction: viewModel.onRefresh,
        isLoading: viewModel.isLoading,
        isNavigatedScreen: true,
        isFlipped: true
      )
      .edgesIgnoringSafeArea(.all)
      .padding(.top, 10)
    }
  }
}
    
