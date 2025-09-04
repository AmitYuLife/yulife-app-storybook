import Foundation
import SwiftUI
import Combine
import HealthKit

class ChallengeProgressViewModel: ObservableObject {
  @ObservedObject var pedometerModel = PedometerModel.shared
  @ObservedObject var activeChallengeModel = ActiveChallengeModel.shared
  @Published var progresses: [CGFloat] = []
  @Published var countdownString = "00:00"
  @Published var isUpdating = false
  @Published var isCancelOpen = false
  @Published var isSubmittingOpen = false
  @Published var isErrorOpen = false
  @Published var steps: Int {
    didSet {
      updateProgresses()
    }
  }
  
  private var cancellables = Set<AnyCancellable>()
  private var uiCountdownTimer: Timer?
  private var initialSteps = -1
  private var workoutSession: HKWorkoutSession?;
  // The steps that we got from local storage
  private var additionalSteps = 0
  
  private var hasChallengeEnded = false {
    didSet {
      Task { await submitChallengeEnd() }
      
      if(self.hasChallengeEnded) {
        self.isSubmittingOpen = true
        killTimers()
      }
    }
  }
  
  private var lastReachedMilestone: Int = 0 {
    didSet {
      VibrateManager.shared.vibrate(type: .success)
    }
  }
  
  private var activeChallenge: ActiveChallenge? {
    didSet {
      initialSteps = pedometerModel.todaySteps
      
      startCountdownTimer()
      updateProgresses()
    }
  }
  
  init() {
    self.additionalSteps = ActiveChallengeModel.shared.localActiveChallengeValue
    self.steps = additionalSteps
    
    fetchActiveChallenge()
    setupSubscriptions()
    Task { await startWorkoutSession() }
    
    VibrateManager.shared.vibrate(type: .start)
  }
  
  private func fetchActiveChallenge() {
    Task {
      do {
        let activeChallenge = try await ActiveChallengeModel.shared.getActiveChallenge()
        self.activeChallenge = activeChallenge
      } catch {
        print("Error retrieving active challenge: \(error.localizedDescription)")
      }
    }
  }
  
  // MARK: - Setup Subscriptions
  private func setupSubscriptions() {
    setupActiveChallengeSubscription()
    setupPedometerModelSubscription()
  }
  
  private func setupActiveChallengeSubscription() {
    activeChallengeModel.$activeChallenge
      .receive(on: DispatchQueue.main)
      .sink { [weak self] activeChallenge in
        self?.handleActiveChallengeChange(activeChallenge: activeChallenge)
      }
      .store(in: &cancellables)
  }
  
  private func setupPedometerModelSubscription() {
    pedometerModel.$todaySteps
      .receive(on: DispatchQueue.main)
      .sink { [weak self] todaySteps in
        if(self?.hasChallengeEnded != true) {
          self?.handleTodayStepsChange(todaySteps: todaySteps)
        }
      }
      .store(in: &cancellables)
  }
  
  // MARK: - Subscription handlers
  private func handleActiveChallengeChange(activeChallenge: ActiveChallenge?) {
    guard activeChallenge != nil else {
      onDisappear()
      StateModel.shared.setRoot(stack: .home)
      return
    }
    
    let storedId = activeChallengeModel.getSavedChallenge()
    if storedId != activeChallenge?.challenge?.id {
      onDisappear()
      StateModel.shared.setRoot(stack: .home)
    }
  }
  
  private func handleTodayStepsChange(todaySteps: Int) {
    guard !hasChallengeEnded else { return }
    if(initialSteps == -1) { return }
    
    print("All of today steps: \(todaySteps), initialSteps: \(initialSteps), additionalSteps: \(additionalSteps)")
    steps = (todaySteps - initialSteps) + additionalSteps
  }
  
  private func updateProgresses() {
    guard let milestones = activeChallenge?.levelSlot?.challengeMilestones, !milestones.isEmpty else {
      progresses = []
      return
    }
    
    if(activeChallengeModel.localActiveChallengeValue != steps) {
      activeChallengeModel.setLocalActiveChallengeValue(steps: steps)
    }
    
    var cumulativeSteps = 0
    progresses = milestones.enumerated().compactMap { index, milestone in
      guard let targetSteps = milestone.healthTargets?.steps, targetSteps > cumulativeSteps else { return nil }
      
      let progress = Double(steps - cumulativeSteps) / Double(targetSteps - cumulativeSteps)
      cumulativeSteps = targetSteps
      
      if lastReachedMilestone == index && progress >= 1 {
        lastReachedMilestone += 1;
      }
      
      return min(max(progress, 0.0), 1.0)
    }
  }
  
  func submitChallengeEnd() async {
    guard !isUpdating else { return }
    isUpdating = true
    
    let value = await getChallengeResult()
    
    do {
      guard let updateResponse = try await ActiveChallengeModel.shared.updateActiveChallenge(steps: value) else {
        print("No response from challenge update.")
        isUpdating = false
        throw NSError(domain: "com.yulife", code: 421)
      }
      
      ActiveChallengeModel.shared.setActiveChallenge(
        activeChallenge: ActiveChallenge(levelSlot: activeChallenge?.levelSlot, challenge:updateResponse)
      )
      
      
      switch updateResponse.status {
      case "cancelled":
        killTimers()
        ActiveChallengeModel.shared.setActiveChallenge(activeChallenge: nil)
        StateModel.shared.setRoot(stack: .home)
      case "completed":
        handleChallengeCompleted(updateResponse: updateResponse)
      default:
        break
      }
    } catch {
      print("Update challenge error: \(error.localizedDescription)")
      isErrorOpen = hasChallengeEnded
    }
    isUpdating = false
  }
  
