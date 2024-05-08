import SwiftUI

struct ActionButton: View {
  let image: String
  let backgroundColor: Color
  
   var body: some View {
    Image(image)
      .resizable()
      .aspectRatio(contentMode: .fit)
      .frame(width: 18 * ADJUST, height: 18 * ADJUST)
      .padding(11 * ADJUST)
      .contentShape(Circle())
      .background(backgroundColor)
      .cornerRadius(50)
  }
}
