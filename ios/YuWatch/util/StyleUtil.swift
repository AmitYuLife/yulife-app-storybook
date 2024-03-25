import Foundation
import SwiftUI

let SCREEN_WIDTH = WKInterfaceDevice.current().screenBounds.size.width;

let ADJUST = SCREEN_WIDTH / 198.0

func AdjustedEdgeInsets(top: CGFloat, leading: CGFloat, bottom: CGFloat, trailing: CGFloat) -> EdgeInsets {
    EdgeInsets(top: top * ADJUST, leading: leading * ADJUST, bottom: bottom * ADJUST, trailing: trailing * ADJUST)
}


// small screen size (SE 40mm): 162.0
// big watch 46mm:  198.0