  private func handleChallengeCompleted(updateResponse: ChallengeProtocol) {
    killTimers()
    
    if let yuCoinAwarded = updateResponse.yuCoinAwarded, yuCoinAwarded > 0 {
      ActiveChallengeModel.shared.onChallengeCompleted()
    }
    
    DispatchQueue.main.async {
      ConnectivityModel.shared.refetchAppData(dataTypes: [.activeChallenge, .coinLedger, .todayActivity, .challengesDoneToday, .activeStreak])
      StateModel.shared.setRoot(stack: .challengeComplete)
    }
  }
  
  private func startCountdownTimer() {
    guard let endDate = activeChallenge?.challenge?.adjustedEndDate.flatMap(ISO8601DateFormatter().date) else { return }
    
    self.updateCountdownTimer(targetDate: endDate)
    uiCountdownTimer?.invalidate()
    uiCountdownTimer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { _ in
      self.updateCountdownTimer(targetDate: endDate)
    }
  }
  
  private func updateCountdownTimer(targetDate: Date) {
    let now = Date()
    let remainingTime = targetDate.timeIntervalSince(now)
    
    if remainingTime <= 0 {
      uiCountdownTimer?.invalidate()
      hasChallengeEnded = true
      countdownString = "00:00"
    } else {
      let hours = Int(remainingTime) / 3600
      let minutes = Int(remainingTime) / 60 % 60
      let seconds = Int(remainingTime) % 60
      
      countdownString = hours > 0 ?
      String(format: "%02d:%02d:%02d", hours, minutes, seconds) :
      String(format: "%02d:%02d", minutes, seconds)
    }
  }
  
  // MARK: - Timer Management
  func killTimers() {
    uiCountdownTimer?.invalidate()
    
    uiCountdownTimer = nil
  }
  
  func fakeAddSteps() {
#if targetEnvironment(simulator)
    steps += 69;
#endif
  }
  
  func onCancelClosed() {
    if hasChallengeEnded {
      isErrorOpen = true
    }
  }
  
  func onErrorClosed() {
    isCancelOpen = true
  }
  
  func requestHealthKitAuthorization() async throws {
    let healthStore = HKHealthStore();
    
    try await withCheckedThrowingContinuation { (continuation: CheckedContinuation<Void, Error>) in
      healthStore.requestAuthorization(toShare: [HKObjectType.workoutType()], read: [HKObjectType.workoutType()]) { success, error in
        if let error = error {
          continuation.resume(throwing: error)
        } else if !success {
          continuation.resume(throwing: NSError(domain: "yulife", code: 1, userInfo: [NSLocalizedDescriptionKey: "Authorization failed"]))
        } else {
          continuation.resume(returning: ())
        }
      }
    }
  }
  
  func startWorkoutSession() async {
    let healthStore = HKHealthStore()
    
    do {
      try await requestHealthKitAuthorization();
      
      let workoutConfiguration = HKWorkoutConfiguration()
      workoutConfiguration.activityType = .walking
      
      workoutSession = try HKWorkoutSession(healthStore: healthStore, configuration: workoutConfiguration)
      let workoutBuilder = workoutSession?.associatedWorkoutBuilder()
      workoutBuilder?.dataSource = HKLiveWorkoutDataSource(healthStore: healthStore, workoutConfiguration: workoutConfiguration)
      
      try await withCheckedThrowingContinuation { (continuation: CheckedContinuation<Void, Error>) in
        workoutSession?.startActivity(with: Date())
        workoutBuilder?.beginCollection(withStart: Date()) { success, error in
          if let error = error {
            continuation.resume(throwing: NSError(domain: "yulife", code: 2, userInfo: [NSLocalizedDescriptionKey: error.localizedDescription]))
          } else if !success {
            continuation.resume(throwing: NSError(domain: "yulife", code: 2, userInfo: [NSLocalizedDescriptionKey: "Failed to begin collection"]))
          } else {
            continuation.resume()
          }
        }
      }
    } catch {
      
    }
  }
  
  func getChallengeResult() async -> Int {
    let formatter = ISO8601DateFormatter()
    
    guard
      let challenge = activeChallenge?.challenge,
      let startDateString = challenge.startDateTime,
      let startDate = formatter.date(from: startDateString),
      let endDateString = challenge.endDateTime,
      let endDate = formatter.date(from: endDateString)
    else {
      return self.steps
    }
    
    let endValuePedometer = await PedometerModel.shared.getStepsFromDate(startDate: startDate, endDate: endDate)
    
    return max(endValuePedometer, self.steps)
  }
  
  func killWorkoutSession() {
    workoutSession?.stopActivity(with: .now)
  }
  
  func onDisappear() {
    killTimers()
    killWorkoutSession()
  }
}

