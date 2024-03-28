import Foundation
import SwiftUI

struct ChallengeMilestoneView: View {
  var stars: Int
  var onlyMilestone: Bool = false
  var yuCoinReward: Int
  var stepsRequired: Int
  
  var body: some View {
    HStack(alignment: .top) {
      VStack(alignment: .leading, spacing: 2) {
        HStack(spacing: 1) {
          ForEach(0..<3, id: \.self) { index in
            Image(systemName: "star.fill")
              .foregroundColor(index < stars || onlyMilestone ? .yellow : Color("DisabledStar"))
              .customFont(size: 17)
          }
        }
        HStack(spacing: 3) {
          Text("\(stepsRequired)")
            .customFont(size: 13)
            .foregroundColor(Color("MutedText"))
          Text("common.steps")
            .customFont(size: 13)
            .foregroundColor(Color("MutedText"))
        }
      }
      Spacer()
      HStack(spacing: 4 * ADJUST) {
        Text("\(yuCoinReward)")
          .customFont(size: 15)
          .foregroundColor(Color("HomeText"))
          .lineLimit(1)
        Image("yucoin-single")
          .resizable()
          .scaledToFill()
          .frame(width: 16 * ADJUST, height: 16 * ADJUST)
          .aspectRatio(contentMode: .fill)
      }
      
    }
  }
}
