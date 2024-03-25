protocol LevelSlot {
  var levelSlotId: String { get }
  var challengeHeading: String {get }
  var duration: String { get}
  var yucoinReward: String { get }
  var challengeType: String {get}
  var challengeSubtype: String { get}
  var isLocked: Bool { get }
  var challengeMilestones: [MilestoneProtocol] { get }
}

extension Yulife.GetQuestMapLevelQuery.Data.GetQuestMapLevel.Slot: LevelSlot {
  var challengeHeading: String {
    return self.heading
  }
  
  var levelSlotId: String {
    return self.id
  }
  
  var yucoinReward: String {
    return self.reward ?? "0"
  }
  
  var challengeType: String {
    return self.type ?? ""
  }
  
  var challengeSubtype: String {
    return self.subtype ?? ""
  }
  
  var challengeMilestones: [MilestoneProtocol] {
    return self.details?.milestones!.compactMap { $0 } ?? []
  }
}


protocol MilestoneProtocol {
  var milestoneId: String? { get }
  var xp: Int? { get }
  var coins: Int? { get }
  var healthTargets: MilestoneTargetProtocol? { get }
}

protocol MilestoneTargetProtocol {
  var steps: Int? { get }
  var meditation: Int? { get }
  var distance: Int? { get }
  var duration: Int? { get }
  var calories: Int? { get }
}

struct HealthTarget: MilestoneTargetProtocol {
  var steps: Int?
  var meditation: Int?
  var distance: Int?
  var duration: Int?
  var calories: Int?
}

extension Yulife.GetQuestMapLevelQuery.Data.GetQuestMapLevel.Slot.Details.Milestone: MilestoneProtocol {
  var milestoneId: String? {
    return self.id
  }
  
  var xp: Int? {
    return 0
  }
  
  var coins: Int? {
    return self.rewardAmount
  }
  
  var healthTargets: MilestoneTargetProtocol? {
    let regex = try? NSRegularExpression(pattern: "\\d+", options: [])
    let results = regex?.matches(in: self.target, options: [], range: NSRange(self.target.startIndex..., in: self.target))
    
    if let match = results?.first, let range = Range(match.range, in: self.target) {
      let numberString = String(self.target[range])
      if let number = Int(numberString) {
        return HealthTarget(steps: number, meditation: nil, distance: nil, duration: nil, calories: nil)
      }
    }
    return nil
  }
}

extension Yulife.GetUserActiveChallengeQuery.Data.GetUserActiveChallenge.LevelSlot.Milestone: MilestoneProtocol {
  var milestoneId: String? {
    return self.id
  }
  
  var healthTargets: MilestoneTargetProtocol? {
    return self.target
  }
}

extension Yulife.GetUserActiveChallengeQuery.Data.GetUserActiveChallenge.LevelSlot: LevelSlot {
  var levelSlotId: String {
    return self.id ?? ""
  }
  
  var duration: String {
    return ""
  }
  
  var challengeHeading: String {
    return ""
  }
  
  var yucoinReward: String {
    return "0"
  }
  
  var challengeType: String {
    return ""
  }
  
  var challengeSubtype: String {
    return self.subtype ?? ""
  }
  
  var isLocked: Bool {
    return false
  }
  
  var challengeMilestones: [MilestoneProtocol] {
    return self.milestones!.compactMap { $0 }
  }
}

extension Yulife.GetUserActiveChallengeQuery.Data.GetUserActiveChallenge.LevelSlot.Milestone.Target: MilestoneTargetProtocol {
  
}

extension Yulife.CreateQuestMapLevelChallengeMutation.Data.CreateQuestMapLevelChallenge.LevelSlot.Milestone.Target: MilestoneTargetProtocol {
  
}

extension Yulife.CreateQuestMapLevelChallengeMutation.Data.CreateQuestMapLevelChallenge.LevelSlot.Milestone: MilestoneProtocol {
  var healthTargets: MilestoneTargetProtocol? {
    return self.target
  }
  
  var milestoneId: String? {
    return self.id
  }
  
}

extension Yulife.CreateQuestMapLevelChallengeMutation.Data.CreateQuestMapLevelChallenge.LevelSlot: LevelSlot {
  var duration: String {
    return ""
  }
  
  var levelSlotId: String {
    return self.id ?? ""
  }
  
  var challengeHeading: String {
    return ""
  }
  
  var yucoinReward: String {
    return "0"
  }
  
  var challengeType: String {
    return ""
  }
  
  var challengeSubtype: String {
    return self.subtype ?? ""
  }
  
  var isLocked: Bool {
    return false
  }
  
  var challengeMilestones: [MilestoneProtocol] {
    return self.milestones!.compactMap { $0 }
  }
}
