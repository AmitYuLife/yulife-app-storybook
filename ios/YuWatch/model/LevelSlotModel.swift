import Foundation

let SUPPORTED_SUBTYPES = ["short stroll", "brisk walk", "long walk"];

class LevelSlotModel {
  static let shared = LevelSlotModel()
  
  func getQuestMapLevel(level: Int) async -> [LevelSlot]  {
    AppConsoleModel.shared.showAlert(message: "getQuestMapLevel(level: \(level)")
    do {
      let questMapLevel = try await withCheckedThrowingContinuation { continuation in
        ApolloManager.shared.apolloClient?.fetch(
          query: Yulife.GetQuestMapLevelQuery(level: level, yuniversalMap: nil),
          cachePolicy: .fetchIgnoringCacheData
        ) { result in
          switch result {
          case .success(let graphQLResult):
            continuation.resume(returning: graphQLResult.data?.getQuestMapLevel)
          case .failure(let error):
            continuation.resume(throwing: error)
          }
        }
      }
      
      guard let questMapLevel = questMapLevel else {
        throw SlotError.dataNotFound
      }
      
      return questMapLevel.slots.compactMap { slot -> LevelSlot? in
        guard let unwrappedSlot = slot,
              !unwrappedSlot.isLocked,
              let subtype = unwrappedSlot.subtype?.lowercased(),
              SUPPORTED_SUBTYPES.map({ $0.lowercased() }).contains(subtype) else { return nil }
        
        return slot;
      }
    } catch {
      print("Error fetching slots: \(error)")
      return []
    }
  }
  
  func determineLevelToUse(from coinLedger: CoinLedger) -> Int {
    let currentLevel = coinLedger.currentLevel ?? 0
    let nextLevel = currentLevel - 1
    
    let formatter = DateFormatter()
    formatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss"
    formatter.timeZone = TimeZone(secondsFromGMT: 0)
    
    if let nextLevelAvailableAtString = coinLedger.nextLevelAvailableAt,
       let nextLevelAvailableAt = formatter.date(from: nextLevelAvailableAtString),
       nextLevelAvailableAt > Date() {
      return nextLevel
    } else {
      return currentLevel
    }
  }
  
  enum SlotError: Error {
    case dataNotFound
  }
}
