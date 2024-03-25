import SwiftUI
import SceneKit

class CameraOrbit {
  var radius: CGFloat = 10.0
  var theta: CGFloat = 0.0
  var phi: CGFloat = CGFloat.pi / 2.0
  
  func updateCameraPosition(deltaYaw: CGFloat, deltaPitch: CGFloat, cameraNode: SCNNode) {
    theta += deltaYaw * 0.005
    phi += deltaPitch * 0.005
    
    phi = max(min(phi, CGFloat.pi - 0.1), 0.1)
    
    let x = radius * sin(phi) * cos(theta)
    let y = radius * cos(phi)
    let z = radius * sin(phi) * sin(theta)
    
    cameraNode.position = SCNVector3(x, y, z)
    cameraNode.look(at: SCNVector3(0, 0, 0))
  }
}

func addSparkleEffectRelativeToCamera(cameraNode: SCNNode, withVelocity velocity: CGFloat) {
  print(velocity)

  let numberOfSparkles = min(max(Int(velocity / 2.6), 1), 100)
  
  let coinPosition = SCNVector3(x: 0, y: 0, z: 0)
  for _ in 0..<numberOfSparkles {

    let sparkleNode = SCNNode(geometry: SCNPlane(width: 0.1, height: 0.1))
    sparkleNode.geometry?.firstMaterial?.diffuse.contents = UIImage(named: "sparkle.png")
    sparkleNode.scale = SCNVector3(0, 0, 0)
    
    let minX: Float = -10
    let maxX: Float = 10
    let minY: Float = 4
    let maxY: Float = 12
    
    var sparkleX: Float = 0.0
    var sparkleY: Float = 0.0
 
      sparkleX = Float.random(in: minX...maxX)
    
  
     let uniformRandomY = Float.random(in: 0...1)
     let biasedRandomY = sqrt(uniformRandomY)
     let rangeY = maxY - minY
     sparkleY = minY + biasedRandomY * rangeY
      
    
    let sparkleZ = coinPosition.z - 20
    
    sparkleNode.position = SCNVector3(sparkleX, sparkleY, sparkleZ)
    
    let randomYRotation = Float.random(in: 0...(2 * Float.pi))
        sparkleNode.eulerAngles.z = randomYRotation
    
    cameraNode.addChildNode(sparkleNode)
    
    let baseScale = CGFloat.random(in: 3...6)
    
    let positionFactor = 1 - ((sparkleY - minY) / rangeY)
    
    let chanceModifier = Int(1 / positionFactor)
    let chanceOfLargeSparkle = Int.random(in: 1...(max(30, chanceModifier)))

    let randomScaleFactor = chanceOfLargeSparkle <= 1 ? CGFloat.random(in: 7...12) : baseScale


    let randomDurationIn = Double.random(in: 0.4...1)
    let randomDurationOut = Double.random(in: 0.4...1)
    let delayBeforeStarting = Double.random(in: 0...0.2)

    let scaleIn = SCNAction.scale(to: randomScaleFactor, duration: randomDurationIn)
    let scaleOut = SCNAction.scale(to: 0, duration: randomDurationOut)
    let waitAction = SCNAction.wait(duration: delayBeforeStarting)

    let sequence = SCNAction.sequence([waitAction, scaleIn, scaleOut, SCNAction.removeFromParentNode()])

    sparkleNode.runAction(sequence)
  }
}

struct SpinningCoinView: View {
  var scn = createBasicScene();
  @State private var lastDragLocation: CGPoint = .zero
  @State private var cameraYaw: CGFloat = 0.0
  @State private var cameraPitch: CGFloat = 0.0
  @State private var cameraOrbiter = CameraOrbit()
  
  private let SPEED = 6.5;
  private let maxVelocity: Float = 130
  
  init() {
    self.applyMomentum(yawSpeed: 50, pitchSpeed: 0, ignoreMaxVelocity: true, slowDown: 0.98, delay: COIN_ENTRANCE_DELAY, disableSparkles: true)
    
  }
  
  func applyMomentum(yawSpeed: Float, pitchSpeed: Float, ignoreMaxVelocity: Bool = false, slowDown: Float = 0.98, delay: Double = 0, disableSparkles: Bool = false) {
    var currentYawSpeed = ignoreMaxVelocity ? yawSpeed : min(max(yawSpeed, -maxVelocity), maxVelocity)
    var currentPitchSpeed = min(max(pitchSpeed, -maxVelocity), maxVelocity)
    if abs(currentYawSpeed) > 1 && !disableSparkles {
      if let cameraNode = scn.rootNode.childNode(withName: "camera", recursively: true) {

        addSparkleEffectRelativeToCamera(cameraNode: cameraNode, withVelocity: abs(CGFloat(currentYawSpeed)))
      }
    }
    
    DispatchQueue.main.asyncAfter(deadline: .now() + delay) {
      Timer.scheduledTimer(withTimeInterval: 0.016, repeats: true) { timer in
        if let cameraNode = scn.rootNode.childNode(withName: "camera", recursively: true) {
          let deltaYaw = CGFloat(currentYawSpeed)
          let deltaPitch = CGFloat(currentPitchSpeed)
          cameraOrbiter.updateCameraPosition(deltaYaw: deltaYaw, deltaPitch: deltaPitch, cameraNode: cameraNode)
        }
        
        currentYawSpeed *= slowDown
        currentPitchSpeed *= slowDown
        
        if abs(currentYawSpeed) < 0.001 && abs(currentPitchSpeed) < 0.001 {
          timer.invalidate()
        }
      }
    }
  }
  
  var body: some View {
    let dragGesture = DragGesture()
      .onChanged { value in
        let deltaX = (value.translation.width - lastDragLocation.x) * SPEED
        
        if let cameraNode = scn.rootNode.childNode(withName: "camera", recursively: true) {
          cameraOrbiter.updateCameraPosition(deltaYaw: deltaX, deltaPitch: 0, cameraNode: cameraNode)
        }
        
        lastDragLocation = CGPoint(x: value.translation.width, y: value.translation.height)
      }
      .onEnded { value in
        let speedX = (value.predictedEndTranslation.width - value.translation.width) * SPEED
        let rotationSpeedYaw = Float(speedX) * 0.005 * 15
        
        applyMomentum(yawSpeed: rotationSpeedYaw, pitchSpeed: 0)
        lastDragLocation = .zero
      }
    return SceneView(scene: scn, options: [])
      .gesture(dragGesture)
      .frame(width: .infinity, height: .infinity)
      .onAppear {
        if let cameraNode = scn.rootNode.childNode(withName: "camera", recursively: true) {
          cameraOrbiter.updateCameraPosition(deltaYaw: 0, deltaPitch: 0, cameraNode: cameraNode)
        }
      }
  }
}
