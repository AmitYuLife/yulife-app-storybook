import Foundation
import SwiftUI

struct ChallengeSelectView: View {
  @ObservedObject var viewModel = ChallengeSelectViewModel()
  
  var body: some View {
    NavigationView {
      VStack {
        ScrollView {
          // Force blurry nav header
          Rectangle()
            .fill(Color.clear)
            .frame(height: 20 * ADJUST)
          VStack(alignment: .leading, spacing: 8 * ADJUST) {
            VStack {
              if viewModel.isLoading {
                ForEach(0..<3, id: \.self) { _ in
                  ChallengeItemView(isLoading: true)
                    .padding(AdjustedEdgeInsets(top: 15, leading: 10, bottom: 15, trailing: 10))
                    .background(Color.white.opacity(0.12))
                    .cornerRadius(14)
                    .padding(AdjustedEdgeInsets(top: 0, leading: 5, bottom: 3, trailing: 5))
                }
              } else if viewModel.hasError == nil {
                ForEach(viewModel.slots, id: \.self.levelSlotId) { slot in
                  NavigationLink(destination: ChallengePreview(levelSlot: slot)) {
                    ChallengeItemView(slot: slot, isLoading: false)
                      .padding(AdjustedEdgeInsets(top: 15, leading: 10, bottom: 15, trailing: 10))
                      .background(Color.white.opacity(0.12))
                      .cornerRadius(14)
                  }
                  .buttonStyle(PlainButtonStyle())
                  .padding(AdjustedEdgeInsets(top: 0, leading: 5, bottom: 3, trailing: 5))
                }
              } else {
                VStack {
                  AlertView(
                    text: "screens.challenge_list.error",
                    buttonText: "common.retry",
                    buttonAction: viewModel.retry,
                    isLoading: viewModel.isLoading,
                    isNavigatedScreen: true
                  )
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .padding(.bottom, 20 * SPACING)
              }
              
            }
          }
          .frame(minHeight: SCREEN_HEIGHT)
          .navigationBarTitleDisplayMode(.inline)
        }
        .scrollIndicators(.hidden)
      }
    } .navigationTitle("screens.challenge_list.title")
  }
  
  
}
