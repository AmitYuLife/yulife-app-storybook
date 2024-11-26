import Foundation

struct ActiveChallenge {
  var levelSlot: LevelSlot?
  var challenge: ChallengeProtocol?
}

let ACTIVE_CHALLENGE_STORAGE_KEY = "ACTIVE_CHALLENGE_VALUE"
let ACTIVE_CHALLENGE_ID_STORAGE_KEY = "ACTIVE_CHALLENGE_ID";

enum CanStartChallenge {
  case yes
  case no
  case noChallengesLeft
  case hasUnityLeft
  case challengeOnPhone
}

class ActiveChallengeModel: ObservableObject {
  static let shared = ActiveChallengeModel()
  private var refetchTimer: Timer? = nil
  
  @Published var localActiveChallengeValue: Int {
    didSet {
      saveLocalActiveChallengeValue()
    }
  };
  
  @Published var activeChallengeValue = 0
  @Published var isLoading: Bool = false;
  @Published var canStartChallenge: CanStartChallenge = .yes;
  @Published var challengesDoneToday = 0;
  @Published var challengesAvailableToday = 0;
  @Published private var lastUpdatedSteps = 0;
  
  init() {
    self.localActiveChallengeValue = UserDefaults.standard.integer(forKey: ACTIVE_CHALLENGE_STORAGE_KEY)
  }
  
  @Published var activeChallenge: ActiveChallenge? {
    didSet {
      onChallengeUpdated()
    }
  }
  
  func getSavedChallenge() -> String? {
    return UserDefaults.standard.string(forKey: ACTIVE_CHALLENGE_ID_STORAGE_KEY)
  }
  
  func onChallengeUpdated() {
    if(activeChallenge != nil && activeChallenge?.challenge?.createdBySource != .watch) {
      self.canStartChallenge = .challengeOnPhone;
      return;
    }
    
    let savedActiveChallengeId = getSavedChallenge()
    
    if(savedActiveChallengeId != activeChallenge?.challenge?.id){
      self.localActiveChallengeValue = 0;
      
      if(activeChallenge?.challenge != nil) {
        UserDefaults.standard.setValue(activeChallenge?.challenge?.id, forKey: ACTIVE_CHALLENGE_ID_STORAGE_KEY)
      } else {
        UserDefaults.standard.removeObject(forKey: ACTIVE_CHALLENGE_ID_STORAGE_KEY)
      }
    } else {
      self.canStartChallenge = .challengeOnPhone
    }
    
    if(self.challengesDoneToday >= self.challengesAvailableToday) {
      self.canStartChallenge = .noChallengesLeft
      return
    }
    
    Task {
      do {
        let coinLedger = try await CoinLedgerModel.shared.getCoinLedger()
        if(coinLedger?.currentLevel == nil) {
          self.canStartChallenge = .no;
          return
        }
        
        let levelToUse = LevelSlotModel.shared.determineLevelToUse(from: coinLedger!)
        if(levelToUse % 50 == 0) {
          self.canStartChallenge = .hasUnityLeft
          return
        }
        
        if(levelToUse == 7 && coinLedger?.yuniversalMap ?? 0 > 0) {
          self.canStartChallenge = .hasUnityLeft
          return
        }
      } catch {
        self.canStartChallenge = .no
        return
      }
      
      self.canStartChallenge = .yes;
    }
  }
  
  func setLocalActiveChallengeValue(steps: Int) {
    self.localActiveChallengeValue = steps;
  }
  
  func saveLocalActiveChallengeValue() {
    if(self.localActiveChallengeValue == 0){
      UserDefaults.standard.removeObject(forKey: ACTIVE_CHALLENGE_STORAGE_KEY)
      return
    }
    
    UserDefaults.standard.set(self.localActiveChallengeValue, forKey: ACTIVE_CHALLENGE_STORAGE_KEY)
  }
  
  
  func onChallengeCompleted() {
    self.challengesDoneToday = self.challengesDoneToday + 1;
  }
  
  func getActiveChallenge() async throws -> ActiveChallenge? {
    if(self.activeChallenge != nil){
      return self.activeChallenge;
    }
    
    return try await fetchActiveChallenge()
  }
  
