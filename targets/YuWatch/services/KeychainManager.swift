import Foundation
import Security

class KeychainManager {
  static let shared = KeychainManager()
  private var _token: String?
  
  let account = "UserAuthToken19"
  let service = Bundle.main.bundleIdentifier ?? "DefaultService"
  
  var token: String? {
    if _token == nil {
      _token = retrieveToken()
    }
    return _token
  }
  
  func saveToken(token: String) -> Bool {
    let tokenData = Data(token.utf8)
    let query = [kSecClass as String: kSecClassGenericPassword,
                 kSecAttrAccount as String: account,
                 kSecAttrService as String: service,
                 kSecValueData as String: tokenData] as [String: Any]
    
    SecItemDelete(query as CFDictionary) 
    let status = SecItemAdd(query as CFDictionary, nil)
    _token = token;
    return status == errSecSuccess
  }
  
  func retrieveToken() -> String? {
    let query = [kSecClass as String: kSecClassGenericPassword,
                 kSecAttrAccount as String: account,
                 kSecAttrService as String: service,
                 kSecReturnData as String: kCFBooleanTrue!,
                 kSecMatchLimit as String: kSecMatchLimitOne] as [String: Any]
    
    var dataTypeRef: AnyObject?
    let status = SecItemCopyMatching(query as CFDictionary, &dataTypeRef)
    
    if status == errSecSuccess {
      if let retrievedData = dataTypeRef as? Data,
         let token = String(data: retrievedData, encoding: .utf8) {
        return token
      }
    }
    
    return nil
  }
  
  func deleteToken() -> Bool {
    let query = [kSecClass as String: kSecClassGenericPassword,
                 kSecAttrAccount as String: account,
                 kSecAttrService as String: service] as [String: Any]
    
    _token = nil
    
    let status = SecItemDelete(query as CFDictionary)
    return status == errSecSuccess
  }
}
