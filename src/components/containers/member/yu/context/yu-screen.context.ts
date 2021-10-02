import { YuScreenPopover } from "@graphql/_core/schema";
import { ProductStatus } from "@ids";
import { createContext, Dispatch } from "react";

type Side = "left" | "right";

interface Product {
  status: ProductStatus;
  productId: string;
}

type YuScreenContextPopover = YuScreenPopover & {
  index: number;
  side: Side;
  product: Product;
};

interface IYuScreenContext {
  hasYumoji: boolean;
  popover: YuScreenContextPopover;
  setPopover: Dispatch<YuScreenContextPopover>;
}

export const YuScreenContext = createContext<IYuScreenContext>({
  hasYumoji: false,
  popover: null,
  setPopover: () => null,
});
