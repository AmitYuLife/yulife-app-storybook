// @generated
// This file was automatically generated and should not be edited.

import Apollo

protocol Yulife_SelectionSet: Apollo.SelectionSet & Apollo.RootSelectionSet
where Schema == Yulife.SchemaMetadata {}

protocol Yulife_InlineFragment: Apollo.SelectionSet & Apollo.InlineFragment
where Schema == Yulife.SchemaMetadata {}

protocol Yulife_MutableSelectionSet: Apollo.MutableRootSelectionSet
where Schema == Yulife.SchemaMetadata {}

protocol Yulife_MutableInlineFragment: Apollo.MutableSelectionSet & Apollo.InlineFragment
where Schema == Yulife.SchemaMetadata {}

extension Yulife {
  typealias SelectionSet = Yulife_SelectionSet

  typealias InlineFragment = Yulife_InlineFragment

  typealias MutableSelectionSet = Yulife_MutableSelectionSet

  typealias MutableInlineFragment = Yulife_MutableInlineFragment

  enum SchemaMetadata: Apollo.SchemaMetadata {
    static let configuration: any Apollo.SchemaConfiguration.Type = SchemaConfiguration.self

    static func objectType(forTypename typename: String) -> Apollo.Object? {
      switch typename {
      case "ActiveChallenge": return Yulife.Objects.ActiveChallenge
      case "ActiveResponse": return Yulife.Objects.ActiveResponse
      case "ActivityHistoryChallenge": return Yulife.Objects.ActivityHistoryChallenge
      case "Challenge": return Yulife.Objects.Challenge
      case "CoinLedger": return Yulife.Objects.CoinLedger
      case "DailyPensionContribution": return Yulife.Objects.DailyPensionContribution
      case "LevelSlot": return Yulife.Objects.LevelSlot
      case "LevelSlotMilestone": return Yulife.Objects.LevelSlotMilestone
      case "MilestoneLogEntry": return Yulife.Objects.MilestoneLogEntry
      case "MilestoneTarget": return Yulife.Objects.MilestoneTarget
      case "Mutation": return Yulife.Objects.Mutation
      case "PassiveChallengesResponse": return Yulife.Objects.PassiveChallengesResponse
      case "Query": return Yulife.Objects.Query
      case "QuestMapLevel": return Yulife.Objects.QuestMapLevel
      case "QuestMapLevelSlot": return Yulife.Objects.QuestMapLevelSlot
      case "QuestMapLevelSlotDetails": return Yulife.Objects.QuestMapLevelSlotDetails
      case "QuestMapLevelSlotDetailsMilestone": return Yulife.Objects.QuestMapLevelSlotDetailsMilestone
      case "User": return Yulife.Objects.User
      default: return nil
      }
    }
  }

  enum Objects {}
  enum Interfaces {}
  enum Unions {}

}