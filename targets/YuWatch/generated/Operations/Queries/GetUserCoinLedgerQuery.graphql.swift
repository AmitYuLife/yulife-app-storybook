// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  class GetUserCoinLedgerQuery: GraphQLQuery {
    static let operationName: String = "GetUserCoinLedger"
    static let operationDocument: Apollo.OperationDocument = .init(
      definition: .init(
        #"query GetUserCoinLedger { coinLedger: getUserCoinLedger { __typename currentBalance currentLevel yuniversalMap yuniversalLevel nextLevelAvailableAt } }"#
      ))

    public init() {}

    struct Data: Yulife.SelectionSet {
      let __data: DataDict
      init(_dataDict: DataDict) { __data = _dataDict }

      static var __parentType: any Apollo.ParentType { Yulife.Objects.Query }
      static var __selections: [Apollo.Selection] { [
        .field("getUserCoinLedger", alias: "coinLedger", CoinLedger?.self),
      ] }

      var coinLedger: CoinLedger? { __data["coinLedger"] }

      /// CoinLedger
      ///
      /// Parent Type: `CoinLedger`
      struct CoinLedger: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.CoinLedger }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .field("currentBalance", Int?.self),
          .field("currentLevel", Int?.self),
          .field("yuniversalMap", Int?.self),
          .field("yuniversalLevel", Int?.self),
          .field("nextLevelAvailableAt", String?.self),
        ] }

        var currentBalance: Int? { __data["currentBalance"] }
        var currentLevel: Int? { __data["currentLevel"] }
        var yuniversalMap: Int? { __data["yuniversalMap"] }
        var yuniversalLevel: Int? { __data["yuniversalLevel"] }
        var nextLevelAvailableAt: String? { __data["nextLevelAvailableAt"] }
      }
    }
  }

}