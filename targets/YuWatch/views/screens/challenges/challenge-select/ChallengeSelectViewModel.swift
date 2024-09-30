import Foundation

class ChallengeSelectViewModel: ObservableObject {
  @Published var hasError: String? = nil
  @Published var slots: [LevelSlot] = [];
  @Published var isLoading: Bool = true;
  
  init() {
    Task { await self.loadLevelSlots() }
  }
  
  public func retry() {
    self.hasError = nil;
    Task { await self.loadLevelSlots() }
  }
  
  private func loadLevelSlots() async {
    do {
      let coinLedger = try await CoinLedgerModel.shared.getCoinLedger();
      let level = LevelSlotModel.shared.determineLevelToUse(from: coinLedger!)
      let slots = try await LevelSlotModel.shared.getQuestMapLevel(level: level, yuniversalMap: coinLedger?.yuniversalMap);
      
      await MainActor.run {
        self.slots = slots;
        self.isLoading = false;
      }
      
    } catch {
      Task {
        AppConsoleModel.shared.showAlert(message: "Failed to fetch level slot: \(error.localizedDescription)")
        
        if let slotError = error as? LevelSlotModel.SlotError, slotError == .dataNotFound {
          // Our level may have changed since we requested these slots, so we'll refetch active challenge
          // and coin ledger (part of fetchActiveChallenge) and try again
          let _ = try await ActiveChallengeModel.shared.fetchActiveChallenge()
          if(self.hasError == nil) {
            return await loadLevelSlots()
          }
          
          DispatchQueue.main.async {
            self.isLoading = false;
          }
        }
      }
      
      await MainActor.run {
        self.hasError = error.localizedDescription
      }
    }
  }
}
