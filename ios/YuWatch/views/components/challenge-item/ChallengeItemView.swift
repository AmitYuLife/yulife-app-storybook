import Foundation
import SwiftUI

struct ChallengeItemView: View {
  var slot: LevelSlot?
  var isLoading: Bool;
  
  var body: some View {
    HStack {
      if !isLoading {
        Image(ChallengeModel.shared.imageForSlotSubtype(slot!.challengeSubtype))
          .resizable()
          .aspectRatio(contentMode: .fit)
          .frame(width: 38 * ADJUST, height: 38 * ADJUST)
          .cornerRadius(50)
      } else {
        Skeleton(width: 38 * ADJUST, height: 38 * ADJUST).cornerRadius(50)
      }
      
      VStack(alignment: .leading, spacing: 2) {
        if(!isLoading) {
          Text(slot!.challengeHeading)
            .customFont(size: 16)
            .fontWeight(.bold)
            .foregroundColor(Color("HomeText"))
            .frame(height: 16 * ADJUST)
          Text("\(slot!.duration)")
            .customFont(size: 14)
            .foregroundColor(Color("HomeText"))
            .frame(height: 14 * ADJUST)
        } else {
          Skeleton(width: 100 * ADJUST, height: 16 * ADJUST)
          Skeleton(width: 50 * ADJUST, height: 14 * ADJUST)
        }
      }
      .padding(.leading, 10 * ADJUST)
      
      Spacer()
      
    }
  }
}
