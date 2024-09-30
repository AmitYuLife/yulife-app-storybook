import Foundation
import SwiftUI
import Security
import Mixpanel

class AnalyticsManager {
 static let shared = AnalyticsManager()
  
  func initialize(token: String, userId: String) {
    Mixpanel.initialize(token: token)
    Mixpanel.mainInstance().identify(distinctId: userId);
  }
  
  func log(event: String, properties: Properties) {
    AppConsoleModel.shared.showAlert(message: "Mixpanel: \(event)")
    Mixpanel.mainInstance().track(event: event, properties: properties)
  }
  
  func logScreen(name: String) {
    self.log(event: "screen_view", properties: ["name": name])
  }
  
  func reset() {
    Mixpanel.mainInstance().reset()
  }
}
