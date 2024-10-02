import Foundation
import SwiftUI
import Combine

class HomeScreenViewModel: ObservableObject {
  private var cancellables = Set<AnyCancellable>()
  @ObservedObject var activeChallengeModel = ActiveChallengeModel.shared;
  @ObservedObject var pedometerModel = PedometerModel.shared;
  @ObservedObject var dailyCoinsModel = DailyCoinsModel.shared;
  
  @Published var currentLevel: Int = 0
  @Published var yucoinToday: Int = 0
  @Published var currentSteps: Int = 0;
  @Published var hasError: String? = nil
  @Published var navigationPath = NavigationPath()
  
  @Published var canStartChallenge: CanStartChallenge = .no;
  
  init() {
    setupSubscriptions()
    
    Task { 
      do {
        do { try await PedometerModel.shared.startUpdates(); }
        catch { print("Failed to start Pedometer in HomeScreenViewModel", error) }
        
        
        let _ = try await CoinLedgerModel.shared.fetchCoinLedger()
        let _ = try await DailyCoinsModel.shared.fetchDailyCoins()
        
      } catch{}
    }
  }
  
  func resetNavigation() {
    DispatchQueue.main.async {
      if(self.navigationPath.count > 0){
        self.navigationPath = NavigationPath();
      }
    }
  }
  
  private func setupSubscriptions() {
    activeChallengeModel.$canStartChallenge
      .receive(on: DispatchQueue.main)
      .sink { [weak self] canStartChallenge in
        if(self?.canStartChallenge != canStartChallenge){
          self?.canStartChallenge = canStartChallenge
          self?.resetNavigation()
        }
      }
      .store(in: &cancellables)
    
    dailyCoinsModel.$todayCoins
      .receive(on: DispatchQueue.main)
      .sink { [weak self] todayCoins in
        self?.yucoinToday = todayCoins ?? 0;
      }
      .store(in: &cancellables)
  }
}
