import Combine
import Foundation

class AuthenticationModel {
  static let shared = AuthenticationModel();
  
  func initAuthentication() -> Bool {
    let token = KeychainManager.shared.retrieveToken()
    let apiUrl = UserDefaults.standard.string(forKey: "apiUrl")
    let clientToken = UserDefaults.standard.string(forKey: "clientToken")
    
    let hasValues = token != nil && apiUrl != nil && clientToken != nil;
    if(hasValues) {
      ApolloManager.shared.initialize(token: token!, apiUrl: apiUrl!, clientToken: clientToken!)
    }
    
    return hasValues;
  }
  
  func loginUser(token: String, apiUrl: String, clientToken: String) {
    UserDefaults.standard.setValue(apiUrl, forKey: "apiUrl")
    UserDefaults.standard.setValue(clientToken, forKey: "clientToken")
    let _ = KeychainManager.shared.saveToken(token: token)
    
    // Update Apollo URLs
    ApolloManager.shared.initialize(token: token, apiUrl: apiUrl, clientToken: clientToken)
  }
  
  func logoutUser() {
    if KeychainManager.shared.deleteToken() {
      StateModel.shared.setRoot(stack: RootStack.onboarding)
    }
  }
}
