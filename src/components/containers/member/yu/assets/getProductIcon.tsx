import { ProductSvg } from "@atoms";
import { ItemSlot } from "../yu-types";
import { View } from "react-native";

export function getProductIcon(icon: ItemSlot) {
  switch (icon) {
    case "clockPendant":
      return ProductSvg.ClockPendantSvg;
    case "gloves":
      return ProductSvg.GlovesSvg;
    case "binoculars":
      return ProductSvg.BinocularsSvg;
    case "map":
      return ProductSvg.MapSvg;
    case "compass":
      return ProductSvg.CompassSvg;
    case "pants":
      return ProductSvg.PantsSvg;
    case "chest":
      return ProductSvg.ChestSvg;
    case "boots":
      return ProductSvg.BootsSvg;
    default:
      // ask design for other placeholder image?
      return View;
  }
}
