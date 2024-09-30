import SwiftUI

@main
struct yuwatch_Watch_App: App {
    init() {
       ConnectivityModel.shared.startSession()
    }

    var body: some Scene {
      WindowGroup {
        AppNavigator().customFont(size: 16)
      }
    }
}
