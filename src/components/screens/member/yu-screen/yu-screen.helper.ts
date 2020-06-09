const WORLD_IMAGES = [
  { image: require("../../../../../assets/yuscreen/worlds/forest.png") },
  { image: require("../../../../../assets/yuscreen/worlds/ocean.png") },
  { image: require("../../../../../assets/yuscreen/worlds/desert.png") },
  { image: require("../../../../../assets/yuscreen/worlds/mountain.png") },
];
const WORLD_COLORS = ["#3C9172", "#04387A", "#B26330", "#FF96A3"];
const WORLD_NAME = ["Forest", "Ocean", "Desert", "Mountain"];

export function getCurrentWorldImage(currentWorld: number) {
  return WORLD_IMAGES[currentWorld].image ?? require("../../../../../assets/yuscreen/worlds/forest.png");
}

export function getCurrentWorldTextColor(currentWorld: number) {
  return WORLD_COLORS[currentWorld] ?? "#3C9172";
}

export function getCurrentWorldText(currentWorld: number) {
  return WORLD_NAME[currentWorld] ?? "Forest";
}
