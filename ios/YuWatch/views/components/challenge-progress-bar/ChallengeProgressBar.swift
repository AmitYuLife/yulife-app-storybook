import SwiftUI

let SPACING = 0.1;
let ROTATION = -90.0;
let LINE_WIDTH = 7.0 * ADJUST;


struct ChallengeProgressBar: View {
  let progresses: [CGFloat]
  let circleRadius = CGFloat(74 * ADJUST)
  
  func starOffset(index: Int, radius: CGFloat) -> CGPoint {
    let totalSegments = CGFloat(progresses.count)
    let segmentAngle = 360.0 / totalSegments
    let angle = segmentAngle * CGFloat(index) + segmentAngle + CGFloat(ROTATION)
    let angleRadians = angle * .pi / 180
    
    let xOffset = radius * cos(angleRadians)
    let yOffset = radius * sin(angleRadians)
    
    return CGPoint(x: xOffset, y: yOffset)
  }
  
  var body: some View {
    ZStack {
      ForEach(0..<progresses.count, id: \.self) { index in
        CircleSegment(progress: progresses[index], index: index, totalSegments: progresses.count, spacing: SPACING, rotate: ROTATION)
      }
      
      ForEach(0..<progresses.count, id: \.self) { index in
        StarView(progress: progresses[index])
          .frame(width: 28 * ADJUST, height: 28 * ADJUST)
          .offset(x: self.starOffset(index: index, radius: circleRadius).x, y: self.starOffset(index: index, radius: circleRadius).y)
      }
    }
  }
}


struct CircleSegment: View {
  let progress: CGFloat
  let index: Int
  let totalSegments: Int
  let spacing: CGFloat
  let rotate: Double
  
  var size: CGFloat {
    let totalSpacing = spacing * CGFloat(totalSegments)
    return (1.0 - totalSpacing) / CGFloat(totalSegments)
  }
  
  var start: CGFloat {
    (CGFloat(index) * (size + spacing)) + spacing / 2
  }
  
  var body: some View {
    ZStack {
      Circle()
        .trim(from: start, to: start + size)
        .stroke(
          Color(progress > 0 || index == 0 ? "ProgressSegment" : "ProgressSegmentDisabled"),
          style: StrokeStyle(lineWidth: LINE_WIDTH, lineCap: .round)
        )
        .rotationEffect(.degrees(rotate))
      
      Circle()
        .trim(from: start, to: start + size * progress)
        .stroke(
          Color("Primary"),
          style: StrokeStyle(lineWidth: LINE_WIDTH, lineCap: .round)
        )
        .rotationEffect(.degrees(rotate))
        .animation(progress < 1 ? .easeInOut(duration: 1) : .easeInOut(duration: 0), value: progress)
    }
  }
}
