import Foundation

class ChallengeCompleteViewModel: ObservableObject {
  @Published var yucoinAwarded = ActiveChallengeModel.shared.activeChallenge?.challenge?.yuCoinAwarded ?? 0;
  @Published var isSuccess = (ActiveChallengeModel.shared.activeChallenge?.challenge?.yuCoinAwarded ?? 0) > 0;
  @Published var totalMilestoneCount = ActiveChallengeModel.shared.activeChallenge?.levelSlot?.challengeMilestones.count ?? 0;
  @Published var milestoneCompletedCount = 0;
  
  func checkMilestones() -> Int {
    guard let milestones = ActiveChallengeModel.shared.activeChallenge?.levelSlot?.challengeMilestones else {
      return 0
    }
    
    let currentSteps = ActiveChallengeModel.shared.activeChallengeValue;
    var passedCount = 0;
    for milestone in milestones {
      if let targetSteps = milestone.healthTargets?.steps, currentSteps >= targetSteps {
        passedCount += 1
      }
    }
    
    return passedCount;
  }
  
  func goHome() {
    ActiveChallengeModel.shared.setActiveChallenge(activeChallenge: nil);
    StateModel.shared.setRoot(stack: RootStack.home)
  }
  
  init() {
    self.milestoneCompletedCount = checkMilestones();
  }
}
