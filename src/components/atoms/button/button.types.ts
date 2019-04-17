export const BUTTON_TYPES: { [name: string]: Types } = {
    PRIMARY: "Primary",
    PRIMARY_MEDIUM: "PrimaryMedium",
    PRIMARY_SMALL: "PrimarySmall",
    PRIMARY_GREYSCALE_SMALL: "PrimaryGreyscaleSmall",
    SECONDARY: "Secondary",
    SECONDARY_MEDIUM: "SecondaryMedium",
    LINK: "Link"
};

export type Types =
    | "Primary"
    | "PrimaryMedium"
    | "PrimarySmall"
    | "PrimaryGreyscaleSmall"
    | "Secondary"
    | "SecondaryMedium"
    | "Link";
