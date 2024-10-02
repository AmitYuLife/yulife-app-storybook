import SwiftUI

// This renders the app background if on WatchOS 9 or below
// as it's not possible to change the background color of a NavigationView on watchos <= 9

struct CompatabilityBackground<Content: View>: View {
  let content: () -> Content
  
  init(@ViewBuilder content: @escaping () -> Content) {
    self.content = content
  }
  
  var body: some View {
    if #unavailable(watchOS 10) {
      ZStack {
        Image("HomeBackground")
          .resizable()
          .scaledToFill()
          .edgesIgnoringSafeArea(.all)
        
        VStack {
          content()
        }.padding(.top, 10 * ADJUST)
      }
    } else {
      content()
    }
  }
}
