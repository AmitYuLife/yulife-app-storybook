import SwiftUI
import Combine

struct CounterView: View {
  var number: Int;
  private let UPDATES_PER_SECOND = 20.0;
  @State private var displayedNumber: Int = 0
  @State private var timer: Timer?
  @State private var lastNumber = 0;
  
  private func startCounting() {
    self.timer?.invalidate()
    self.timer = nil
    
    let difference = abs(number - displayedNumber)
    let step = max(1, difference / Int(UPDATES_PER_SECOND))
    
    timer = Timer.scheduledTimer(withTimeInterval: 1/UPDATES_PER_SECOND, repeats: true) { timer in
      if self.displayedNumber < self.number {
        self.displayedNumber += min(step, self.number - self.displayedNumber)
        if self.displayedNumber > self.number {
          self.displayedNumber = self.number
        }
      } else if self.displayedNumber > self.number {
        self.displayedNumber = self.number;
      } else {
        self.timer?.invalidate()
        self.timer = nil
      }
    }
  }
  
  var body: some View {
    Text("\(displayedNumber)")
      .onAppear {
        startCounting()
      }
      .monospacedDigit()
      .onReceive(Just(number)) { output in
        if(self.lastNumber != output){
          self.lastNumber = output;
          startCounting()
        }
      }
  }
}
