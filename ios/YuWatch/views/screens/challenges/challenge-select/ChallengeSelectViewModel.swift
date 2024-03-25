import Foundation

class ChallengeSelectViewModel: ObservableObject {
  @Published var hasError: String? = nil
  @Published var slots: [LevelSlot] = [];
  @Published var isLoading: Bool = true;
  
  init() {
    Task {
      await loadLevelSlots()
    }
  }
  
  private func loadLevelSlots() async {
    do {
      let coinLedger = try await CoinLedgerModel.shared.getCoinLedger();
      let level = LevelSlotModel.shared.determineLevelToUse(from: coinLedger!)
      let slots = await LevelSlotModel.shared.getQuestMapLevel(level: level);
      
      await MainActor.run {
        self.slots = slots;
        self.isLoading = false;
      }
      
    } catch {
      await MainActor.run {
        self.hasError = error.localizedDescription
      }
    }
  }
  
}
