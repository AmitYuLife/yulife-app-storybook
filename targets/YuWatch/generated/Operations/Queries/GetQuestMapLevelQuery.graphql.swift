// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  class GetQuestMapLevelQuery: GraphQLQuery {
    static let operationName: String = "GetQuestMapLevel"
    static let operationDocument: Apollo.OperationDocument = .init(
      definition: .init(
        #"query GetQuestMapLevel($level: Int!, $yuniversalMap: Int) { getQuestMapLevel(level: $level, yuniversalMap: $yuniversalMap) { id __typename level levelChest date slots { __typename id heading duration availableAtLevel isLocked isCompleted reward hasSurge hasBonus surgeMultiplier bonusAmount fitKitTypes type subtype details { __typename heading milestones { __typename id target rewardAmount rewardType } } } } }"#
      ))

    public var level: Int
    public var yuniversalMap: GraphQLNullable<Int>

    public init(
      level: Int,
      yuniversalMap: GraphQLNullable<Int>
    ) {
      self.level = level
      self.yuniversalMap = yuniversalMap
    }

    public var __variables: Variables? { [
      "level": level,
      "yuniversalMap": yuniversalMap
    ] }

    struct Data: Yulife.SelectionSet {
      let __data: DataDict
      init(_dataDict: DataDict) { __data = _dataDict }

      static var __parentType: any Apollo.ParentType { Yulife.Objects.Query }
      static var __selections: [Apollo.Selection] { [
        .field("getQuestMapLevel", GetQuestMapLevel.self, arguments: [
          "level": .variable("level"),
          "yuniversalMap": .variable("yuniversalMap")
        ]),
      ] }

      var getQuestMapLevel: GetQuestMapLevel { __data["getQuestMapLevel"] }

      /// GetQuestMapLevel
      ///
      /// Parent Type: `QuestMapLevel`
      struct GetQuestMapLevel: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.QuestMapLevel }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .field("id", Yulife.ID.self),
          .field("level", Int.self),
          .field("levelChest", String?.self),
          .field("date", String?.self),
          .field("slots", [Slot?].self),
        ] }

        var id: Yulife.ID { __data["id"] }
        var level: Int { __data["level"] }
        var levelChest: String? { __data["levelChest"] }
        var date: String? { __data["date"] }
        var slots: [Slot?] { __data["slots"] }

        /// GetQuestMapLevel.Slot
        ///
        /// Parent Type: `QuestMapLevelSlot`
        struct Slot: Yulife.SelectionSet {
          let __data: DataDict
          init(_dataDict: DataDict) { __data = _dataDict }

          static var __parentType: any Apollo.ParentType { Yulife.Objects.QuestMapLevelSlot }
          static var __selections: [Apollo.Selection] { [
            .field("__typename", String.self),
            .field("id", Yulife.ID.self),
            .field("heading", String.self),
            .field("duration", String.self),
            .field("availableAtLevel", Int.self),
            .field("isLocked", Bool.self),
            .field("isCompleted", Bool.self),
            .field("reward", String?.self),
            .field("hasSurge", Bool.self),
            .field("hasBonus", Bool.self),
            .field("surgeMultiplier", Int?.self),
            .field("bonusAmount", Int?.self),
            .field("fitKitTypes", [GraphQLEnum<Yulife.FitKitType>].self),
            .field("type", String?.self),
            .field("subtype", String?.self),
            .field("details", Details?.self),
          ] }

          var id: Yulife.ID { __data["id"] }
          var heading: String { __data["heading"] }
          var duration: String { __data["duration"] }
          var availableAtLevel: Int { __data["availableAtLevel"] }
          var isLocked: Bool { __data["isLocked"] }
          var isCompleted: Bool { __data["isCompleted"] }
          var reward: String? { __data["reward"] }
          var hasSurge: Bool { __data["hasSurge"] }
          var hasBonus: Bool { __data["hasBonus"] }
          var surgeMultiplier: Int? { __data["surgeMultiplier"] }
          var bonusAmount: Int? { __data["bonusAmount"] }
          var fitKitTypes: [GraphQLEnum<Yulife.FitKitType>] { __data["fitKitTypes"] }
          var type: String? { __data["type"] }
          var subtype: String? { __data["subtype"] }
          var details: Details? { __data["details"] }

          /// GetQuestMapLevel.Slot.Details
          ///
          /// Parent Type: `QuestMapLevelSlotDetails`
          struct Details: Yulife.SelectionSet {
            let __data: DataDict
            init(_dataDict: DataDict) { __data = _dataDict }

            static var __parentType: any Apollo.ParentType { Yulife.Objects.QuestMapLevelSlotDetails }
            static var __selections: [Apollo.Selection] { [
              .field("__typename", String.self),
              .field("heading", String.self),
              .field("milestones", [Milestone?]?.self),
            ] }

            var heading: String { __data["heading"] }
            var milestones: [Milestone?]? { __data["milestones"] }

            /// GetQuestMapLevel.Slot.Details.Milestone
            ///
            /// Parent Type: `QuestMapLevelSlotDetailsMilestone`
            struct Milestone: Yulife.SelectionSet {
              let __data: DataDict
              init(_dataDict: DataDict) { __data = _dataDict }

              static var __parentType: any Apollo.ParentType { Yulife.Objects.QuestMapLevelSlotDetailsMilestone }
              static var __selections: [Apollo.Selection] { [
                .field("__typename", String.self),
                .field("id", Yulife.ID.self),
                .field("target", String.self),
                .field("rewardAmount", Int.self),
                .field("rewardType", String.self),
              ] }

              var id: Yulife.ID { __data["id"] }
              var target: String { __data["target"] }
              var rewardAmount: Int { __data["rewardAmount"] }
              var rewardType: String { __data["rewardType"] }
            }
          }
        }
      }
    }
  }

}