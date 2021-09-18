import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Colours } from "@styles";

export const mapCoverTypeToColor = (coverType: CoverType) => {
  if (coverType === CoverType.epic) {
    return Colours.products.fib.epic;
  }

  if (coverType === CoverType.rare) {
    return Colours.products.fib.rare;
  }

  if (coverType === CoverType.common) {
    return Colours.products.fib.common;
  }

  return Colours.neutral.n800;
};
