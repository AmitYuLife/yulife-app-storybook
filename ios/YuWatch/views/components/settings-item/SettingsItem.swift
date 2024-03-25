import Foundation
import SwiftUI

struct SettingsItem: View {
  var label: String;
  var onPress: () -> Void;
  
  var body: some View {
    Button(action: onPress) {
      HStack {
        VStack(alignment: .leading) {
          Text(label)
            .customFont(size: 16)
            .fontWeight(.bold)
            .foregroundColor(Color("HomeText"))
            .frame(height: 16 * ADJUST)
        }
        Spacer()
      } 
      .padding(AdjustedEdgeInsets(top: 20, leading:25, bottom: 20, trailing: 25))
      .background(Color.white.opacity(0.12))
      .cornerRadius(14)
      .padding(AdjustedEdgeInsets(top: 0, leading: 5, bottom: 3, trailing: 5))
    }
    .buttonStyle(PlainButtonStyle())
    
  }
}
