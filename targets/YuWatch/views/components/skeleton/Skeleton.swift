import Foundation
import SwiftUI

struct Skeleton: View {
  var width: CGFloat;
  var height: CGFloat;

  var body: some View {
    Rectangle()
    .fill(Color.white.opacity(0.08))
    .frame(width: width, height: height)
    .blinking(duration: 0.75)
    .cornerRadius(2)
  }
}
