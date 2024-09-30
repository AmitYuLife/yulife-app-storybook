import Foundation

typealias User = Yulife.GetCurrentUserQuery.Data.GetCurrentUser

class UserModel: ObservableObject {
  static let shared = UserModel()
  private var user: User? = nil;

  func getUser() async throws -> User?  {
    if(self.user == nil){
      return try await fetchUser();
    }
    
    return self.user;
  }
  
  func fetchUser() async throws -> User?  {
    do {
      let user = try await withCheckedThrowingContinuation { continuation in
        ApolloManager.shared.apolloClient.fetch(
          query: Yulife.GetCurrentUserQuery(),
          cachePolicy: .fetchIgnoringCacheData
        ) { result in
          switch result {
          case .success(let graphQLResult):
            continuation.resume(returning: graphQLResult.data?.getCurrentUser)
          case .failure(let error):
            continuation.resume(throwing: error)
          }
        }
      }
      
      self.user = user;
      
      return user
      
    } catch {
      print("Error fetching user")
      return nil
    }
  }
}
