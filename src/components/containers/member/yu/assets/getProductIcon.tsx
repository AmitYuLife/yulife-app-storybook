import { ProductSvg } from "@atoms";
import { View } from "react-native";
import { YuItemSlot } from "../../../../../graphql/_core/schema/globalTypes";

export function getProductIcon(icon: YuItemSlot) {
  switch (icon) {
    case YuItemSlot.clockPendant:
      return ProductSvg.ClockPendantSvg;
    case YuItemSlot.gloves:
      return ProductSvg.GlovesSvg;
    case YuItemSlot.binoculars:
      return ProductSvg.BinocularsSvg;
    case YuItemSlot.map:
      return ProductSvg.MapSvg;
    case YuItemSlot.compass:
      return ProductSvg.CompassSvg;
    case YuItemSlot.pants:
      return ProductSvg.PantsSvg;
    case YuItemSlot.chest:
      return ProductSvg.ChestSvg;
    case YuItemSlot.boots:
      return ProductSvg.BootsSvg;
    default:
      // ask design for other placeholder image?
      return View;
  }
}
