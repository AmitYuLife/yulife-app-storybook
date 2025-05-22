// @generated
// This file was automatically generated and should not be edited.

@_exported import Apollo

extension Yulife {
  class CancelQuestMapLevelChallengeMutation: GraphQLMutation {
    static let operationName: String = "CancelQuestMapLevelChallenge"
    static let operationDocument: Apollo.OperationDocument = .init(
      definition: .init(
        #"mutation CancelQuestMapLevelChallenge($levelSlotId: String!) { cancelQuestMapLevelChallenge(levelSlotId: $levelSlotId) { __typename levelSlotId status } }"#
      ))

    public var levelSlotId: String

    public init(levelSlotId: String) {
      self.levelSlotId = levelSlotId
    }

    public var __variables: Variables? { ["levelSlotId": levelSlotId] }

    struct Data: Yulife.SelectionSet {
      let __data: DataDict
      init(_dataDict: DataDict) { __data = _dataDict }

      static var __parentType: any Apollo.ParentType { Yulife.Objects.Mutation }
      static var __selections: [Apollo.Selection] { [
        .field("cancelQuestMapLevelChallenge", CancelQuestMapLevelChallenge?.self, arguments: ["levelSlotId": .variable("levelSlotId")]),
      ] }

      /// contentId is deprecated starting with 3.108 client version
      var cancelQuestMapLevelChallenge: CancelQuestMapLevelChallenge? { __data["cancelQuestMapLevelChallenge"] }

      /// CancelQuestMapLevelChallenge
      ///
      /// Parent Type: `Challenge`
      struct CancelQuestMapLevelChallenge: Yulife.SelectionSet {
        let __data: DataDict
        init(_dataDict: DataDict) { __data = _dataDict }

        static var __parentType: any Apollo.ParentType { Yulife.Objects.Challenge }
        static var __selections: [Apollo.Selection] { [
          .field("__typename", String.self),
          .field("levelSlotId", String?.self),
          .field("status", String?.self),
        ] }

        var levelSlotId: String? { __data["levelSlotId"] }
        var status: String? { __data["status"] }
      }
    }
  }

}