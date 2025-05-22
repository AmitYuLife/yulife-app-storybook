// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  struct UserDailyPensionContribution: Yulife.SelectionSet, Fragment {
    static var fragmentDefinition: StaticString {
      #"fragment UserDailyPensionContribution on DailyPensionContribution { __typename id active yuCoinAwarded contribution }"#
    }

    let __data: DataDict
    init(_dataDict: DataDict) { __data = _dataDict }

    static var __parentType: any Apollo.ParentType { Yulife.Objects.DailyPensionContribution }
    static var __selections: [Apollo.Selection] { [
      .field("__typename", String.self),
      .field("id", Yulife.ID.self),
      .field("active", Bool.self),
      .field("yuCoinAwarded", Int?.self),
      .field("contribution", String?.self),
    ] }

    var id: Yulife.ID { __data["id"] }
    var active: Bool { __data["active"] }
    var yuCoinAwarded: Int? { __data["yuCoinAwarded"] }
    var contribution: String? { __data["contribution"] }
  }

}