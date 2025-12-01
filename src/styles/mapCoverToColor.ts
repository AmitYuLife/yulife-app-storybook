import { CoverType } from "@graphql/__generated";
import { Colours } from "@styles";

export const mapCoverToColor = (coverType?: CoverType) => {
  const separator = getSeparatorColor(coverType);
  const border = getBorderColor(coverType);
  const shadow = getShadowColor(coverType);

  switch (coverType) {
    case CoverType.Epic:
      return {
        gradient: [Colours.products.fib.epic, Colours.products.fib.epicGradientLight],
        secondary: Colours.secondary.s10S3,
        border,
        separator,
        shadow,
        solidBorder: Colours.secondary.s100S3,
        cornerFlower: Colours.secondary.s50S3,
        cornerFlowerAccent: Colours.secondary.s20S3,
        concentricCircles: Colours.secondary.s20S3,
        medalBorder: Colours.products.fib.epicMedal,
        certificateBackground: Colours.secondary.s10S3,
        certificatePrimary: Colours.products.fib.epic,
      };
    case CoverType.Rare:
      return {
        gradient: [Colours.products.fib.rare, Colours.products.fib.rareGradientLight],
        secondary: Colours.secondary.s10S2,
        border,
        separator,
        shadow,
        solidBorder: Colours.blue.dp305,
        cornerFlower: Colours.products.fib.rareFlower,
        cornerFlowerAccent: Colours.secondary.s20S2,
        concentricCircles: Colours.products.fib.rareCircle,
        medalBorder: Colours.products.fib.rareMedal,
        certificateBackground: Colours.secondary.s10S2,
        certificatePrimary: Colours.products.fib.rare,
      };
    case CoverType.Common:
      return {
        gradient: [Colours.products.fib.commonGradientDark, Colours.products.fib.commonGradientLight],
        secondary: Colours.secondary.s10S1,
        border,
        separator,
        shadow,
        solidBorder: Colours.products.fib.commonBorder1,
        cornerFlower: Colours.secondary.s50S1,
        cornerFlowerAccent: Colours.secondary.s20S1,
        concentricCircles: Colours.secondary.s20S1,
        medalBorder: Colours.products.fib.commonBorder2,
        certificateBackground: Colours.products.fib.commonCertificate,
        certificatePrimary: Colours.products.fib.commonBorder1,
      };
    default:
      return {
        gradient: [Colours.neutral.white, Colours.neutral.white],
        secondary: Colours.neutral.white,
        border,
        separator,
        shadow,
        solidBorder: Colours.neutral.n800,
        cornerFlower: Colours.neutral.n800,
        cornerFlowerAccent: Colours.neutral.n800,
        concentricCircles: Colours.neutral.n800,
        medalBorder: Colours.neutral.n800,
        certificateBackground: Colours.neutral.n800,
        certificatePrimary: Colours.neutral.white,
      };
  }
};

const getSeparatorColor = (coverType: CoverType) => {
  switch (coverType) {
    case CoverType.Common: {
      const common1 = Colours.hexToRGB(Colours.secondary.s30S1);
      const common2 = Colours.hexToRGB(Colours.products.fib.common);
      const commons1 = `rgba(${common1.r}, ${common1.g}, ${common1.b}, 0.6)`;
      const commons2 = `rgba(${common2.r}, ${common2.g}, ${common2.b}, 0.6)`;

      return [commons1, commons2, commons1];
    }

    case CoverType.Epic: {
      const epic = Colours.hexToRGB(Colours.products.fib.epic);
      const epics1 = `rgba(${epic.r}, ${epic.g}, ${epic.b}, 0.15)`;
      const epics2 = `rgba(${epic.r}, ${epic.g}, ${epic.b}, 0.6)`;

      return [epics1, epics2, epics1];
    }

    case CoverType.Rare: {
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
    case CoverType.Common: {
      const common1 = Colours.borders.commonGreen1;
      const common2 = Colours.borders.commonGreen2;

      return [common1, common2];
    }

    case CoverType.Epic: {
      const epic1 = Colours.borders.epicPurple1;
      const epic2 = Colours.borders.epicPurple2;

      return [epic1, epic2];
    }

    case CoverType.Rare: {
      const rare1 = Colours.borders.rareBlue1;
      const rare2 = Colours.borders.rareBlue2;

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
    case CoverType.Common: {
      const common = Colours.hexToRGB(Colours.products.fib.common);
      const commonShadow = `rgba(${common.r}, ${common.g}, ${common.b}, 0.08)`;

      return commonShadow;
    }

    case CoverType.Epic: {
      const epic = Colours.hexToRGB(Colours.products.fib.epic);
      const epicShadow = `rgba(${epic.r}, ${epic.g}, ${epic.b}, 0.08)`;

      return epicShadow;
    }

    case CoverType.Rare: {
      const rare = Colours.hexToRGB(Colours.products.fib.rare);
      const rareShadow = `rgba(${rare.r}, ${rare.g}, ${rare.b}, 0.08)`;

      return rareShadow;
    }

    default: {
      return Colours.overlay.black04;
    }
  }
};

export const mapCoverTypeToColor = (coverType: CoverType) => {
  switch (coverType) {
    case CoverType.Epic:
      return Colours.products.fib.epic;
    case CoverType.Rare:
      return Colours.products.fib.rare;
    case CoverType.Common:
      return Colours.products.fib.common;
    default:
      return Colours.neutral.n800;
  }
};

export const mapCoverTypeToColorTheme = (coverType: CoverType) => {
  switch (coverType) {
    case CoverType.Epic:
      return { primary: Colours.products.fib.epic, secondary: Colours.products.fib.epicLight };
    case CoverType.Rare:
      return { primary: Colours.products.fib.rare, secondary: Colours.products.fib.rareLight };
    case CoverType.Common:
      return { primary: Colours.products.fib.common, secondary: Colours.products.fib.commonLight };
    default:
      return { primary: Colours.neutral.n800, secondary: Colours.neutral.n100 };
  }
};
