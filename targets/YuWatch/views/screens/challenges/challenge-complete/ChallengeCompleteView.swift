
import Foundation
import SwiftUI

struct ChallengeCompleteView: View {
  @ObservedObject var viewModel = ChallengeCompleteViewModel()
  
  var body: some View {
    ZStack {
      ZStack {
        if (viewModel.isSuccess){ SpinningCoinView() }
        else {
          Image("HomeBackground")
            .resizable()
            .scaledToFill()
            .edgesIgnoringSafeArea(.all)
        }
        VStack {
          Spacer()
          if(!viewModel.isSuccess) {
            VStack(spacing: 3 * ADJUST) {
              Image("yucoin-detailed")
                .resizable()
                .scaledToFill()
                .frame(width: SCREEN_WIDTH * 0.32, height: SCREEN_WIDTH * 0.32)
                .aspectRatio(contentMode: .fill)
                .padding(.bottom, 20 * ADJUST)
                .saturation(0)
              Text(
                String(
                  format: NSLocalizedString("screens.challenge_failed.explanation", comment: "Challenge failed explanation"), viewModel.stepsSinceFirstMilestone, viewModel.firstMilestoneReward
                )
              )
              .multilineTextAlignment(.center)
              .customFont(size: 13)
              .foregroundColor(Color("HomeText"))
              .padding(.bottom, 10 * ADJUST)
            }.padding(.horizontal, 5 * ADJUST)
          } else {
            VStack(spacing: 3 * ADJUST) {
              HStack {
                ForEach(0..<(viewModel.milestoneCompletedCount) , id: \.self) { _ in
                  Image(systemName: "star.fill")
                    .foregroundColor(.yellow)
                }
                ForEach(0..<(viewModel.totalMilestoneCount - viewModel.milestoneCompletedCount), id: \.self) { _ in
                  Image(systemName: "star")
                    .foregroundColor(.yellow)
                }
              }
              .padding(.bottom, 5 * ADJUST)
              VStack(spacing: 3 * ADJUST) {
                HStack(spacing: 2) {
                  Text("screens.challenge_success.youGot")
                    .customFont(size: 13)
                    .foregroundColor(Color("HomeText"))
                  Text("\(viewModel.yucoinAwarded)")
                    .customFont(size: 13)
                    .fontWeight(.bold)
                    .foregroundColor(Color("HomeText"))
                  Text("common.yucoin")
                    .customFont(size: 13)
                    .fontWeight(.bold)
                    .foregroundColor(Color("HomeText"))
                }
              }.padding(.bottom, 15 * ADJUST)
            }
          }
          LoadingButton(
            action: {
              viewModel.goHome()
            },
            isLoading: false,
            label: "Continue"
          )
        }.padding(10)
      }.edgesIgnoringSafeArea(.all)
    }
  }
}


