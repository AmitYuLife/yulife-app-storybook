// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  class UpsertDailyPassivesMutation: GraphQLMutation {
    static let operationName: String = "UpsertDailyPassives"
    static let operationDocument: Apollo.OperationDocument = .init(
      definition: .init(
        #"mutation UpsertDailyPassives($payload: [ChallengesPayload!]!) { upsertDailyPassives(payload: $payload) { __typename challenges { __typename updatedAt yuCoinAwarded incomingData { __typename steps meditation distance } } totalCoins currentBalance } }"#
      ))

    public var payload: [ChallengesPayload]

    public init(payload: [ChallengesPayload]) {
      self.payload = payload
    }

    public var __variables: Variables? { ["payload": payload] }

    struct Data: Yulife.SelectionSet {
      let __data: DataDict
      init(_dataDict: DataDict) { __data = _dataDict }

      static var __parentType: any Apollo.ParentType { Yulife.Objects.Mutation }
      static var __selections: [Apollo.Selection] { [
        .field("upsertDailyPassives", UpsertDailyPassives.self, arguments: ["payload": .variable("payload")]),
      ] }

      var upsertDailyPassives: UpsertDailyPassives { __data["upsertDailyPassives"] }

      /// UpsertDailyPassives
      ///
      /// Parent Type: `PassiveChallengesResponse`
      struct UpsertDailyPassives: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.PassiveChallengesResponse }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .field("challenges", [Challenge].self),
          .field("totalCoins", Int.self),
          .field("currentBalance", Int.self),
        ] }

        var challenges: [Challenge] { __data["challenges"] }
        var totalCoins: Int { __data["totalCoins"] }
        var currentBalance: Int { __data["currentBalance"] }

        /// UpsertDailyPassives.Challenge
        ///
        /// Parent Type: `Challenge`
        struct Challenge: Yulife.SelectionSet {
          let __data: DataDict
          init(_dataDict: DataDict) { __data = _dataDict }

          static var __parentType: any Apollo.ParentType { Yulife.Objects.Challenge }
          static var __selections: [Apollo.Selection] { [
            .field("__typename", String.self),
            .field("updatedAt", Int?.self),
            .field("yuCoinAwarded", Int?.self),
            .field("incomingData", IncomingData?.self),
          ] }

          var updatedAt: Int? { __data["updatedAt"] }
          var yuCoinAwarded: Int? { __data["yuCoinAwarded"] }
          var incomingData: IncomingData? { __data["incomingData"] }

          /// UpsertDailyPassives.Challenge.IncomingData
          ///
          /// Parent Type: `MilestoneTarget`
          struct IncomingData: Yulife.SelectionSet {
            let __data: DataDict
            init(_dataDict: DataDict) { __data = _dataDict }

            static var __parentType: any Apollo.ParentType { Yulife.Objects.MilestoneTarget }
            static var __selections: [Apollo.Selection] { [
              .field("__typename", String.self),
              .field("steps", Int?.self),
              .field("meditation", Int?.self),
              .field("distance", Int?.self),
            ] }

            var steps: Int? { __data["steps"] }
            var meditation: Int? { __data["meditation"] }
            var distance: Int? { __data["distance"] }
          }
        }
      }
    }
  }

}