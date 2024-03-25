import Foundation

class ChallengeProgressCancelViewModel: ObservableObject {
  @Published var isLoading = false;
  
  func cancelChallenge() {
    DispatchQueue.main.async {
      self.isLoading = true;
    }
    
    Task {
      do {
        let _ = try await ActiveChallengeModel.shared.cancelActiveChallenge()
        StateModel.shared.setRoot(stack: .home)
      } catch {
        print("Failed to cancel the challenge: \(error)")
      } 
      
      DispatchQueue.main.async {
        self.isLoading = false
      }
    }
  }
}
