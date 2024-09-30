import Combine
import Foundation

class AuthenticationModel {
  static let shared = AuthenticationModel();
  
  func initAuthentication() -> Bool {
    let token = KeychainManager.shared.retrieveToken()
    let apiUrl = UserDefaults.standard.string(forKey: "apiUrl")
    let clientToken = UserDefaults.standard.string(forKey: "clientToken")
    let mixpanelToken = UserDefaults.standard.string(forKey: "mixpanelToken")
    let userId = UserDefaults.standard.string(forKey: "userId")
    let locale = UserDefaults.standard.string(forKey: "locale")
    
    let hasValues =
      token != nil &&
      apiUrl != nil &&
      clientToken != nil &&
      mixpanelToken != nil &&
      userId != nil &&
      locale != nil
    
    if(hasValues) {
      setupServices(
        token: token!,
        apiUrl: apiUrl!,
        clientToken: clientToken!,
        mixpanelToken: mixpanelToken!,
        userId: userId!,
        locale: locale!
      )
    }
    
    return hasValues;
  }
  
  func loginUser(token: String, apiUrl: String, clientToken: String, mixpanelToken: String, userId: String, locale: String) {
    AppConsoleModel.shared.showAlert(message: "Logged in.")
    UserDefaults.standard.setValue(apiUrl, forKey: "apiUrl")
    UserDefaults.standard.setValue(clientToken, forKey: "clientToken")
    UserDefaults.standard.setValue(userId, forKey: "userId")
    UserDefaults.standard.setValue(mixpanelToken, forKey: "mixpanelToken")
    UserDefaults.standard.setValue(locale, forKey: "locale")
    
    let _ = KeychainManager.shared.saveToken(token: token)
    
    setupServices(
      token: token,
      apiUrl: apiUrl,
      clientToken: clientToken,
      mixpanelToken: mixpanelToken,
      userId: userId,
      locale: locale
    )
  }
  
  func logoutUser() {
    AnalyticsManager.shared.reset()
    if KeychainManager.shared.deleteToken() {
      StateModel.shared.setRoot(stack: RootStack.onboarding)
    }
  }
  
  func setupServices(token: String, apiUrl: String, clientToken: String, mixpanelToken: String, userId: String, locale: String) {
    ApolloManager.shared.initialize(token: token, apiUrl: apiUrl, clientToken: clientToken, userId: userId, locale: locale)
    AnalyticsManager.shared.initialize(token: mixpanelToken, userId: userId)
  }
}
