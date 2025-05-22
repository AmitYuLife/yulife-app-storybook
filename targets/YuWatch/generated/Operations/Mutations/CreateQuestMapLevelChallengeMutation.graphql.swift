// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  class CreateQuestMapLevelChallengeMutation: GraphQLMutation {
    static let operationName: String = "CreateQuestMapLevelChallenge"
    static let operationDocument: Apollo.OperationDocument = .init(
      definition: .init(
        #"mutation CreateQuestMapLevelChallenge($levelSlotId: String!, $contentId: String, $createdBySource: ActiveChallengeSourceType) { createQuestMapLevelChallenge( levelSlotId: $levelSlotId contentId: $contentId createdBySource: $createdBySource ) { __typename challenge { __typename id level levelSlotId status startDateTime endDateTime } levelSlot { __typename id subtype unit shouldEndOnLastGoalAchieved fitKitTypes milestones { __typename id XP coins target { __typename steps meditation distance duration calories } } } nextLevelAvailableAt } }"#
      ))

    public var levelSlotId: String
    public var contentId: GraphQLNullable<String>
    public var createdBySource: GraphQLNullable<GraphQLEnum<ActiveChallengeSourceType>>

    public init(
      levelSlotId: String,
      contentId: GraphQLNullable<String>,
      createdBySource: GraphQLNullable<GraphQLEnum<ActiveChallengeSourceType>>
    ) {
      self.levelSlotId = levelSlotId
      self.contentId = contentId
      self.createdBySource = createdBySource
    }

    public var __variables: Variables? { [
      "levelSlotId": levelSlotId,
      "contentId": contentId,
      "createdBySource": createdBySource
    ] }

    struct Data: Yulife.SelectionSet {
      let __data: DataDict
      init(_dataDict: DataDict) { __data = _dataDict }

      static var __parentType: any Apollo.ParentType { Yulife.Objects.Mutation }
      static var __selections: [Apollo.Selection] { [
        .field("createQuestMapLevelChallenge", CreateQuestMapLevelChallenge?.self, arguments: [
          "levelSlotId": .variable("levelSlotId"),
          "contentId": .variable("contentId"),
          "createdBySource": .variable("createdBySource")
        ]),
      ] }

      var createQuestMapLevelChallenge: CreateQuestMapLevelChallenge? { __data["createQuestMapLevelChallenge"] }

      /// CreateQuestMapLevelChallenge
      ///
      /// Parent Type: `ActiveResponse`
      struct CreateQuestMapLevelChallenge: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.ActiveResponse }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .field("challenge", Challenge?.self),
          .field("levelSlot", LevelSlot?.self),
          .field("nextLevelAvailableAt", String?.self),
        ] }

        var challenge: Challenge? { __data["challenge"] }
        var levelSlot: LevelSlot? { __data["levelSlot"] }
        var nextLevelAvailableAt: String? { __data["nextLevelAvailableAt"] }

        /// CreateQuestMapLevelChallenge.Challenge
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
            .field("endDateTime", String?.self),
          ] }

          var id: String? { __data["id"] }
          var level: Int? { __data["level"] }
          var levelSlotId: String? { __data["levelSlotId"] }
          var status: String? { __data["status"] }
          var startDateTime: String? { __data["startDateTime"] }
          var endDateTime: String? { __data["endDateTime"] }
        }

        /// CreateQuestMapLevelChallenge.LevelSlot
        ///
        /// Parent Type: `LevelSlot`
        struct LevelSlot: Yulife.SelectionSet {
          let __data: DataDict
          init(_dataDict: DataDict) { __data = _dataDict }

          static var __parentType: any Apollo.ParentType { Yulife.Objects.LevelSlot }
          static var __selections: [Apollo.Selection] { [
            .field("__typename", String.self),
            .field("id", String?.self),
            .field("subtype", String?.self),
            .field("unit", String?.self),
            .field("shouldEndOnLastGoalAchieved", Bool?.self),
            .field("fitKitTypes", [GraphQLEnum<Yulife.FitKitType>]?.self),
            .field("milestones", [Milestone?]?.self),
          ] }

          var id: String? { __data["id"] }
          var subtype: String? { __data["subtype"] }
          var unit: String? { __data["unit"] }
          var shouldEndOnLastGoalAchieved: Bool? { __data["shouldEndOnLastGoalAchieved"] }
          var fitKitTypes: [GraphQLEnum<Yulife.FitKitType>]? { __data["fitKitTypes"] }
          var milestones: [Milestone?]? { __data["milestones"] }

          /// CreateQuestMapLevelChallenge.LevelSlot.Milestone
          ///
          /// Parent Type: `LevelSlotMilestone`
          struct Milestone: Yulife.SelectionSet {
            let __data: DataDict
            init(_dataDict: DataDict) { __data = _dataDict }

            static var __parentType: any Apollo.ParentType { Yulife.Objects.LevelSlotMilestone }
            static var __selections: [Apollo.Selection] { [
              .field("__typename", String.self),
              .field("id", String?.self),
              .field("XP", Int?.self),
              .field("coins", Int?.self),
              .field("target", Target?.self),
            ] }

            var id: String? { __data["id"] }
            var xp: Int? { __data["XP"] }
            var coins: Int? { __data["coins"] }
            var target: Target? { __data["target"] }

            /// CreateQuestMapLevelChallenge.LevelSlot.Milestone.Target
            ///
            /// Parent Type: `MilestoneTarget`
            struct Target: Yulife.SelectionSet {
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