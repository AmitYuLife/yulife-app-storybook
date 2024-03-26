import SwiftUI

struct StarView: View {
  let progress: Double
  var isComplete: Bool { return progress >= 1 }
  
  @State private var shouldAnimate: Bool = false
  
  var body: some View {
    VStack {
      Image(systemName: "star.fill")
        .resizable()
        .scaledToFit()
        .foregroundColor(isComplete ? Color.yellow : Color("ProgressStarInActive"))
    }
    .padding(6 * ADJUST)
    .background(Color(isComplete ? "ProgressStarActiveBackground" : "ProgressSegmentDisabled"))
    .cornerRadius(100)
    .overlay(
      Group {
        if isComplete {
          Circle()
            .fill(Color.clear)
            .overlay(
              Image(systemName: "star.fill")
                .resizable()
                .scaledToFit()
                .foregroundColor(Color.yellow)
              
            )
            .scaleEffect(shouldAnimate ? 5 : 0)
            .padding(6 * ADJUST)
            .opacity(shouldAnimate ? 0 : 1)
            .animation(.easeOut(duration: 0.7), value: shouldAnimate)
            .onAppear {
              shouldAnimate = true
            }
        }
      }
        .fixedSize()
    )
    .onChange(of: isComplete) { newValue in
      if newValue {
        withAnimation {
          shouldAnimate = true
        }
      }
    }
  }
}
