
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
          HStack {
            ForEach(0..<(viewModel.milestoneCompletedCount) , id: \.self) { _ in
              Image(systemName: "star.fill")
                .foregroundColor(.yellow)
            }
            ForEach(0..<(viewModel.totalMilestoneCount - viewModel.milestoneCompletedCount), id: \.self) { _ in
              Image(systemName: "star")
                .foregroundColor(Color(""))
            }
          }
          HStack{ Text("\(viewModel.isSuccess ? "Completed!":"Failed :(")").customFont(size: 14).multilineTextAlignment(.center)
              .foregroundColor(Color("HomeText"))
          }
     
          
          HStack(spacing: 3){
            Text("\(viewModel.yucoinAwarded)")
              .foregroundColor(Color("HomeText"))
              .customFont(size: 12)
          
            Text("common.yucoin")
              .foregroundColor(Color("HomeText"))
              .customFont(size: 12)
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


