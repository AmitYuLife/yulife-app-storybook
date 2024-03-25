import SwiftUI

struct LoadingButton: View {
  let action: () -> Void
  var isLoading: Bool {
    didSet {
      updateLoadingState()
    }
  }
  var label: String;
  var icon: Image?
  
  @State var showLoading: Bool = false;
  
  init(action: @escaping () -> Void, isLoading: Bool, label: String, icon: Image? = nil ) {
    self.label = label
    self.isLoading = isLoading
    self.icon = icon
    self.action = action
    
    self.showLoading = isLoading
  }
  
  func updateLoadingState() {
    if !isLoading && showLoading {
      DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
        self.showLoading = isLoading
      }
    } else {
      self.showLoading = isLoading
    }
  }
  
  var body: some View {
    Button(action: {
      if(self.showLoading) {
        // .disabled fucks styling up
        return
      }
      
      action()
    }) {
      HStack {
        if isLoading {
          ProgressView()
            .progressViewStyle(CircularProgressViewStyle())
            .animation(nil, value: UUID())
        } else {
          HStack(spacing: 5) {
            Text(label).fontWeight(.bold)
            icon
          }
          .animation(nil, value: UUID())
        }
      }
      .contentShape(Rectangle())
      .frame(maxWidth: .infinity)
      .frame(height: 45 * ADJUST)
      .background(Color("Primary"))
      .foregroundColor(Color.white)
      .cornerRadius(100)
    }
    .buttonStyle(PlainButtonStyle())

    
    
  }
}
