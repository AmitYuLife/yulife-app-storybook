import Foundation
import SwiftUI
import Security

class VibrateManager {
 static let shared = VibrateManager()
  
  func vibrate(type: WKHapticType) {
    WKInterfaceDevice.current().play(type)
  }
}
