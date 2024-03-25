import Foundation
import SwiftUI

struct OfflineView: View {
  @ObservedObject var viewModel = OfflineViewModel()
  
  var body: some View {
    Text("You're offline!")
    LoadingButton(
      action: {
        Task { await viewModel.retry() }
      },
      isLoading: false,
      label: "Retry"
   
    )
  }
}
