import SwiftUI
import Foundation

struct LogoutConfirmView: View {
  @ObservedObject var viewModel = LogoutConfirmViewModel()
  @Binding var isPresented: Bool
  
  var body: some View {
    NavigationView {
      VStack {
        AlertView(
          text: "screens.settings.logout_confirm",
          buttonText: "screens.settings.logout",
          buttonAction: viewModel.logout,
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

