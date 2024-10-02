import SwiftUI
import Foundation

enum OfflineNavigationDestination {
  case settings
}

struct OfflineView: View {
  @ObservedObject var viewModel = OfflineViewModel()
  
  let coinSize = SCREEN_WIDTH * 0.4;
  
  var body: some View {
    ZStack {
      Image("HomeBackground")
        .resizable()
        .scaledToFill()
        .edgesIgnoringSafeArea(.all)
      NavigationStack(path: $viewModel.navigationPath) {
        CompatabilityBackground {
          VStack {
            VStack {
              Image("yucoin-detailed")
                .resizable()
                .scaledToFill()
                .frame(width: coinSize, height: coinSize)
                .aspectRatio(contentMode: .fill)
                .padding(.bottom, 10 * ADJUST)
                .saturation(0)
              VStack(spacing: 1) {
                HStack(spacing: 4) {
                  Text("screens.offline.label")
                    .customFont(size: 18)
                    .foregroundColor(Color("HomeText"))
                }
                HStack {
                  Text("screens.offline.text")
                    .foregroundColor(Color("HomeText"))
                    .customFont(size: 16)
                }
              }
              .padding(.bottom, 10 * ADJUST)
            }
          }
          VStack {
            Spacer()
            HStack {
              NavigationLink(value: OfflineNavigationDestination.settings) {
                ActionButton(image: "Meatballs", backgroundColor: Color("Subtle"))
              }
              .buttonStyle(PlainButtonStyle())
              Spacer()
              if (!viewModel.isLoading) {
                Button(action: {
                  Task { await viewModel.retry() }
                }) {
                  ActionButton(image: "Reload", backgroundColor: Color("Subtle"))
                }
                .buttonStyle(PlainButtonStyle())
              } else {
                HStack {
                  ProgressView()
                    .progressViewStyle(CircularProgressViewStyle())
                    .frame(width: 18 * ADJUST, height: 18 * ADJUST)
                }
                .padding(.trailing, 11 * ADJUST)
              }
            }
            .padding(.horizontal, 5 * ADJUST)
          }
          .toolbarBackground(.hidden)
          .navigationDestination(for: OfflineNavigationDestination.self) { destination in
            switch destination {
            case .settings:
              SettingsView()
            }
          }
        }
      }
    }
  }
}
