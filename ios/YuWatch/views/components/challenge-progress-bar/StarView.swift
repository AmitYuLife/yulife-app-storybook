import SwiftUI


struct StarView: View {
  let progress: Double;
  
  var isComplete: Bool { return progress >= 1; }
  
  var body: some View {
    VStack {
      VStack {
        Image(systemName: "star.fill")
          .resizable()
          .scaledToFit()
          .foregroundColor(isComplete ? Color.yellow : Color("ProgressStarInActive"))
      }
      .padding(6 * ADJUST)
      .background(Color(isComplete ? "ProgressStarActiveBackground" : "ProgressSegmentDisabled"))
      .cornerRadius(100)
    }
  }
}
