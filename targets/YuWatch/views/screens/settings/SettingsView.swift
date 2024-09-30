import Foundation
import SwiftUI

struct SettingsView: View {
  @State var isLogoutOpen = false;
  
  var body: some View {
    NavigationView {
      CompatabilityBackground {
        VStack {
          ScrollView {
            // Force blurry nav header
            Rectangle()
              .fill(Color.clear)
              .frame(height: 30 * ADJUST)
            VStack(alignment: .leading, spacing: 8 * ADJUST) {
              VStack {
                SettingsItem(
                  label: "screens.settings.logout",
                  icon: "logout",
                  onPress: {
                    isLogoutOpen = true
                  }
                )
              }
            }
          }
          .navigationBarTitleDisplayMode(.inline)
        }
        .scrollIndicators(.hidden)
        .sheet(isPresented: $isLogoutOpen) {
          LogoutConfirmView(isPresented: $isLogoutOpen)
        }
      }.compatabilityToolbar()
    }
    .compatabilityToolbar()
    .navigationTitle("screens.settings.title")
  }
}


