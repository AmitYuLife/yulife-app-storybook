import { ViewStyle } from "react-native";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";

export interface ProductSvgProps {
  width?: number;
  height?: number;
  style?: ViewStyle;
  status?: YuProductStatus;
}