  func fetchActiveChallenge() async throws -> ActiveChallenge?  {
    AppConsoleModel.shared.showAlert(message: "fetchActiveChallenge()")
    do {
      self.isLoading = true;
      
      let data = try await withCheckedThrowingContinuation { continuation in
        ApolloManager.shared.apolloClient?.fetch(
          query: Yulife.GetUserActiveChallengeQuery(),
          cachePolicy: .fetchIgnoringCacheData
        ) { result in
          switch result {
          case .success(let graphQLResult):
            continuation.resume(returning: graphQLResult.data)
          case .failure(let error):
            continuation.resume(throwing: error)
          }
        }
      }
      
      let _activeChallenge = data?.getUserActiveChallenge;
      let user = data?.getCurrentUser;
      let _ = try await CoinLedgerModel.shared.fetchCoinLedger();
      
      self.isLoading = false;
      self.challengesDoneToday = user?.challengesDoneToday ?? 0;
      self.challengesAvailableToday = user?.dailyChallengeAmountAvailable ?? 0;

      guard let unwrappedActiveChallenge = _activeChallenge,
            let levelSlot = unwrappedActiveChallenge.levelSlot,
            let challenge = unwrappedActiveChallenge.challenge else {
        self.activeChallenge = nil
        self.localActiveChallengeValue = 0
        refetchTimer?.invalidate()
        refetchTimer = nil
        return nil
      }

      let activeChallenge = ActiveChallenge(levelSlot: levelSlot, challenge: challenge)
      DispatchQueue.main.async {
        self.activeChallenge = activeChallenge
      }
      
      // We have fetched an active challenge manually. Setup the timer to refetch when it's done
      // This is not needed if it's a watch challenge
      if(activeChallenge.challenge?.adjustedEndDate != nil && activeChallenge.challenge?.createdBySource != Yulife.ActiveChallengeSourceType.watch){
        let dateFormatter = ISO8601DateFormatter()
        guard let endDate = dateFormatter.date(from: activeChallenge.challenge!.adjustedEndDate!) else {
          return activeChallenge
        }
        self.refetchTimer?.invalidate()
        
        if(endDate.timeIntervalSinceNow > 0) {
          DispatchQueue.main.async {
            self.refetchTimer = Timer.scheduledTimer(withTimeInterval: endDate.timeIntervalSinceNow + 20, repeats: false) { _ in
              Task {
                do {
                  let _ = try await self.fetchActiveChallenge()
                }
              }
            }
          }
        }
      }
      
      return activeChallenge
    } catch {
      DispatchQueue.main.async {
        self.isLoading = false
        self.activeChallenge = nil
       
      }
      return nil
    }
  }
  
  func setActiveChallenge(activeChallenge: ActiveChallenge?) {
    self.activeChallenge = activeChallenge
    
    // The active challenge has been set by the watch, let's cancel the refetch timer if it exists
    self.refetchTimer?.invalidate();
    self.refetchTimer = nil;
  }
  
  func updateActiveChallenge(steps: Int) async throws -> ChallengeProtocol? {
    if(activeChallenge == nil){
      return nil;
    }
    
    DispatchQueue.main.async {
      self.activeChallengeValue = steps;
    }
    
    guard let startDateTime: String = activeChallenge!.challenge?.startDateTime,
          let levelSlotId: String = activeChallenge!.challenge?.levelSlotId,
          let endDateTime: String = activeChallenge!.challenge?.adjustedEndDate else {
      print("Challenge startDateTime or endDateTime is nil")
      return nil
    }
    
    let payload = Yulife.ChallengePayload(
      startDateTime: .some(startDateTime),
      endDateTime: .some(endDateTime),
      value: .some(steps)
    )
    
    let mutation = Yulife.UpdateQuestMapLevelChallengeMutation(
      levelSlotId: .init(levelSlotId),
      contentId: .none,
      payload: .some(payload)
    )
    
    return try await withCheckedThrowingContinuation { continuation in
      ApolloManager.shared.apolloClient?.perform(mutation: mutation) { result in
        switch result {
        case .success(let graphQLResult):
          if(graphQLResult.data?.updateQuestMapLevelChallenge?.challenge == nil){
            continuation.resume(throwing: NSError(domain: "com.yulife", code: 420))
            return
          }
          
          continuation.resume(returning: graphQLResult.data?.updateQuestMapLevelChallenge?.challenge)
          
        case .failure(let error):
          continuation.resume(throwing: error)
        }
      }
    }
  }
  
  func cancelActiveChallenge() async throws -> Bool {
    guard let levelSlotId = self.activeChallenge?.levelSlot?.levelSlotId else {
      return false
    }
    
    let mutation = Yulife.CancelQuestMapLevelChallengeMutation(levelSlotId: levelSlotId)
    
    let result = try await withCheckedThrowingContinuation { continuation in
      ApolloManager.shared.apolloClient?.perform(mutation: mutation) { result in
        switch result {
        case .success(let graphQLResult):
          continuation.resume(returning: graphQLResult.data?.cancelQuestMapLevelChallenge?.status)
        case .failure(let error):
          continuation.resume(throwing: error)
        }
      }
    }
    
    let cancelled = result == "cancelled" || result == "completed";
    
    if(cancelled) {
      ConnectivityModel.shared.refetchAppData(dataTypes: [AppDataType.activeChallenge, AppDataType.coinLedger, AppDataType.todayActivity])
      
      DispatchQueue.main.async {
        self.activeChallenge = nil;
      }
    }
    
    return cancelled;
  }
}
