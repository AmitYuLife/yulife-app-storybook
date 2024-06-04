import Foundation

class PassiveActivityModel {
  static let shared = PassiveActivityModel()
  let passiveCoins = 0;
  var lastUpdateDate = Date();
  
  func upsertDailyPassives() async throws -> Int {
    let stepsFromToday = Calendar.current.isDateInToday(lastUpdateDate);
    if(!stepsFromToday) {
      PedometerModel.shared.checkSameDate()
      self.lastUpdateDate = Date();
      return 0
    }
    
    let steps = PedometerModel.shared.todaySteps;
    let startDateTime = Date.startOfToday.iso8601String
    let endDateTime = Date.now.iso8601String
    
    let stepsPayload = Yulife.ChallengesPayload(
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      value: steps,
      type: .init(.steps)
    )
    
    // We don't want to send meditation data, but we need to to be able to calculate
    // the YuCoin awarded with these passives
    let meditationPayload = Yulife.ChallengesPayload(
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      value: 0,
      type: .init(.meditation)
    )
    
    let cyclingPayload = Yulife.ChallengesPayload(
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      value: 0,
      type: .init(.cycling)
    )

    let allPayloads = [stepsPayload, meditationPayload, cyclingPayload]
    let mutation = Yulife.UpsertDailyPassivesMutation(payload: allPayloads)
    
    AppConsoleModel.shared.showAlert(message: "Upserting \(steps) steps")
    
    return try await withCheckedThrowingContinuation { continuation in
      ApolloManager.shared.apolloClient?.perform(mutation: mutation) { result in
        switch result {
        case .success(let graphQLResult):
          if let challenges = graphQLResult.data?.upsertDailyPassives.challenges, !challenges.isEmpty {
              let totalCoins = challenges.compactMap { $0.yuCoinAwarded }.reduce(0, +)
              continuation.resume(returning: totalCoins)
          } else if let errors = graphQLResult.errors, !errors.isEmpty {
              continuation.resume(throwing: errors.first!)
          } else {
              continuation.resume(throwing: NSError(domain: "NoDataError", code: -1, userInfo: [NSLocalizedDescriptionKey: "No data found"]))
          }
        case .failure(let error):
          continuation.resume(throwing: error)
        }
      }
    }
  }
}
