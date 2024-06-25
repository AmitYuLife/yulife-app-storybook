import Foundation
import CoreMotion
import Combine

enum PedometerPermissionStatus {
  case authorized
  case denied
  case notDetermined
}

class PedometerModel: ObservableObject {
  static let shared = PedometerModel()
  let corePedometer = CMPedometer()
  private var cancellables: Set<AnyCancellable> = []
  private var hasStarted = false;
  private var midnightTimer: Timer? = nil;
  private var lastUpdateDate = Date()
  
  @Published public var todaySteps = 0;
  
  private var testTimer: Timer? = nil
  
  public func checkPermissions() -> PedometerPermissionStatus {
    let status = CMPedometer.authorizationStatus()
    
    AppConsoleModel.shared.showAlert(message: "Pedometer permissions: \(status)")
    
    switch status {
    case .authorized:
      return .authorized
    case .denied:
      return .denied
    case .notDetermined:
      return .notDetermined
    case .restricted:
      return .denied
    @unknown default:
      return .notDetermined
    }
  }
  
  public func checkSameDate() {
    if(ActiveChallengeModel.shared.activeChallenge?.challenge != nil) {
      return
    }
    
    let stepsFromToday = Calendar.current.isDateInToday(lastUpdateDate);
    DispatchQueue.main.async {
      if(!stepsFromToday) {
        self.lastUpdateDate = Date()
        
        self.midnightTimer?.invalidate()
        self.corePedometer.stopUpdates()
        
        Task { try await self.startUpdates(); }
      }
    }
  }
  
  public func startUpdates() async throws {
    AppConsoleModel.shared.showAlert(message: "Starting pedometer updates...")
    
    let calendar = Calendar.current
    let startOfDay = calendar.startOfDay(for: Date())
    let endOfDay = calendar.startOfDay(for: calendar.date(byAdding: .day, value: 1, to: startOfDay) ?? startOfDay)
    
    var hasResponded = false;
    if(hasStarted) {
      return ()
    }
    
    self.midnightTimer?.invalidate()
    DispatchQueue.main.async {
      self.midnightTimer = Timer.scheduledTimer(withTimeInterval: endOfDay.timeIntervalSinceNow, repeats: false) { _ in
        Task {
          do {
            let activeChallenge = ActiveChallengeModel.shared.activeChallenge;
            
            if(activeChallenge?.challenge?.createdBySource != .watch) {
              // If there's no watch challenge, restart the pedometer
              let _ = try await self.startUpdates()
            }
          }
        }
      }
    }
    
    try await withCheckedThrowingContinuation { (continuation: CheckedContinuation<Void, Error>) in
      corePedometer.startUpdates(from: startOfDay) { [weak self] data, error in
        if let error = error {
          if(!hasResponded) {
            hasResponded = true
            continuation.resume(throwing: error)
          }
          AppConsoleModel.shared.showAlert(message: "Failed to start pedometer")
          print("Pedometer error")
          return
        }
        
        guard let self = self, let pedometerData = data else {
          if(!hasResponded) {
            hasResponded = true
            continuation.resume(throwing: NSError(domain: "PedometerModel", code: 1, userInfo: [NSLocalizedDescriptionKey: "Failed to get pedometer data"]))
          }
          return
        }
        
        hasStarted = true;
        AppConsoleModel.shared.showAlert(message: "Started pedometer updates")
        
        DispatchQueue.main.async {
          self.todaySteps = pedometerData.numberOfSteps.intValue
          self.checkSameDate();
        }
        
        if(!hasResponded) {
          hasResponded = true
          continuation.resume(returning: ())
        }
      }
    }
  }
  
  public func getStepsFromDate(startDate: Date, endDate: Date) async -> Int {
    return await withCheckedContinuation { continuation in
      corePedometer.queryPedometerData(from: startDate, to: endDate) { (data, error) in
        if let error = error {
          print("Error fetching steps from date: \(error)")
          continuation.resume(returning: 0)
        } else if let steps = data?.numberOfSteps {
          continuation.resume(returning: steps.intValue)
        } else {
          continuation.resume(returning: 0)
        }
      }
    }
  }
  
  func getDailySteps() async throws -> Int {
    return todaySteps
  }
}
