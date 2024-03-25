
import Foundation
import SwiftUI

struct ChallengeDetailView: View {
    @State private var isLoading = false
    @State private var navigateToInProgress = false
    let challenge: LevelSlot
    
  var body: some View {
       ScrollView {
           VStack(alignment: .leading, spacing: 8) {
               // Challenge Heading
             Text(challenge.challengeHeading)
                   .font(.headline)
                   .fontWeight(.bold)
                   .lineLimit(2)
                   .padding(.bottom, 2)

               // Reward Information
               HStack {
                   Image(systemName: "star.fill")
                       .foregroundColor(.yellow)
                   Text("\(challenge.yucoinReward) coins")
                       .font(.footnote)
               }
               .padding(.vertical, 4)


               Text("ID: \(challenge.levelSlotId)")
                   .font(.caption)
                   .foregroundColor(.gray)

               // Start Challenge Button
               Button(action: {
                   startChallenge(levelSlotId: challenge.levelSlotId)
               }) {
                   HStack {
                       Image(systemName: "play.fill")
                       Text("Take challenge")
                   }
                
               }
               .disabled(isLoading)
               .padding(.top, 10)

               // Loading Indicator
               if isLoading {
                   ProgressView()
                       .padding()
               }
           }
           .padding()
           .navigationBarTitleDisplayMode(.inline)

       }
       .navigationDestination(isPresented: $navigateToInProgress){
         InProgressChallengeView()
       }
   }
    
    
  func startChallenge(levelSlotId: String) {
        isLoading = true
 
    ApolloManager.shared.apolloClient.perform(mutation: Yulife.CreateQuestMapLevelChallengeMutation(levelSlotId: levelSlotId, contentId: nil)) { result in
            DispatchQueue.main.async {
                self.isLoading = false
                switch result {
                case .success(let graphQLResult):
                    if let challengeData = graphQLResult.data?.createQuestMapLevelChallenge {
                        // Handle the successful challenge creation here
                        // You might want to update your UI or state with the new challenge data
                        print("Challenge created successfully: \(challengeData)")
                      
                      ConnectivityModel.shared.sendMessage(message: ["type": "ChallengeStart"])
                      self.navigateToInProgress = true
                      // Okay let's send a message to the PHONE!
                      
                      
                      
                      
                    } else if let errors = graphQLResult.errors {
                        // Handle the case where there are GraphQL errors
                        print("GraphQL Errors: \(errors)")
                    }
                case .failure(let error):
                    // Handle network or other errors
                    print("An error occurred: \(error)")
                }
            }
        }
    }
}
