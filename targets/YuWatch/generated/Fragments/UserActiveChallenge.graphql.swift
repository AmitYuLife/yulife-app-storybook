// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  struct UserActiveChallenge: Yulife.SelectionSet, Fragment {
    static var fragmentDefinition: StaticString {
      #"fragment UserActiveChallenge on ActiveChallenge { __typename challenge { __typename id level levelSlotId status endDateTime startDateTime rating subtype yuCoinAwarded createdBySource incomingData { __typename steps meditation distance duration calories } } levelSlot { __typename id subtype unit shouldEndOnLastGoalAchieved fitKitTypes milestones { __typename id XP coins target { __typename steps meditation distance duration calories } } } }"#
    }

    let __data: DataDict
    init(_dataDict: DataDict) { __data = _dataDict }

    static var __parentType: any Apollo.ParentType { Yulife.Objects.ActiveChallenge }
    static var __selections: [Apollo.Selection] { [
      .field("__typename", String.self),
      .field("challenge", Challenge?.self),
      .field("levelSlot", LevelSlot?.self),
    ] }

    var challenge: Challenge? { __data["challenge"] }
    var levelSlot: LevelSlot? { __data["levelSlot"] }

    /// Challenge
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
        .field("endDateTime", String?.self),
        .field("startDateTime", String?.self),
        .field("rating", Int?.self),
        .field("subtype", String?.self),
        .field("yuCoinAwarded", Int?.self),
        .field("createdBySource", GraphQLEnum<Yulife.ActiveChallengeSourceType>?.self),
        .field("incomingData", IncomingData?.self),
      ] }

      var id: String? { __data["id"] }
      var level: Int? { __data["level"] }
      var levelSlotId: String? { __data["levelSlotId"] }
      var status: String? { __data["status"] }
      var endDateTime: String? { __data["endDateTime"] }
      var startDateTime: String? { __data["startDateTime"] }
      var rating: Int? { __data["rating"] }
      var subtype: String? { __data["subtype"] }
      var yuCoinAwarded: Int? { __data["yuCoinAwarded"] }
      var createdBySource: GraphQLEnum<Yulife.ActiveChallengeSourceType>? { __data["createdBySource"] }
      var incomingData: IncomingData? { __data["incomingData"] }

      /// Challenge.IncomingData
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
    }

    /// LevelSlot
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

      /// LevelSlot.Milestone
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

        /// LevelSlot.Milestone.Target
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