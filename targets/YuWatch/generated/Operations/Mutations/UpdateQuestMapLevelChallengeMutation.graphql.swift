// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  class UpdateQuestMapLevelChallengeMutation: GraphQLMutation {
    static let operationName: String = "UpdateQuestMapLevelChallenge"
    static let operationDocument: Apollo.OperationDocument = .init(
      definition: .init(
        #"mutation UpdateQuestMapLevelChallenge($levelSlotId: String!, $contentId: String, $payload: ChallengePayload) { updateQuestMapLevelChallenge( levelSlotId: $levelSlotId contentId: $contentId payload: $payload ) { __typename challenge { __typename id level levelSlotId status startDateTime createdBySource endDateTime createdAt incomingData { __typename steps meditation distance duration calories } milestoneLog { __typename data { __typename steps meditation distance duration calories } } yuCoinAwarded rating } } }"#
      ))

    public var levelSlotId: String
    public var contentId: GraphQLNullable<String>
    public var payload: GraphQLNullable<ChallengePayload>

    public init(
      levelSlotId: String,
      contentId: GraphQLNullable<String>,
      payload: GraphQLNullable<ChallengePayload>
    ) {
      self.levelSlotId = levelSlotId
      self.contentId = contentId
      self.payload = payload
    }

    public var __variables: Variables? { [
      "levelSlotId": levelSlotId,
      "contentId": contentId,
      "payload": payload
    ] }

    struct Data: Yulife.SelectionSet {
      let __data: DataDict
      init(_dataDict: DataDict) { __data = _dataDict }

      static var __parentType: any Apollo.ParentType { Yulife.Objects.Mutation }
      static var __selections: [Apollo.Selection] { [
        .field("updateQuestMapLevelChallenge", UpdateQuestMapLevelChallenge?.self, arguments: [
          "levelSlotId": .variable("levelSlotId"),
          "contentId": .variable("contentId"),
          "payload": .variable("payload")
        ]),
      ] }

      var updateQuestMapLevelChallenge: UpdateQuestMapLevelChallenge? { __data["updateQuestMapLevelChallenge"] }

      /// UpdateQuestMapLevelChallenge
      ///
      /// Parent Type: `ActiveResponse`
      struct UpdateQuestMapLevelChallenge: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.ActiveResponse }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .field("challenge", Challenge?.self),
        ] }

        var challenge: Challenge? { __data["challenge"] }

        /// UpdateQuestMapLevelChallenge.Challenge
        ///
        /// Parent Type: `Challenge`
        struct Challenge: Yulife.SelectionSet {
          let __data: DataDict
          init(_dataDict: DataDict) { __data = _dataDict }

          static var __parentType: any Apollo.ParentType { Yulife.Objects.Challenge }
          static var __selections: [Apollo.Selection] { [
            .field("__typename", String.self),
            .field("id", String?.self),
            .field("level", Int?.self),
            .field("levelSlotId", String?.self),
            .field("status", String?.self),
            .field("startDateTime", String?.self),
            .field("createdBySource", GraphQLEnum<Yulife.ActiveChallengeSourceType>?.self),
            .field("endDateTime", String?.self),
            .field("createdAt", Int?.self),
            .field("incomingData", IncomingData?.self),
            .field("milestoneLog", [MilestoneLog?]?.self),
            .field("yuCoinAwarded", Int?.self),
            .field("rating", Int?.self),
          ] }

          var id: String? { __data["id"] }
          var level: Int? { __data["level"] }
          var levelSlotId: String? { __data["levelSlotId"] }
          var status: String? { __data["status"] }
          var startDateTime: String? { __data["startDateTime"] }
          var createdBySource: GraphQLEnum<Yulife.ActiveChallengeSourceType>? { __data["createdBySource"] }
          var endDateTime: String? { __data["endDateTime"] }
          var createdAt: Int? { __data["createdAt"] }
          var incomingData: IncomingData? { __data["incomingData"] }
          var milestoneLog: [MilestoneLog?]? { __data["milestoneLog"] }
          var yuCoinAwarded: Int? { __data["yuCoinAwarded"] }
          var rating: Int? { __data["rating"] }

          /// UpdateQuestMapLevelChallenge.Challenge.IncomingData
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
              .field("duration", Int?.self),
              .field("calories", Int?.self),
            ] }

            var steps: Int? { __data["steps"] }
            var meditation: Int? { __data["meditation"] }
            var distance: Int? { __data["distance"] }
            var duration: Int? { __data["duration"] }
            var calories: Int? { __data["calories"] }
          }

          /// UpdateQuestMapLevelChallenge.Challenge.MilestoneLog
          ///
          /// Parent Type: `MilestoneLogEntry`
          struct MilestoneLog: Yulife.SelectionSet {
            let __data: DataDict
            init(_dataDict: DataDict) { __data = _dataDict }

            static var __parentType: any Apollo.ParentType { Yulife.Objects.MilestoneLogEntry }
            static var __selections: [Apollo.Selection] { [
              .field("__typename", String.self),
              .field("data", Data?.self),
            ] }

            var data: Data? { __data["data"] }

            /// UpdateQuestMapLevelChallenge.Challenge.MilestoneLog.Data
            ///
            /// Parent Type: `MilestoneTarget`
            struct Data: Yulife.SelectionSet {
              let __data: DataDict
              init(_dataDict: DataDict) { __data = _dataDict }

              static var __parentType: any Apollo.ParentType { Yulife.Objects.MilestoneTarget }
              static var __selections: [Apollo.Selection] { [
                .field("__typename", String.self),
                .field("steps", Int?.self),
                .field("meditation", Int?.self),
                .field("distance", Int?.self),
                .field("duration", Int?.self),
                .field("calories", Int?.self),
              ] }

              var steps: Int? { __data["steps"] }
              var meditation: Int? { __data["meditation"] }
              var distance: Int? { __data["distance"] }
              var duration: Int? { __data["duration"] }
              var calories: Int? { __data["calories"] }
            }
          }
        }
      }
    }
  }

}