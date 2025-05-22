// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  class GetTodayActivityQuery: GraphQLQuery {
    static let operationName: String = "GetTodayActivity"
    static let operationDocument: Apollo.OperationDocument = .init(
      definition: .init(
        #"query GetTodayActivity { getUserTodayActivity { __typename ...UserTodayActivity } getDailyPensionContribution { __typename ...UserDailyPensionContribution } }"#,
        fragments: [UserDailyPensionContribution.self, UserTodayActivity.self]
      ))

    public init() {}

    struct Data: Yulife.SelectionSet {
      let __data: DataDict
      init(_dataDict: DataDict) { __data = _dataDict }

      static var __parentType: any Apollo.ParentType { Yulife.Objects.Query }
      static var __selections: [Apollo.Selection] { [
        .field("getUserTodayActivity", [GetUserTodayActivity?]?.self),
        .field("getDailyPensionContribution", GetDailyPensionContribution.self),
      ] }

      var getUserTodayActivity: [GetUserTodayActivity?]? { __data["getUserTodayActivity"] }
      var getDailyPensionContribution: GetDailyPensionContribution { __data["getDailyPensionContribution"] }

      /// GetUserTodayActivity
      ///
      /// Parent Type: `ActivityHistoryChallenge`
      struct GetUserTodayActivity: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.ActivityHistoryChallenge }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .fragment(UserTodayActivity.self),
        ] }

        var id: String? { __data["id"] }
        var earned: Int? { __data["earned"] }
        var milestones: Int? { __data["milestones"] }
        var name: String? { __data["name"] }
        var score: String? { __data["score"] }

        struct Fragments: FragmentContainer {
          let __data: DataDict
          init(_dataDict: DataDict) { __data = _dataDict }

          var userTodayActivity: UserTodayActivity { _toFragment() }
        }
      }

      /// GetDailyPensionContribution
      ///
      /// Parent Type: `DailyPensionContribution`
      struct GetDailyPensionContribution: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.DailyPensionContribution }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .fragment(UserDailyPensionContribution.self),
        ] }

        var id: Yulife.ID { __data["id"] }
        var active: Bool { __data["active"] }
        var yuCoinAwarded: Int? { __data["yuCoinAwarded"] }
        var contribution: String? { __data["contribution"] }

        struct Fragments: FragmentContainer {
          let __data: DataDict
          init(_dataDict: DataDict) { __data = _dataDict }

          var userDailyPensionContribution: UserDailyPensionContribution { _toFragment() }
        }
      }
    }
  }

}