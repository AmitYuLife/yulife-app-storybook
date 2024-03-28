import Foundation
import SwiftUI

struct OfflineView: View {
  @ObservedObject var viewModel = OfflineViewModel()
  
  var body: some View {
    Text("screens.offline.label")
    LoadingButton(
      action: {
        Task { await viewModel.retry() }
      },
      isLoading: false,
      label: "common.retry"
   
    )
  }
}
