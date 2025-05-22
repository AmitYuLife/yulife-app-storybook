// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  class GetUserActiveChallengeQuery: GraphQLQuery {
    static let operationName: String = "GetUserActiveChallenge"
    static let operationDocument: Apollo.OperationDocument = .init(
      definition: .init(
        #"query GetUserActiveChallenge { getUserActiveChallenge { __typename ...UserActiveChallenge } getCurrentUser { __typename ...ChallengeUser } }"#,
        fragments: [ChallengeUser.self, UserActiveChallenge.self]
      ))

    public init() {}

    struct Data: Yulife.SelectionSet {
      let __data: DataDict
      init(_dataDict: DataDict) { __data = _dataDict }

      static var __parentType: any Apollo.ParentType { Yulife.Objects.Query }
      static var __selections: [Apollo.Selection] { [
        .field("getUserActiveChallenge", GetUserActiveChallenge?.self),
        .field("getCurrentUser", GetCurrentUser?.self),
      ] }

      var getUserActiveChallenge: GetUserActiveChallenge? { __data["getUserActiveChallenge"] }
      var getCurrentUser: GetCurrentUser? { __data["getCurrentUser"] }

      /// GetUserActiveChallenge
      ///
      /// Parent Type: `ActiveChallenge`
      struct GetUserActiveChallenge: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.ActiveChallenge }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .fragment(UserActiveChallenge.self),
        ] }

        var challenge: Challenge? { __data["challenge"] }
        var levelSlot: LevelSlot? { __data["levelSlot"] }

        struct Fragments: FragmentContainer {
          let __data: DataDict
          init(_dataDict: DataDict) { __data = _dataDict }

          var userActiveChallenge: UserActiveChallenge { _toFragment() }
        }

        typealias Challenge = UserActiveChallenge.Challenge

        typealias LevelSlot = UserActiveChallenge.LevelSlot
      }

      /// GetCurrentUser
      ///
      /// Parent Type: `User`
      struct GetCurrentUser: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.User }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .fragment(ChallengeUser.self),
        ] }

        @available(*, deprecated, message: "Use getUserChallengesDoneToday query instead")
        var challengesDoneToday: Int? { __data["challengesDoneToday"] }
        @available(*, deprecated, message: "Use getUserDailyChallengeAmountAvailable query instead")
        var dailyChallengeAmountAvailable: Int? { __data["dailyChallengeAmountAvailable"] }

        struct Fragments: FragmentContainer {
          let __data: DataDict
          init(_dataDict: DataDict) { __data = _dataDict }

          var challengeUser: ChallengeUser { _toFragment() }
        }
      }
    }
  }

}