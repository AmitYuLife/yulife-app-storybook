import SwiftUI
import Foundation

struct ChallengeProgressErrorView: View {
  var onRetry: (() -> Void)
  var isLoading: Bool
  
  @Binding var isPresented: Bool
  
  var body: some View {
    NavigationView {
      VStack {
        AlertView(
          text: "Error! Don't worry, it always fails first time for dev purposes!",
          buttonText: "Retry",
          buttonAction: onRetry,
          isLoading: false,
          isNavigatedScreen: true
        )
        .edgesIgnoringSafeArea(.all)
        .padding(.top, 10)
      }
      .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
    .toolbar {
      ToolbarItem(placement: .cancellationAction) {}
    }
  }
}

