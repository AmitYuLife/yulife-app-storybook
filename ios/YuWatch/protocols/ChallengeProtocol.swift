import Apollo

protocol ChallengeProtocol {
  var id: String? { get }
  var level: Int? { get }
  var levelSlotId: String? { get }
  var status: String? { get }
  var startDateTime: String? { get }
  var endDateTime: String? { get }
  var yuCoinAwarded: Int? { get }
  var createdBySource: GraphQLEnum<Yulife.ActiveChallengeSourceType>? { get }
  var adjustedEndDate: String? { get }
}

extension ChallengeProtocol {
    func computeAdjustedEndDate(from endDateTime: String?) -> String? {
      
        guard let endDateTime = endDateTime else { return nil }

        let dateFormatter = ISO8601DateFormatter()
        guard let date = dateFormatter.date(from: endDateTime) else { return endDateTime }
        let adjustedDate = date.addingTimeInterval(10)

        return dateFormatter.string(from: adjustedDate)
    }
}

struct ChallengePayload {
    let startDateTime: String
    let endDateTime: String
    let value: Int
}

extension Yulife.CreateQuestMapLevelChallengeMutation.Data.CreateQuestMapLevelChallenge.Challenge: ChallengeProtocol {
    var adjustedEndDate: String? {
        return computeAdjustedEndDate(from: endDateTime)
    }
  
    var createdBySource: Apollo.GraphQLEnum<Yulife.ActiveChallengeSourceType>? {
        return Apollo.GraphQLEnum<Yulife.ActiveChallengeSourceType>.init("watch")
    }
  
    var yuCoinAwarded: Int? {
        return 0
    }
}

extension Yulife.GetUserActiveChallengeQuery.Data.GetUserActiveChallenge.Challenge: ChallengeProtocol {
    var adjustedEndDate: String? {
        return computeAdjustedEndDate(from: endDateTime)
    }
}

extension Yulife.UpdateQuestMapLevelChallengeMutation.Data.UpdateQuestMapLevelChallenge.Challenge: ChallengeProtocol {
    var adjustedEndDate: String? {
        return computeAdjustedEndDate(from: endDateTime)
    }
}
