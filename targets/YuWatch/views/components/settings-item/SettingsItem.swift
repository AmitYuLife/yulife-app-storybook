import Foundation
import SwiftUI

struct SettingsItem: View {
  var label: LocalizedStringKey;
  var icon: String;
  var onPress: () -> Void;
  
  var body: some View {
    Button(action: onPress) {
      HStack {
        VStack {
          Image(icon)
            .resizable()
            .scaledToFit()
            .frame(width: 15 * ADJUST, height: 15 * ADJUST)
            .aspectRatio(contentMode: .fill)
        }
        .padding(AdjustedEdgeInsets(top: 0, leading: 5, bottom: 0, trailing: 5))
        .frame(width: 32 * ADJUST, height: 32 * ADJUST)
        .background(Color("HomeText"))
        .cornerRadius(100)
        VStack(alignment: .leading) {
          Text(label)
            .customFont(size: 16)
            .fontWeight(.bold)
            .foregroundColor(Color("HomeText"))
            .frame(height: 16 * ADJUST)
        }
        .padding(.leading, 5 * ADJUST)
        Spacer()
      } 
      .padding(AdjustedEdgeInsets(top: 12, leading:10 , bottom: 12, trailing: 10))
      .background(Color.white.opacity(0.12))
      .cornerRadius(14)
      .padding(AdjustedEdgeInsets(top: 0, leading: 5, bottom: 3, trailing: 5))
    }
    .buttonStyle(PlainButtonStyle())
    
  }
}
