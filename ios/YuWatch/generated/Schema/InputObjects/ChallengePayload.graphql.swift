// @generated
// This file was automatically generated and should not be edited.

import Apollo

extension Yulife {
  struct ChallengePayload: InputObject {
    private(set) var __data: InputDict

    init(_ data: InputDict) {
      __data = data
    }

    init(
      startDateTime: GraphQLNullable<String> = nil,
      endDateTime: GraphQLNullable<String> = nil,
      value: GraphQLNullable<Int> = nil
    ) {
      __data = InputDict([
        "startDateTime": startDateTime,
        "endDateTime": endDateTime,
        "value": value
      ])
    }

    var startDateTime: GraphQLNullable<String> {
      get { __data["startDateTime"] }
      set { __data["startDateTime"] = newValue }
    }

    var endDateTime: GraphQLNullable<String> {
      get { __data["endDateTime"] }
      set { __data["endDateTime"] = newValue }
    }

    var value: GraphQLNullable<Int> {
      get { __data["value"] }
      set { __data["value"] = newValue }
    }
  }

}