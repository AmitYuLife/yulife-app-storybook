import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Colours } from "@styles";

export const mapCoverTypeToColor = (coverType: CoverType) => {
  switch (coverType) {
    case CoverType.epic:
      return Colours.products.fib.epic;
    case CoverType.rare:
      return Colours.products.fib.rare;
    case CoverType.common:
      return Colours.products.fib.common;
    default:
      return Colours.neutral.n800;
  }
};

export const mapCoverTypeToColorTheme = (coverType: CoverType) => {
  switch (coverType) {
    case CoverType.epic:
      return { primary: Colours.products.fib.epic, secondary: Colours.products.fib.epicLight };
    case CoverType.rare:
      return { primary: Colours.products.fib.rare, secondary: Colours.products.fib.rareLight };
    case CoverType.common:
      return { primary: Colours.products.fib.common, secondary: Colours.products.fib.commonLight };
    default:
      return { primary: Colours.neutral.n800, secondary: Colours.neutral.n100 };
  }
};
