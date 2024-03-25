
import Foundation
import SwiftUI

struct ChallengePreview: View {
  @ObservedObject var viewModel = ChallengePreviewViewModel()
  @State private var isLoading = false
  
  let milestones: [MilestoneProtocol];
  let levelSlot: LevelSlot;
  
  init(levelSlot: LevelSlot) {
    self.levelSlot = levelSlot;
    self.milestones = levelSlot.challengeMilestones;
    self.viewModel.setLevelSlot(levelSlot: levelSlot);
  }
  
  var body: some View {
    NavigationView {
      ZStack {
        ScrollView {
          VStack(alignment: .leading, spacing: 8) {
            ChallengeItemView(slot: levelSlot, isLoading: false)
            
            VStack(spacing: 10 * ADJUST) {
              ForEach(milestones.indices, id: \.self) { index in
                let isOnlyMilestone = self.milestones.count == 1
                ChallengeMilestoneView(
                  stars: index + 1,
                  onlyMilestone: isOnlyMilestone,
                  yuCoinReward: self.milestones[index].coins ?? 0,
                  stepsRequired: self.milestones[index].healthTargets?.steps ?? 0
                )
              }
              
            }.padding(.top, 7 * ADJUST)
            
            if isLoading {
              ProgressView()
                .padding()
            }
          }
          .padding(AdjustedEdgeInsets(top: 25 * ADJUST, leading: 0, bottom: 75 * ADJUST, trailing: 0))
          .navigationBarTitleDisplayMode(.inline)
          // Leave space for the button
        }
        .scrollIndicators(.hidden)
        .padding(AdjustedEdgeInsets(top: 0, leading: 15, bottom: 0, trailing: 15))
        VStack {
          Spacer()
          VStack {
            HStack {
              LoadingButton(
                action: {
                  self.viewModel.startChallenge(levelSlotId: levelSlot.levelSlotId)
                },
                isLoading: self.viewModel.isLoading,
                label: viewModel.hasError ? "Oops!" : "Take challenge",
                icon: Image(systemName: "play.fill")
              )
            }
            .padding(EdgeInsets(top: 0, leading: 10 * ADJUST, bottom: 0, trailing: 10 * ADJUST))
          }.frame( maxWidth: .infinity, alignment: .bottom)
            .padding(.top, 15 * ADJUST)
            .background(
            LinearGradient(gradient: Gradient(colors: [Color.clear, Color.black]), startPoint: .top, endPoint: .bottom)
          )
        }
      }
    }
  }
  
  
}
