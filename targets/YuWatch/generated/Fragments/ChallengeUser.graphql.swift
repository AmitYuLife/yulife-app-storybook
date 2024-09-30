// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  struct ChallengeUser: Yulife.SelectionSet, Fragment {
    static var fragmentDefinition: StaticString {
      #"fragment ChallengeUser on User { __typename challengesDoneToday dailyChallengeAmountAvailable }"#
    }

    let __data: DataDict
    init(_dataDict: DataDict) { __data = _dataDict }

    static var __parentType: Apollo.ParentType { Yulife.Objects.User }
    static var __selections: [Apollo.Selection] { [
      .field("__typename", String.self),
      .field("challengesDoneToday", Int?.self),
      .field("dailyChallengeAmountAvailable", Int?.self),
    ] }

    var challengesDoneToday: Int? { __data["challengesDoneToday"] }
    var dailyChallengeAmountAvailable: Int? { __data["dailyChallengeAmountAvailable"] }
  }

}