import Foundation

class ChallengePreviewViewModel: ObservableObject {
  @Published var isLoading = false;
  @Published var hasError = false;
  private var levelSlot: LevelSlot? = nil;
  
  func setLevelSlot(levelSlot: LevelSlot) {
    self.levelSlot = levelSlot;
  }
  
  func startChallenge(levelSlotId: String) {
    isLoading = true
    
    // TODO: this should be in a model
    
    ApolloManager.shared.apolloClient?.perform(mutation: Yulife.CreateQuestMapLevelChallengeMutation(levelSlotId: levelSlotId, contentId: nil, createdBySource: .some(.case(Yulife.ActiveChallengeSourceType.watch)))) { result in
      DispatchQueue.main.async {
        self.isLoading = false
        switch result {
        case .success(let graphQLResult):
          if let challengeData = graphQLResult.data?.createQuestMapLevelChallenge {
            print("Challenge created successfully: \(challengeData)")
            
            DispatchQueue.main.async {
              ConnectivityModel.shared.refetchAppData(dataTypes: [AppDataType.activeChallenge])
            }
            
            let activeChallenge = ActiveChallenge(levelSlot: challengeData.levelSlot, challenge: challengeData.challenge)
            ActiveChallengeModel.shared.setActiveChallenge(activeChallenge: activeChallenge)
            StateModel.shared.setRoot(stack: RootStack.challengeProgress)
            
          } else if let errors = graphQLResult.errors {
            print("GraphQL Errors: \(errors)")
            self.hasError = true
            Task {
              do {
                // Refetch the active challenge, probably a phone challenge was started
                print("Fetching the active challenge!")
                let _ = try await ActiveChallengeModel.shared.fetchActiveChallenge()
              }
            }
          }
        case .failure(let error):
          print("An error occurred: \(error)")
          self.hasError = true
        }
      }
    }
  }
}
