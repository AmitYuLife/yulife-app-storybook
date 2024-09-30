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


private struct FirstAppear: ViewModifier {
    let action: () -> ()
    
    // Use this to only fire your block one time
    @State private var hasAppeared = false
    
    func body(content: Content) -> some View {
        // And then, track it here
        content.onAppear {
            guard !hasAppeared else { return }
            hasAppeared = true
            action()
        }
    }
}

extension View {
  func blinking(duration: Double = 1, isActive: Bool = true) -> some View {
      modifier(BlinkViewModifier(duration: duration, isActive: isActive))
  }
  
  func onFirstAppear(_ action: @escaping () -> ()) -> some View {
        modifier(FirstAppear(action: action))
  }
  
  func compatabilityToolbar() -> some View {
      if #available(watchOS 9, *) {
          return self.toolbarBackground(.hidden)
      } else {
          return self
      }
  }
  
  fileprivate func toAnyView() -> AnyView {
      AnyView(self)
  }
}
