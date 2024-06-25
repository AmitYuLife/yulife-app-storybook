import SwiftUI
import Foundation

enum HomeNavigationDestination {
  case challengeSelect
  case progressAlert
  case settings
}

struct HomeScreenView: View {
  @ObservedObject var viewModel = HomeScreenViewModel()
  
  let coinSize = SCREEN_WIDTH * 0.4;
  
  var body: some View {
    ZStack {
      Image("HomeBackground")
        .resizable()
        .scaledToFill()
        .edgesIgnoringSafeArea(.all)
      
      NavigationStack(path: $viewModel.navigationPath) {
        VStack {
          VStack {
            NavigationLink(
              value: viewModel.canStartChallenge == .yes ? HomeNavigationDestination.challengeSelect : HomeNavigationDestination.progressAlert
            ) {
              Image("yucoin-detailed")
                .resizable()
                .scaledToFill()
                .frame(width: coinSize, height: coinSize)
                .aspectRatio(contentMode: .fill)
                .padding(.bottom, 10 * ADJUST)
            }
            .buttonStyle(PlainButtonStyle())
            
            VStack(spacing: 1) {
              HStack(spacing: 4) {
                CounterView(number: viewModel.yucoinToday)
                  .customFont(size: 18)
                  .fontWeight(.bold)
                  .monospacedDigit()
                  .foregroundColor(Color("HomeText"))
                Text("screens.home.yucoin_today")
                  .customFont(size: 18)
                  .foregroundColor(Color("HomeText"))
              }
              HStack {
                Image("Steps")
                  .resizable()
                  .frame(width: 14.0 * ADJUST, height: 14.0 * ADJUST)
                HStack(spacing: 3) {
                  CounterView(number: viewModel.stepsToday)
                    .customFont(size: 16)
                    .monospacedDigit()
                    .foregroundColor(Color("HomeText"))
                  Text("common.steps")
                    .foregroundColor(Color("HomeText"))
                    .customFont(size: 16)
                }
              }
              .padding(.bottom, 10 * ADJUST)
            }
          }
        }

        VStack {
          Spacer()
          HStack {
            NavigationLink(value: HomeNavigationDestination.settings) {
              ActionButton(image: "Meatballs", backgroundColor: Color("Subtle"))
            }
            .buttonStyle(PlainButtonStyle())

            Spacer()
            if viewModel.canStartChallenge == .yes {
              NavigationLink(value: HomeNavigationDestination.challengeSelect) {
                ActionButton(image: "Play", backgroundColor: Color("Primary"))
              }
              .buttonStyle(PlainButtonStyle())

            } else {
              NavigationLink(value: HomeNavigationDestination.progressAlert) {
                ActionButton(image: "Hourglass", backgroundColor: Color("Subtle"))
              }
              .buttonStyle(PlainButtonStyle())
            }
          }
          .padding(.horizontal, 5 * ADJUST)
        }
        .toolbarBackground(.hidden)
        .navigationDestination(for: HomeNavigationDestination.self) { destination in
          switch destination {
          case .challengeSelect:
            ChallengeSelectView()
          case .progressAlert:
            ChallengeCantStartView(goBack: viewModel.resetNavigation, canStartChallenge: viewModel.canStartChallenge)
          case .settings:
            SettingsView()
          }
        }
      }
    }
  }
}
