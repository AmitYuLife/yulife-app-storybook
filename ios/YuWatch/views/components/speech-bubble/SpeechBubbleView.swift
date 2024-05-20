import Foundation
import SwiftUI

struct SpeechBubbleView: View {
  var text: LocalizedStringKey
  var caretOffsetX: CGFloat
  var caretOffsetY: CGFloat
  var caretTipX: CGFloat
  var isFlipped: Bool
  
  var body: some View {
    ZStack(alignment: .topLeading) {
      HStack {
        if(isFlipped) { Spacer() }
        HStack {
          Text(text)
            .foregroundColor(Color("HomeText"))
            .multilineTextAlignment(.leading)
            .customFont(size: 13)
        }
        .padding()
        .background(Color.white.opacity(0.16))
        .cornerRadius(10)
        .padding(.leading, 10)
        if(isFlipped) {
          HStack {}
            .frame(width: 9, height: 20)
        }
      }
      
      HStack {
        if (isFlipped) { Spacer() }
        Path { path in
          let start = CGPoint(x: isFlipped ? caretTipX : caretOffsetX, y: caretOffsetY)
          let tip = CGPoint(x: isFlipped ? caretOffsetX : caretTipX, y: caretOffsetY + 5)
          let end = CGPoint(x: isFlipped ? caretTipX : caretOffsetX, y: caretOffsetY + 10)
          
          path.move(to: start)
          path.addLine(to: tip)
          path.addLine(to: end)
          path.closeSubpath()
        }
        .fill(Color.white.opacity(0.16))
        .offset(x: isFlipped ? -3 : 3, y: 0)
        .frame(width: 10, height: 20, alignment: .leading)
      }
    }
    .padding(EdgeInsets(top: 0, leading: isFlipped ? 8 :  0, bottom: 0, trailing: isFlipped ? 0 : 8))
    .frame(maxWidth: .infinity)
  }
}
