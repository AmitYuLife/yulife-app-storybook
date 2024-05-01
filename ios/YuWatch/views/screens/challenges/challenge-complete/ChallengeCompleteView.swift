
import Foundation
import SwiftUI

struct ChallengeCompleteView: View {
  @ObservedObject var viewModel = ChallengeCompleteViewModel()
  
  var body: some View {
    ZStack {
      ZStack {
        SpinningCoinView()
        VStack {
          Spacer()
          
          if(!viewModel.isSuccess) {
            VStack(spacing: 3 * ADJUST) {
              Text("screens.challenge_failed.title")
                .customFont(size: 13)
                .fontWeight(.bold)
                .foregroundColor(.homeText)
              Text("screens.challenge_failed.message")
                .customFont(size: 11)
                .foregroundColor(.homeText)
                .padding(.bottom, 20 * ADJUST)
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
                    .foregroundColor(.homeText)
                  Text("\(viewModel.yucoinAwarded)")
                    .customFont(size: 13)
                    .fontWeight(.bold)
                    .foregroundColor(.homeText)
                  Text("common.yucoin")
                    .customFont(size: 13)
                    .fontWeight(.bold)
                    .foregroundColor(.homeText)
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


