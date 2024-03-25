import Foundation
import SwiftUI

//import Lottie

struct LoadingView: View {
  @ObservedObject var viewModel = LoadingViewModel()
  
  var body: some View {
    ZStack {
      Image("HomeBackground")
        .resizable()
        .scaledToFill()
        .edgesIgnoringSafeArea(.all)
//      AppLoader() 
//      LottieView(animation: .named("YuLoader"))
      ProgressView()
        .onAppear {
          Task { await viewModel.onAppear() }
        }
    }
  }
}
