import SwiftUI
import Foundation

struct ChallengeProgressCancelView: View {
  @ObservedObject var viewModel = ChallengeProgressCancelViewModel()
  @Binding var isPresented: Bool
  
  var body: some View {
    NavigationView {
      VStack {
        AlertView(
          text: "screens.challenge_cancel.label",
          buttonText: "screens.challenge_cancel.confirm",
          buttonAction: viewModel.cancelChallenge,
          isLoading: viewModel.isLoading,
          isNavigatedScreen: true
        )
        .edgesIgnoringSafeArea(.all)
        .padding(.top, 10)
      }
      .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
    .toolbar {
      ToolbarItem(placement: .cancellationAction) {
        if viewModel.isLoading {
          VStack {}
        } else {
          EmptyView()
        }
      }
    }
  }
}

