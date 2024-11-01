import Foundation
import Apollo
import WatchKit

let APOLLO_CLIENT_NAME = "watchos"
let DEFAULT_APP_VERSION = "4.15.0"

class ApolloManager {
  static let shared = ApolloManager()
  var apolloClient: ApolloClient?

  private var apiUrl: String = ""
  private var clientToken: String = ""
  private var locale: String = ""
  private var authToken: String = ""
  private var requestIdPrefix: String = ""
  private var deviceUuid: String = WKInterfaceDevice.current().identifierForVendor?.uuidString ?? ""
  private var appVersion: String = ""
  
  public func initialize(token: String, apiUrl: String, clientToken: String, userId: String, locale: String) {
    self.authToken = token
    self.apiUrl = apiUrl
    self.clientToken = clientToken
    self.locale = locale;
    self.requestIdPrefix = "watchos_\(deviceUuid)_\(userId)"
    
    var version = Bundle.main.infoDictionary?["CFBundleShortVersionString"] as! String;
    if(version == "1.0") {
      version = DEFAULT_APP_VERSION; // Local builds
    }
    
    self.appVersion = version;
    setupApolloClient()
  }
  
  private func setupApolloClient() {
    guard let url = URL(string: self.apiUrl) else { return }
    
    let configuration = URLSessionConfiguration.default
    configuration.httpAdditionalHeaders = [
      "yu_client_token": self.clientToken,
      "yu_locale": self.locale,
      "device_id": self.deviceUuid,
      "app_version": self.appVersion,
      "apollo_client_name": APOLLO_CLIENT_NAME,
    ]

    let store = ApolloStore(cache: InMemoryNormalizedCache())
    let client = URLSessionClient(sessionConfiguration: configuration, callbackQueue: nil)
    let provider = NetworkInterceptorProvider(client: client, shouldInvalidateClientOnDeinit: true, store: store, authToken: self.authToken, requestIdPrefix: self.requestIdPrefix)
    
    let requestChainTransport = RequestChainNetworkTransport(interceptorProvider: provider, endpointURL: url)
    self.apolloClient = ApolloClient(networkTransport: requestChainTransport, store: store)
  }
  
  private init() {
    setupApolloClient()
  }
}

class NetworkInterceptorProvider: DefaultInterceptorProvider {
  private var authToken: String
  private var requestIdPrefix: String
  
  init(client: URLSessionClient, shouldInvalidateClientOnDeinit: Bool, store: ApolloStore, authToken: String, requestIdPrefix: String) {
    self.authToken = authToken
    self.requestIdPrefix = requestIdPrefix;
    
    super.init(client: client, shouldInvalidateClientOnDeinit: shouldInvalidateClientOnDeinit, store: store)
  }
  
  override func interceptors<Operation: GraphQLOperation>(for operation: Operation) -> [ApolloInterceptor] {
    var interceptors = super.interceptors(for: operation)
    interceptors.insert(RequestInterceptor(authToken: self.authToken, requestIdPrefix: self.requestIdPrefix), at: 0)

    return interceptors
  }
}

class RequestInterceptor: ApolloInterceptor {
  var id: String
  private var requestCount: Int = 0;
  private var authToken: String
  private var requestIdPrefix: String
  
  init(authToken: String, requestIdPrefix: String) {
    self.id = "RequestInterceptor"
    self.authToken = authToken
    self.requestIdPrefix = requestIdPrefix;
  }
  
  func interceptAsync<Operation: GraphQLOperation>(
    chain: RequestChain,
    request: HTTPRequest<Operation>,
    response: HTTPResponse<Operation>?,
    completion: @escaping (Swift.Result<GraphQLResult<Operation.Data>, Error>) -> Void) {
      self.requestCount += 1;
      
//      let currentDate = Date()
//      This caused crash in production build & needs investigation
//      let dateFormatter = ISO8601DateFormatter()
//      dateFormatter.formatOptions = [.withFullDate, .withTime, .withColonSeparatorInTime, .withTimeZone]
//      let dateString = dateFormatter.string(from: currentDate)
      
//      let milisecondsEpoch = Int(Date().timeIntervalSince1970) * 1000;
//      let requestId = "\(self.requestIdPrefix)_\(milisecondsEpoch)_\(self.requestCount)"

      request.addHeader(name: "authorization", value: "Bearer \(self.authToken)")
      request.addHeader(name: "date", value: Date.now.dateFormatWithTz)

//      request.addHeader(name: "x-request-id", value: requestId)
    
      chain.proceedAsync(
        request: request,
        response: response,
        interceptor: self,
        completion: {
          result in switch result {
          case .success(let graphQLResult):
            if(graphQLResult.errors != nil) {
              print(graphQLResult.errors?.first?.message ?? "")
              if(graphQLResult.errors?.first?.message == "Unauthenticated") {
                print("Token expired");
                AuthenticationModel.shared.logoutUser()
                StateModel.shared.setRoot(stack: .loading)
              }
            }
            
            completion(.success(graphQLResult))
          case .failure(let error):
            print("API request failed");
            completion(.failure(error))
          }
        }
      )
    }
}
