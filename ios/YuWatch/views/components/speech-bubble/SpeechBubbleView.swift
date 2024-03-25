import Foundation
import SwiftUI

struct SpeechBubbleView: View {
  var text: String
  var caretOffsetX: CGFloat
  var caretOffsetY: CGFloat
  var caretTipX: CGFloat
  
  var body: some View {
    ZStack(alignment: .topLeading) {
      HStack {
        Text(AttributedString(text))
          .foregroundColor(Color("HomeText"))
          .multilineTextAlignment(.leading)
          .customFont(size: 13)
      }
      .padding()
        .background(Color.white.opacity(0.16))
        .cornerRadius(10)
        .padding(.leading, 10)
      
      Path { path in
        let start = CGPoint(x: caretOffsetX, y: caretOffsetY)
        let tip = CGPoint(x: caretTipX, y: caretOffsetY + 5)
        let end = CGPoint(x: caretOffsetX, y: caretOffsetY + 10)
        
        path.move(to: start)
        path.addLine(to: tip)
        path.addLine(to: end)
        path.closeSubpath()
      }
      .fill(Color.white.opacity(0.16))
      .offset(x: 3, y: 0)
      .frame(width: 10, height: 20, alignment: .leading)
    }
    .padding(EdgeInsets(top: 0, leading:0, bottom: 0, trailing: 8))
    .frame(maxWidth: .infinity)
  }
}
