import Foundation
import WatchConnectivity

enum AppDataType: String {
  case coinLedger = "coinLedger"
  case todayActivity = "todayActivity"
  case passiveChallengesEarnRate = "passiveChallengesEarnRate"
  case activeStreak = "activeStreak"
  case activeChallenge = "activeChallenge"
  case dailyPension = "dailyPension"
  case hints = "hints"
  case socialGroups = "socialGroups"
}

let MESSAGE_TIMEOUT = 60.0

class ConnectivityModel: NSObject, WCSessionDelegate {
  static let shared = ConnectivityModel()
  private override init() {
    super.init()
  }
  
  private let session: WCSession? = WCSession.isSupported() ? WCSession.default : nil
  
  func isReachable() -> Bool {
    return self.session?.isReachable == true
  }
  
  func startSession() {
    session?.delegate = self
    session?.activate()
  }
  
  func sendMessage(message: [String: Any], replyHandler: (([String: Any]) -> Void)? = nil, errorHandler: ((Error) -> Void)? = nil) {
    if(!self.isReachable()) {
      print("Cannot send message! Session is not reachable")
      let notReachableError = NSError(domain: "com.yulife", code: 69, userInfo: [NSLocalizedDescriptionKey: "Session not reachable"])
      errorHandler?(notReachableError)
      return;
    }
    
    let timeoutError = NSError(domain: "com.yulife", code: 408, userInfo: [NSLocalizedDescriptionKey: "Request timed out"])
    var didSendMessage = false
    
    DispatchQueue.main.asyncAfter(deadline: .now() + MESSAGE_TIMEOUT) {
      if !didSendMessage {
        didSendMessage = true
        print("Message sending timed out")
        errorHandler?(timeoutError)
      }
    }
    
    print("Session is reachable... sending message")
    
    self.session?.sendMessage(message, replyHandler: { (reply) in
      if(!didSendMessage) {
        didSendMessage = true
        replyHandler?(reply)
      }
      
    }, errorHandler: { (error) in
      if(!didSendMessage) {
        didSendMessage = true
        errorHandler?(error)
      }
    })
    
  }
  
  func refetchAppData(dataTypes: [AppDataType]) {
    let dataTypesStrings = dataTypes.map { $0.rawValue }
    self.sendMessage(message: ["type": "RefetchAppData", "dataTypes": dataTypesStrings])
  }
  
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
    if(activationState == .activated) {
      print("Watch connection activated.")
    }
  }
  
  func session(_ session: WCSession, didReceiveMessage message: [String: Any], replyHandler: @escaping ([String: Any]) -> Void) {
    print("Got a message woop woop")
    
    
    Task {
      if let messageType = message["type"] as? String, messageType == "RefetchChallenges" {
        let _ = try await ActiveChallengeModel.shared.fetchActiveChallenge()
        print("Connectivity: Active challenges refetched")
      }
    }
    replyHandler(["response": ""])
  }
  func session(_ session: WCSession, didReceiveMessage message: [String: Any]) {
    print("Session sent without reply handler????")
    
    Task {
      if let messageType = message["type"] as? String, messageType == "RefetchChallenges" {
        let _ = try await ActiveChallengeModel.shared.fetchActiveChallenge()
        print("Connectivity: Active challenges refetched")
      }
    }
  }
}
