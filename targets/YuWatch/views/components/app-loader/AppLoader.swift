import WatchKit
import Foundation
import SwiftUI
//import SDWebImageLottieCoder

struct AppLoader: View {
  @ObservedObject var viewModel: LottieViewModel = .init()
     
     var body: some View {
         Image(uiImage: viewModel.image)
             .resizable()
             .scaledToFit()
             .onAppear {
//                        self.viewModel.loadAnimation(url: URL(string: "https://assets8.lottiefiles.com/packages/lf20_Zz37yH.json")!)
                    }
     }
}
