import Foundation
import Apollo

let YU_LOCALE = "en";
let APP_VERSION = "4.0.0"
let DEVICE_ID = "apple_watch"

class ApolloManager {
    static let shared = ApolloManager()
    var apolloClient: ApolloClient?
    private var apiUrl: String = ""
    private var clientToken: String = ""
    private var authToken: String = ""

    public func initialize(token: String, apiUrl: String, clientToken: String) {
        self.authToken = token
        self.apiUrl = apiUrl
        self.clientToken = clientToken
        
        setupApolloClient()
    }
    
    private func setupApolloClient() {
        guard let url = URL(string: self.apiUrl) else { return }
        
        let configuration = URLSessionConfiguration.default
        configuration.httpAdditionalHeaders = ["yu_client_token": self.clientToken, "yu_locale": YU_LOCALE]
        
        let store = ApolloStore(cache: InMemoryNormalizedCache())
        let client = URLSessionClient(sessionConfiguration: configuration, callbackQueue: nil)
        let provider = NetworkInterceptorProvider(client: client, shouldInvalidateClientOnDeinit: true, store: store, authToken: self.authToken)
        
        let requestChainTransport = RequestChainNetworkTransport(interceptorProvider: provider,
                                                                 endpointURL: url)
        
        self.apolloClient = ApolloClient(networkTransport: requestChainTransport, store: store)
    }

    private init() {
        setupApolloClient()
    }
}

class NetworkInterceptorProvider: DefaultInterceptorProvider {
    private var authToken: String
    
    init(client: URLSessionClient, shouldInvalidateClientOnDeinit: Bool, store: ApolloStore, authToken: String) {
        self.authToken = authToken
        super.init(client: client, shouldInvalidateClientOnDeinit: shouldInvalidateClientOnDeinit, store: store)
    }
    
    override func interceptors<Operation: GraphQLOperation>(for operation: Operation) -> [ApolloInterceptor] {
        var interceptors = super.interceptors(for: operation)
        interceptors.insert(CustomInterceptor(authToken: self.authToken), at: 0)
        return interceptors
    }
}

class CustomInterceptor: ApolloInterceptor {
    var id: String
    private var authToken: String
    
    init(authToken: String) {
        self.id = "CustomInterceptor"
        self.authToken = authToken
    }
    
    func interceptAsync<Operation: GraphQLOperation>(
        chain: RequestChain,
        request: HTTPRequest<Operation>,
        response: HTTPResponse<Operation>?,
        completion: @escaping (Swift.Result<GraphQLResult<Operation.Data>, Error>) -> Void) {
          
          let currentDate = Date()
          let dateFormatter = ISO8601DateFormatter()
          dateFormatter.formatOptions = [.withFullDate, .withTime, .withColonSeparatorInTime, .withTimeZone]
          let dateString = dateFormatter.string(from: currentDate)
            let requestId = UUID().uuidString
          
            print("Making API request............................");
            
            request.addHeader(name: "authorization", value: "Bearer \(self.authToken)")
            request.addHeader(name: "date", value: dateString)
            request.addHeader(name: "x-request-id", value: requestId)
            request.addHeader(name: "app_version", value: APP_VERSION)
            request.addHeader(name: "device_id", value: DEVICE_ID)
            request.addHeader(name: "apollo_client_name",value:  "watchos")
            
            chain.proceedAsync(request: request,
                               response: response, interceptor: self, completion: {
                result in
                switch result {
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
            })
    }
}
