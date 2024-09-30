import Foundation

class LoadingViewModel: ObservableObject {
  func onAppear() async {
    let isLoggedIn = AuthenticationModel.shared.initAuthentication()
    
    if(!isLoggedIn){
      print("User has no auth token. Go to onboarding")
      StateModel.shared.setRoot(stack: RootStack.onboarding)
      return;
    }
    
    do {
      let activeChallenge = try await ActiveChallengeModel.shared.getActiveChallenge()
      let _ = try await DailyCoinsModel.shared.getDailyCoins()
      let _ = try await CoinLedgerModel.shared.getCoinLedger()
      
      print("Checking pedometer permission...")
      let hasPedometerPermission = PedometerModel.shared.checkPermissions();
      if(hasPedometerPermission != .authorized) {
        print("Pedometer is not authorized. Go to onboarding")
        StateModel.shared.setRoot(stack: RootStack.onboarding)
        return
      }
      
      print("Starting Pedometer updates...")

      
      if(activeChallenge?.challenge?.createdBySource?.rawValue == Yulife.ActiveChallengeSourceType.watch.rawValue){
          // A watch challenge is in progress!
        StateModel.shared.setRoot(stack: RootStack.challengeProgress)
        return;
      }
      
      StateModel.shared.setRoot(stack: RootStack.home)
      
    } catch {
      StateModel.shared.setRoot(stack: RootStack.offline)
    }
    
  }
}
