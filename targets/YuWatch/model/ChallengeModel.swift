import Combine
import Foundation

class ChallengeModel {
  static let shared = ChallengeModel();
  
  func imageForSlotSubtype(_ subtype: String) -> String {
    switch subtype {
    case "short stroll":
      return "short-stroll"
    case "brisk walk":
      return "brisk-walk"
    case "long walk":
      return "long-walk"
    default:
      return "short-stroll"
    }
  }
}
