import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Colours } from "@styles";

export const mapCoverToColor = (coverType?: CoverType) => {
  const separator = getSeparatorColor(coverType);
  const border = getBorderColor(coverType);
  const shadow = getShadowColor(coverType);

  switch (coverType) {
    case CoverType.epic:
      return {
        gradient: [Colours.products.fib.epic, Colours.products.fib.epicGradientLight],
        secondary: Colours.secondary.s10S3,
        border,
        separator,
        shadow,
      };
    case CoverType.rare:
      return {
        gradient: [Colours.products.fib.rare, Colours.products.fib.rareGradientLight],
        secondary: Colours.secondary.s10S2,
        border,
        separator,
        shadow,
      };
    case CoverType.common:
      return {
        gradient: [Colours.products.fib.commonGradientDark, Colours.products.fib.commonGradientLight],
        secondary: Colours.secondary.s10S1,
        border,
        separator,
        shadow,
      };
    default:
      return {
        gradient: [Colours.neutral.white, Colours.neutral.white],
        secondary: Colours.neutral.white,
        border,
        separator,
        shadow,
      };
  }
};

const getSeparatorColor = (coverType: CoverType) => {
  switch (coverType) {
    case CoverType.common: {
      const common1 = Colours.hexToRGB(Colours.secondary.s30S1);
      const common2 = Colours.hexToRGB(Colours.products.fib.common);
      const commons1 = `rgba(${common1.r}, ${common1.g}, ${common1.b}, 0.6)`;
      const commons2 = `rgba(${common2.r}, ${common2.g}, ${common2.b}, 0.6)`;

      return [commons1, commons2, commons1];
    }

    case CoverType.epic: {
      const epic = Colours.hexToRGB(Colours.products.fib.epic);
      const epics1 = `rgba(${epic.r}, ${epic.g}, ${epic.b}, 0.15)`;
      const epics2 = `rgba(${epic.r}, ${epic.g}, ${epic.b}, 0.6)`;

      return [epics1, epics2, epics1];
    }

    case CoverType.rare: {
      const rare = Colours.hexToRGB(Colours.products.fib.rareSeparator);
      const rares1 = `rgba(${rare.r}, ${rare.g}, ${rare.b}, 0.15)`;
      const rares2 = `rgba(${rare.r}, ${rare.g}, ${rare.b}, 0.6)`;

      return [rares1, rares2, rares1];
    }

    default: {
      const default1 = Colours.hexToRGB(Colours.neutral.g1);
      const default2 = Colours.hexToRGB(Colours.neutral.g2);
      const defaults1 = `rgba(${default1.r}, ${default1.g}, ${default1.b}, 0.6)`;
      const defaults2 = `rgba(${default2.r}, ${default2.g}, ${default2.b}, 0.6)`;

      return [defaults1, defaults2, defaults1];
    }
  }
};

const getBorderColor = (coverType: CoverType) => {
  switch (coverType) {
    case CoverType.common: {
      const common1 = `rgb(30, 190, 136)`;
      const common2 = `rgb(194, 238, 223)`;

      return [common1, common2];
    }

    case CoverType.epic: {
      const epic1 = `rgb(179, 150, 255)`;
      const epic2 = `rgb(233, 224, 255)`;

      return [epic1, epic2];
    }

    case CoverType.rare: {
      const rare1 = `rgb(48, 167, 217)`;
      const rare2 = `rgb(206, 234, 245)`;

      return [rare1, rare2];
    }

    default: {
      const defaultNeutral = Colours.hexToRGB(Colours.neutral.n200);
      const defaultRgb = `rgba(${defaultNeutral.r}, ${defaultNeutral.g}, ${defaultNeutral.b}, 1)`;

      return [defaultRgb, defaultRgb];
    }
  }
};

const getShadowColor = (coverType: CoverType) => {
  switch (coverType) {
    case CoverType.common: {
      const common = Colours.hexToRGB(Colours.products.fib.common);
      const commonShadow = `rgba(${common.r}, ${common.g}, ${common.b}, 0.08)`;

      return commonShadow;
    }

    case CoverType.epic: {
      const epic = Colours.hexToRGB(Colours.products.fib.epic);
      const epicShadow = `rgba(${epic.r}, ${epic.g}, ${epic.b}, 0.08)`;

      return epicShadow;
    }

    case CoverType.rare: {
      const rare = Colours.hexToRGB(Colours.products.fib.rare);
      const rareShadow = `rgba(${rare.r}, ${rare.g}, ${rare.b}, 0.08)`;

      return rareShadow;
    }

    default: {
      return "rgba(0,0,0,0.04)";
    }
  }
};
