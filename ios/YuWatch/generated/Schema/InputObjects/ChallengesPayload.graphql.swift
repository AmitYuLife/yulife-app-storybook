// @generated
// This file was automatically generated and should not be edited.

import Apollo

extension Yulife {
  struct ChallengesPayload: InputObject {
    private(set) var __data: InputDict

    init(_ data: InputDict) {
      __data = data
    }

    init(
      startDateTime: String,
      endDateTime: String,
      value: Int,
      type: GraphQLEnum<PassiveChallengeType>,
      bundleIdentifiers: GraphQLNullable<[String?]> = nil
    ) {
      __data = InputDict([
        "startDateTime": startDateTime,
        "endDateTime": endDateTime,
        "value": value,
        "type": type,
        "bundleIdentifiers": bundleIdentifiers
      ])
    }

    var startDateTime: String {
      get { __data["startDateTime"] }
      set { __data["startDateTime"] = newValue }
    }

    var endDateTime: String {
      get { __data["endDateTime"] }
      set { __data["endDateTime"] = newValue }
    }

    var value: Int {
      get { __data["value"] }
      set { __data["value"] = newValue }
    }

    var type: GraphQLEnum<PassiveChallengeType> {
      get { __data["type"] }
      set { __data["type"] = newValue }
    }

    var bundleIdentifiers: GraphQLNullable<[String?]> {
      get { __data["bundleIdentifiers"] }
      set { __data["bundleIdentifiers"] = newValue }
    }
  }

}