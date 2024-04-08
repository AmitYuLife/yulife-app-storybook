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
  @Published public var todaySteps = 1000;
  
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
  
  public func startUpdates() async throws {
    print("Really starting updates")
    AppConsoleModel.shared.showAlert(message: "Starting pedometer updates...")
//    DispatchQueue.main.async {
//      self.testTimer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { timer in
//        print("FOREVER")
//        self.todaySteps = self.todaySteps + 500;
//
//      }
//    }
    
//    return
    let calendar = Calendar.current
    let startOfDay = calendar.startOfDay(for: Date())
    let endOfDay = calendar.startOfDay(for: calendar.date(byAdding: .day, value: 1, to: startOfDay) ?? startOfDay)
    
    print("Time until next one is", endOfDay.timeIntervalSinceNow)
    
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
        }
        
        if(!hasResponded) {
          hasResponded = true
          continuation.resume(returning: ())
        }
      }
    }
  }
  
  func getDailySteps() async throws -> Int {
    return todaySteps
  }
}
