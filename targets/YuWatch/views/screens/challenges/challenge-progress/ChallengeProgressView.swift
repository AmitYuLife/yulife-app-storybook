import SwiftUI

struct ChallengeProgressView: View {
  @ObservedObject var viewModel = ChallengeProgressViewModel()
  
  var body: some View {
    ZStack {
      Image("HomeBackground")
        .resizable()
        .scaledToFill()
        .ignoresSafeArea(.all)
      VStack {
        HStack {
          Button(action: { viewModel.isCancelOpen = true }) {
            HStack {
              Image(systemName: "xmark")
                .resizable()
                .frame(width: 10 * ADJUST, height: 10 * ADJUST)
                .foregroundColor(.white)
                .opacity(0.8)
            }
            .padding()
          }
          .buttonStyle(PlainButtonStyle())
          .frame(width: 45 * ADJUST, height: 45 * ADJUST)
          .contentShape(Rectangle())
          Spacer()
        }
        Spacer()
      }
      .zIndex(1)
      
      ZStack {
        ChallengeProgressBar(progresses: viewModel.progresses)
        
        VStack(spacing: 0) {
          if (viewModel.isSubmittingOpen) {
            ProgressView()
              .progressViewStyle(CircularProgressViewStyle())
          } else {
            VStack(spacing: 0) {
              Text(viewModel.countdownString)
                .foregroundColor(Color("HomeText"))
                .customFont(size: 32)
                .fontWeight(.bold)
                .onTapGesture {
                  self.viewModel.fakeAddSteps()
                }
                .monospacedDigit()
              HStack(spacing: 2) {
                CounterView(number: viewModel.steps)
                  .customFont(size: 13)
                Text("common.steps")
                  .customFont(size: 13)
              }
              .offset(y: -5)
              .foregroundColor(Color("HomeText"))
            }
          }
        }
      }.padding(20)
    }
      .sheet(isPresented: $viewModel.isCancelOpen) {
        ChallengeProgressCancelView(isPresented: $viewModel.isCancelOpen).onDisappear(perform: viewModel.onCancelClosed)
      }
      .sheet(isPresented: $viewModel.isErrorOpen) {
        ChallengeProgressErrorView(
          onRetry: {
            Task { await viewModel.submitChallengeEnd() }
          },
          isLoading: viewModel.isUpdating,
          isPresented: $viewModel.isErrorOpen
        ).onDisappear(perform: viewModel.onErrorClosed)
      }
  }
}
