import Foundation

typealias CoinLedger = Yulife.GetUserCoinLedgerQuery.Data.CoinLedger

class CoinLedgerModel {
  static let shared = CoinLedgerModel()
  private var coinLedger: CoinLedger? = nil;
  private var refetchTimer: Timer? = nil

  func getCoinLedger() async throws -> CoinLedger?  {
    if(self.coinLedger == nil){
      return try await fetchCoinLedger();
    }
    
    return self.coinLedger;
  }
  
  func fetchCoinLedger() async throws -> CoinLedger?  {
    do {
      let coinLedger = try await withCheckedThrowingContinuation { continuation in
        ApolloManager.shared.apolloClient?.fetch(
          query: Yulife.GetUserCoinLedgerQuery(),
          cachePolicy: .fetchIgnoringCacheData
        ) { result in
          switch result {
          case .success(let graphQLResult):
            continuation.resume(returning: graphQLResult.data?.coinLedger)
          case .failure(let error):
            continuation.resume(throwing: error)
          }
        }
      }
      
      self.coinLedger = coinLedger;
      refetchTimer?.invalidate()
      
      if(self.coinLedger?.nextLevelAvailableAt != nil){
        print("We have a enxt level available at!")
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss"
        
        guard let nextLevelAvailableAt = dateFormatter.date(from: self.coinLedger!.nextLevelAvailableAt!) else { return coinLedger }
        self.refetchTimer?.invalidate()
      
        if(nextLevelAvailableAt.timeIntervalSinceNow + 5 > 0) {
          DispatchQueue.main.async {
            self.refetchTimer = Timer.scheduledTimer(withTimeInterval: nextLevelAvailableAt.timeIntervalSinceNow + 10, repeats: false) { _ in
              Task {
                do {
                  let _ = try await self.fetchCoinLedger()
                  let _ = try await ActiveChallengeModel.shared.fetchActiveChallenge()
                }
              }
            }
          }
        }
      }
      
      return coinLedger
      
    } catch {
      print("Error fetching coin ledger")
      return nil
    }
  }
}
