import Combine
import Foundation
import SwiftUI

var APP_DEBUG = true

class AppConsoleModel: ObservableObject {
  static let shared = AppConsoleModel();
  
  @Published var messages: [String] = []
  
  func showAlert(message: String) {
    if(!APP_DEBUG) { return; }
    DispatchQueue.main.async {
      self.messages.append(message)
    }
  }
  
  func showJsonAlert(prefix: String, data: [String: Any]) {
    if(!APP_DEBUG) { return; }
    
    do {
      let jsonData = try JSONSerialization.data(withJSONObject: data, options: [])
      
      if let jsonString = String(data: jsonData, encoding: .utf8) {
        AppConsoleModel.shared.showAlert(message: "\(prefix): \(jsonString)")
      }
    } catch let error {
      print("Malformed message received:: \(error)")
    }
  }
}
