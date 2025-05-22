// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  struct UserTodayActivity: Yulife.SelectionSet, Fragment {
    static var fragmentDefinition: StaticString {
      #"fragment UserTodayActivity on ActivityHistoryChallenge { __typename id earned milestones name score }"#
    }

    let __data: DataDict
    init(_dataDict: DataDict) { __data = _dataDict }

    static var __parentType: any Apollo.ParentType { Yulife.Objects.ActivityHistoryChallenge }
    static var __selections: [Apollo.Selection] { [
      .field("__typename", String.self),
      .field("id", String?.self),
      .field("earned", Int?.self),
      .field("milestones", Int?.self),
      .field("name", String?.self),
      .field("score", String?.self),
    ] }

    var id: String? { __data["id"] }
    var earned: Int? { __data["earned"] }
    var milestones: Int? { __data["milestones"] }
    var name: String? { __data["name"] }
    var score: String? { __data["score"] }
  }

}