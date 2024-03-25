import SwiftUI

struct BlinkViewModifier: ViewModifier {
    let duration: Double
    var isActive: Bool = true
    @State private var blinking: Bool = false
    
    func body(content: Content) -> some View {
        if isActive {
            return content
                .opacity(blinking ? 0.3 : 1)
                .animation(.easeInOut(duration: duration).repeatForever(), value: blinking)
                .onAppear {
                    withAnimation {
                        blinking.toggle()
                    }
                }
                .toAnyView()
        } else {
            return content.toAnyView()
        }
    }
}
extension View {
  func blinking(duration: Double = 1, isActive: Bool = true) -> some View {
      modifier(BlinkViewModifier(duration: duration, isActive: isActive))
  }
  
  fileprivate func toAnyView() -> AnyView {
      AnyView(self)
  }
}
