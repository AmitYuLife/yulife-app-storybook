import SceneKit
import Foundation
import SwiftUI

let MODEL_SCALE = Float(0.088)
let COIN_ENTRANCE_DELAY = 0.5
func createYucoinScene() -> SCNScene {
  guard let modelScene = SCNScene(named: "yucoin.dae") else {
    fatalError("Failed to load the 'yucoin.dae' model.")
  }
  
  let scene = SCNScene()
  scene.background.contents = UIImage(named: "HomeBackground")
  
  let modelNode = modelScene.rootNode.clone()
  modelNode.position = SCNVector3(x: 0, y: 2.7, z: 0)
  modelNode.scale = SCNVector3(x: 0, y: 0, z: 0)
  
  let rotation = SCNVector4(x: 1, y: 0, z: 0, w: Float.pi / 2)
  modelNode.rotation = rotation
  
  let textureImage = UIImage(named: "yucoin-new.png")
  modelNode.enumerateChildNodes { (childNode, _) in
    childNode.geometry?.materials.forEach { material in
      material.diffuse.contents = textureImage
      material.lightingModel = .physicallyBased
      material.specular.contents = UIColor.white
      material.shininess = 10.0
      
      material.metalness.contents = NSNumber(value: 1.0)
      material.roughness.contents = NSNumber(value: 0.5)
    }
  }
  
  let scaleAction = SCNAction.scale(to: CGFloat(MODEL_SCALE) * CGFloat(ADJUST), duration: 2.5)
  scaleAction.timingMode = .easeInEaseOut
  
  let rotationAction = SCNAction.rotateBy(x: 0, y: 0, z: CGFloat.pi * 2, duration: 3)
  rotationAction.timingMode = .easeInEaseOut
  
  let groupAction = SCNAction.group([scaleAction, rotationAction])
  let waitAction = SCNAction.wait(duration: COIN_ENTRANCE_DELAY)
  let sequence = SCNAction.sequence([waitAction, groupAction])
  modelNode.runAction(sequence)
  
  scene.rootNode.addChildNode(modelNode)
  
  let ambientLightNode = SCNNode()
  ambientLightNode.light = SCNLight()
  ambientLightNode.light?.type = .ambient
  ambientLightNode.light?.color = UIColor(white: 0.75, alpha: 1.0)
  scene.rootNode.addChildNode(ambientLightNode)
  
  let directionalLightNode = SCNNode()
  directionalLightNode.light = SCNLight()
  directionalLightNode.light?.type = .directional
  directionalLightNode.position = SCNVector3(x: 0, y: 0, z: 0)
  directionalLightNode.light?.color = UIColor(white: 0.4, alpha: 1.0)
  directionalLightNode.light?.intensity = 100
  
  let cameraNode = SCNNode()
  cameraNode.camera = SCNCamera()
  cameraNode.camera?.fieldOfView = 60
  cameraNode.position = SCNVector3(x: 0, y: 0, z: 0)
  cameraNode.name = "camera";
  cameraNode.addChildNode(directionalLightNode)
  directionalLightNode.position = SCNVector3(x: -100, y: -100, z: 0)
  
  let backSpotlightNode = SCNNode()
  backSpotlightNode.light = SCNLight()
  backSpotlightNode.light?.type = .spot
  backSpotlightNode.light?.intensity = 400
  backSpotlightNode.position = SCNVector3(x: -10, y: 10, z: 0)
  backSpotlightNode.light?.spotOuterAngle = 45
  backSpotlightNode.look(at: SCNVector3(x: -2, y: 0, z: 0))
  scene.rootNode.addChildNode(backSpotlightNode)
  
  let spotlightNode = SCNNode()
  spotlightNode.light = SCNLight()
  spotlightNode.light?.type = .spot
  spotlightNode.light?.intensity = 400
  spotlightNode.position = SCNVector3(x: 10, y: 10, z: 0)
  spotlightNode.light?.spotOuterAngle = 45
  spotlightNode.look(at: SCNVector3(x: 2, y: 0, z: 0))
  scene.rootNode.addChildNode(spotlightNode)
  
  scene.rootNode.addChildNode(cameraNode)
  
  return scene
}
