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
}

struct ChallengePayload {
    let startDateTime: String
    let endDateTime: String
    let value: Int
}

extension Yulife.CreateQuestMapLevelChallengeMutation.Data.CreateQuestMapLevelChallenge.Challenge: ChallengeProtocol {
  var createdBySource: Apollo.GraphQLEnum<Yulife.ActiveChallengeSourceType>? {
    return Apollo.GraphQLEnum<Yulife.ActiveChallengeSourceType>.init("watch")
  }
  
  var yuCoinAwarded: Int? {
    return 0
  }
}

extension Yulife.GetUserActiveChallengeQuery.Data.GetUserActiveChallenge.Challenge: ChallengeProtocol {
  // Conformance is automatic since the properties match.
}

extension Yulife.UpdateQuestMapLevelChallengeMutation.Data.UpdateQuestMapLevelChallenge.Challenge: ChallengeProtocol {
  // Conformance is automatic since the properties match.
}
