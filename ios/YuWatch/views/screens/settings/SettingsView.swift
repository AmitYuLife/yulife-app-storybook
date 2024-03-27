import Foundation
import SwiftUI

struct SettingsView: View {
  @State var isLogoutOpen = false;
  
  var body: some View {
    NavigationView {
      VStack {
        ScrollView {
          // Force blurry nav header
          Rectangle()
            .fill(Color.clear)
            .frame(height: 5)
          VStack(alignment: .leading, spacing: 8) {
            VStack {
              SettingsItem(label: "screens.settings.logout", onPress: {
                isLogoutOpen = true
              })
            }
            
          }
        }
        .navigationBarTitleDisplayMode(.inline)
      }
      .navigationTitle("Settings")
      .scrollIndicators(.hidden)
      .sheet(isPresented: $isLogoutOpen) {
        LogoutConfirmView(isPresented: $isLogoutOpen)
      }
    }
  }
}


