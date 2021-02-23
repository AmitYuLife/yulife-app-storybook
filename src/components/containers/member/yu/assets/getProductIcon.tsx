import { ProductSvg } from "@atoms";
import { YuItemSlot } from "@graphql/_core/schema/globalTypes";
import { View } from "react-native";

// @TODO: Confirm with the team if we can delete this function/svgs, since this icons will come from the api from now on
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
