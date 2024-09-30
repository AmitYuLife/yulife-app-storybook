import Foundation
import SwiftUI

struct OnboardingView: View {
  @ObservedObject var viewModel = OnboardingViewModel()

  var body: some View {
    ZStack {
      Image("HomeBackground")
        .resizable()
        .scaledToFill()
        .edgesIgnoringSafeArea(.all)
      if viewModel.onboardingDetails != nil {
        AlertView(
          text:  viewModel.onboardingDetails!.message,
          buttonText: viewModel.onboardingDetails!.buttonText,
          buttonAction: viewModel.onboardingDetails!.onPress,
          isLoading: viewModel.isLoading
        )
      }
    }
  }
}
