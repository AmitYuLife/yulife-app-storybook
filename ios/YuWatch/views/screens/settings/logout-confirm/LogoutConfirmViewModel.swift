import Foundation

class LogoutConfirmViewModel: ObservableObject {
  @Published var isLoading = false;
  
  func logout() {
    DispatchQueue.main.async {
      self.isLoading = true;
      AuthenticationModel.shared.logoutUser()
    }
  }
}
