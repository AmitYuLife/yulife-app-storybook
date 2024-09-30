import SwiftUI

struct AppConsoleView: View {
  @ObservedObject var appConsoleModel = AppConsoleModel.shared
  private let MESSAGE_AMOUNT = 8;
  
  var body: some View {
    GeometryReader { geometry in
      VStack(alignment: .leading, spacing: 2) {
        let lastMessages = appConsoleModel.messages.suffix(MESSAGE_AMOUNT)
        
        ForEach(Array(lastMessages.enumerated()), id: \.element) { index, message in
          Text(message)
            .customFont(size: 6)
            .foregroundColor(.white)
            .multilineTextAlignment(.leading)
            .padding(.bottom, 0)
            .fontWeight(.medium)
            .shadow(color: .black, radius: 1)
        }
      }
      .frame(width: geometry.size.width, height: geometry.size.height, alignment: .topLeading)
      .padding([.horizontal, .top])
    }
    .allowsHitTesting(false)
  }
}
