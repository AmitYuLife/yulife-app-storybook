import Foundation
import SwiftUI

class OfflineViewModel: ObservableObject {
  @Published var isLoading = false;
  @Published var navigationPath = NavigationPath()
 
  func retry() async {
    DispatchQueue.main.async {
      self.isLoading = true;
    }
    
    do {
      let _ = try await CoinLedgerModel.shared.getCoinLedger()
      let _ = try await ActiveChallengeModel.shared.getActiveChallenge()
      
      StateModel.shared.setRoot(stack: RootStack.loading)
    } catch { }
    
    DispatchQueue.main.async {
      self.isLoading = false;
    }
  }
}
