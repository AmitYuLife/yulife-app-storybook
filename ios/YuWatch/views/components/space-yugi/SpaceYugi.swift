import SwiftUI

let X_OFFSET_RANGE: ClosedRange<CGFloat> = -2...1.7
let Y_OFFSET_RANGE: ClosedRange<CGFloat> = -10...6
let SCALE_RANGE: ClosedRange<CGFloat> = 1...1.1

struct SpaceYugi: View {
  @State private var xOffset: CGFloat = 0
  @State private var yOffset: CGFloat = 0
  @State private var scale: CGFloat = 1.0
  @State private var internalRotation: Double = 0

  var width: CGFloat;
  var externalXOffset: CGFloat
  var externalYOffset: CGFloat
  var externalRotation: Angle
  var isFlipped: Bool
  
  let timer = Timer.publish(every: 2, on: .main, in: .common).autoconnect()
  
  var body: some View {
    VStack {
      Image("astro-yugi")
        .resizable()
        .aspectRatio(contentMode: .fit)
        .frame(width: width)
        .offset(x: xOffset, y: yOffset)
        .scaleEffect(scale)
        .rotationEffect(Angle(degrees: internalRotation))
        .onReceive(timer) { _ in
          withAnimation(.easeInOut(duration: 2.2)) {
            xOffset = CGFloat.random(in: X_OFFSET_RANGE) * (isFlipped ? -1 : 1)
            yOffset = CGFloat.random(in: Y_OFFSET_RANGE) * (isFlipped ? -1 : 1)
            scale = CGFloat.random(in: SCALE_RANGE)
            internalRotation = 0
          }
        }
        .onAppear {
          withAnimation(.easeInOut(duration: 2.2)) {
            xOffset = CGFloat.random(in: X_OFFSET_RANGE) * (isFlipped ? -1 : 1)
            yOffset = CGFloat.random(in: Y_OFFSET_RANGE) * (isFlipped ? -1 : 1)
            scale = CGFloat.random(in: SCALE_RANGE)
            internalRotation = 0
          }
        }
    }
    .rotationEffect(externalRotation)
    .offset(x: externalXOffset, y: externalYOffset)
  }
}
