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
                .foregroundColor(.white)
                .opacity(0.8)
            }
            .padding()
          }
          .buttonStyle(PlainButtonStyle())
          Spacer()
        }
        Spacer()
      }
      .zIndex(1)
      
      ZStack {
        ChallengeProgressBar(progresses: viewModel.progresses)
        
        VStack(spacing: 0) {
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
      }.padding(20)
    }
      .onAppear(perform: viewModel.onAppear)
      .onDisappear(perform: viewModel.onDisappear)
      .sheet(isPresented: $viewModel.isCancelOpen) {
        ChallengeProgressCancelView(isPresented: $viewModel.isCancelOpen).onDisappear(perform: viewModel.onCancelClosed)
      }
      .sheet(isPresented: $viewModel.isErrorOpen) {
        ChallengeProgressErrorView(
          onRetry: {
            Task { await viewModel.updateSteps() }
          },
          isLoading: viewModel.isUpdating,
          isPresented: $viewModel.isErrorOpen
        ).onDisappear(perform: viewModel.onErrorClosed)
      }
  }
}
