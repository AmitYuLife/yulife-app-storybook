import Foundation
import Combine
import SwiftUI

struct AlertView: View {
  var text: String {
    didSet {
      updateBubbleText(to: text)
    }
  }
  var buttonText: String
  var buttonAction: () -> Void
  var isLoading: Bool
  var isNavigatedScreen: Bool = false;
  
  @State private var contentOpacity = 0.0
  @State private var currentText: String = ""
  @State private var displayedText: String = ""
  @State private var animateBubbleOut = false
  @State private var showSpeechBubble: Bool = true
  @State private var yugiOpacity = 0.0
  
  var yugiWidth = SCREEN_WIDTH * 0.3
  @State private var yugiOffset = CGSize(width: -SCREEN_WIDTH * 0.35, height: 0)
  @State private var yugiRotation = Angle(degrees: 0)
  
  let animationDelay = 6.0
  
  var body: some View {
    ZStack(alignment: .topLeading) {
      VStack {
        if showSpeechBubble {
          HStack {
            Spacer()
            VStack(alignment: .leading) {
              VStack(alignment: .leading) {
                if(displayedText != "") {
                  SpeechBubbleView(
                    text: displayedText,
                    caretOffsetX: 7,
                    caretOffsetY: 10,
                    caretTipX: 0
                  )
                  .transition(.asymmetric(insertion: .opacity, removal: .slide.combined(with: .opacity)))
                }
              }
              
              .frame(maxWidth: .infinity)
            }
            .frame(width: SCREEN_WIDTH * 0.8)
          }
          .onAppear {
            withAnimation(.easeInOut(duration: 0.5)) {
              animateBubbleOut = false
            }
          }
          .onDisappear {
            withAnimation(.easeInOut(duration: 0.5)) {
              animateBubbleOut = true
            }
          }
        }
        
        Spacer()
        
        LoadingButton(
          action: buttonAction,
          isLoading: isLoading,
          label: buttonText
        )
        .padding(EdgeInsets(top: 0, leading: 10, bottom: 10, trailing: 10))
      }
      
      .opacity(contentOpacity)
      .onAppear {
        startAnimationSequence()
      }
      .onReceive(Just(text)) { output in
        if(output != currentText) {
          currentText = output
          updateBubbleText(to: text)
        }
      }
      .frame(maxWidth: .infinity, maxHeight: .infinity)
      
      HStack {
        SpaceYugi(
          width: yugiWidth,
          externalXOffset: yugiOffset.width, externalYOffset: yugiOffset.height, externalRotation: yugiRotation)
        .opacity(yugiOpacity)
        Spacer()
        
      }
    }.padding(!self.isNavigatedScreen ? EdgeInsets(top: 30, leading: 0, bottom: 10, trailing: 0) : EdgeInsets(top: 5, leading: 0, bottom: 10, trailing: 0))
  }
  
  func startAnimationSequence() {
    if(!isNavigatedScreen) {
      startYugi()
    } else {
      DispatchQueue.main.asyncAfter(deadline: .now() + (0.4)) {
        startYugi()
      }
    }
    
    DispatchQueue.main.asyncAfter(deadline: .now() + (self.isNavigatedScreen ? 0.3 : 1.2)) {
      withAnimation(.easeIn(duration: 0.5)) {
        contentOpacity = 1.0
      }
    }
  }
  
  func startYugi() {
    yugiOpacity = 1;
    withAnimation(.interpolatingSpring(stiffness: 10, damping: 10, initialVelocity: 0)) {
      yugiOffset = CGSize(width: -8, height: -8)
    }
  }
  
  func updateBubbleText(to newText: String) {
    withAnimation(.easeInOut(duration: 0.5)) {
      animateBubbleOut = true
    }
    
    DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
      withAnimation(.none) {
        self.displayedText = newText
        self.showSpeechBubble = false
      }
      
      DispatchQueue.main.async {
        withAnimation(.easeInOut(duration: 0.5)) {
          self.showSpeechBubble = true
        }
      }
    }
  }
}
