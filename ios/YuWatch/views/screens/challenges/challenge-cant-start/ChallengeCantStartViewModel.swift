import Foundation

class ChallengeCantStartViewModel: ObservableObject {
  var goBack: () -> Void = {}

  @Published var isLoading = false;
  
  init(goBack: @escaping () -> Void) {
    self.goBack = goBack
  }
  
  func onRefresh() {
    Task {
      do {
        DispatchQueue.main.async {
          self.isLoading = true;
        }
        
        let _ = try await ActiveChallengeModel.shared.fetchActiveChallenge()
        goBack();
      } catch {
        print("Error fetching acitve challenge!")
        
        
      }
      DispatchQueue.main.async {
        self.isLoading = false;
      }
    }
  }
}
