import Foundation


class DailyCoinsModel: ObservableObject {
  static let shared = DailyCoinsModel()
  @Published var todayCoins: Int?;
  
  func getDailyCoins() async throws -> Int {
    if(todayCoins != nil){
      return todayCoins!;
    }
    
    return try await fetchDailyCoins()
  }
  
  func fetchDailyCoins() async throws -> Int {
    let dailyPassives = try await PassiveActivityModel.shared.upsertDailyPassives()
    
    let todayActivity = try await withCheckedThrowingContinuation { continuation in
      ApolloManager.shared.apolloClient?.fetch(query: Yulife.GetTodayActivityQuery(), cachePolicy: .fetchIgnoringCacheData) { result in
        switch result {
        case .success(let graphQLResult):
          if let activities = graphQLResult.data {
            let pensionYucoin = activities.getDailyPensionContribution.yuCoinAwarded ?? 0
            print("Pension Yucoin: \(pensionYucoin)")
            
            let activitiesEarned: [Int] = activities.getUserTodayActivity?.map { activity in
              guard let earned = activity?.earned else {
                return 0
              }
              
              return earned
            } ?? []
            
            let challengesCoin: Int = activitiesEarned.reduce(0, +)
            print("Challenges coin: \(challengesCoin)")
            
            let totalYuCoins = challengesCoin + pensionYucoin
            print("Total YuCoins for today: \(totalYuCoins)")
            

            
            continuation.resume(returning: totalYuCoins)
          } else {
            continuation.resume(throwing: NSError(domain: "DataError", code: 0, userInfo: [NSLocalizedDescriptionKey: "No data found"]))
          }
        case .failure(let error):
          continuation.resume(throwing: error)
        }
      }
    }
    
    self.todayCoins = dailyPassives + todayActivity
    
    return self.todayCoins ?? 0
  }
}
