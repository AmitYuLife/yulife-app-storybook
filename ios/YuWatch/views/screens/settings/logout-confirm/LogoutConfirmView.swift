import SwiftUI
import Foundation

struct LogoutConfirmView: View {
  @ObservedObject var viewModel = LogoutConfirmViewModel()
  @Binding var isPresented: Bool
  
  var body: some View {
    NavigationView {
      VStack {
        AlertView(
          text: "Are you sure you want to logout?",
          buttonText: "Logout",
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

