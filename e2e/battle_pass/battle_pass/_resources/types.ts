export type IMPACT_DONATION = "tree" | "water" | "meal" | "ocean";

export interface EndOfSeasonItem {
  type: IMPACT_DONATION;
  title: string;
  score: string;
}

export type EndOfSeasonItems = EndOfSeasonItem[];
