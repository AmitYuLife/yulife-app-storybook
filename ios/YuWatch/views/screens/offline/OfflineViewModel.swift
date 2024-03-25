import Foundation

class OfflineViewModel: ObservableObject {
  @Published var isLoading = false;
 
  func retry() async {
    self.isLoading = true;
    do {
      let _ = try await CoinLedgerModel.shared.getCoinLedger()
      let _ = try await ActiveChallengeModel.shared.getActiveChallenge()
      
      StateModel.shared.setRoot(stack: RootStack.loading)
    } catch { }
    
    self.isLoading = false;
  }
}
