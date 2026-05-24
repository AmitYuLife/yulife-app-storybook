import type { Source } from "@atoms";
import { getTheme } from "@theme";
import type { IThemeScreens } from "@theme/theme.types";
import { normalizeImageSource } from "@utils/normalize-image-source";
import type { IQuestMapItem } from "@components/containers/member/quests/quest-map/quest-map.interface";
import { buildQuestMapItems } from "../_fixtures/mock-quest-map";

const withWebImageSource = (source: Source): Source => normalizeImageSource(source) as Source;

/**
 * Normalizes a bundled image source (webpack URL string → `{ uri }` object) for
 * use directly in story fixture data.  Numeric require() IDs (native builds) pass
 * through unchanged, so this is safe to call in shared test/story files.
 */
export const normalizeBundledSource = (source: unknown): Source => normalizeImageSource(source) as Source;

/**
 * Maps Lottie JSON asset filename substrings to companion static PNG paths served
 * by Storybook.  Used by the lottie-react-native alias to show a PNG fallback
 * when the real Lottie player cannot render the animation.
 *
 * Only assets that have an actual `.png` companion in `assets/yuniversal/` are
 * listed here.  `yuniversal_quest_map_1.json` has no PNG sibling so it is absent.
 */
export const LOTTIE_PNG_FALLBACKS: Record<string, string> = {
  yuniversal_1: "/assets/yuniversal/yuniversal_1.png",
};

/** Theme from `getTheme()` with image sources shaped for Storybook web rendering. */
export const themeForStory = (currentLevel: number, yuniversalMap = 0): IThemeScreens => {
  const theme = getTheme(currentLevel, yuniversalMap);

  return {
    ...theme,
    dailyStepsScreen: {
      ...theme.dailyStepsScreen,
      online: {
        ...theme.dailyStepsScreen.online,
        backgroundImage: withWebImageSource(theme.dailyStepsScreen.online.backgroundImage),
      },
    },
    challengeListScreen: {
      ...theme.challengeListScreen,
      backgroundImage: withWebImageSource(theme.challengeListScreen.backgroundImage),
    },
    offlineScreen: {
      ...theme.offlineScreen,
      backgroundImage: withWebImageSource(theme.offlineScreen.backgroundImage),
    },
    challengeSuccessScreen: {
      ...theme.challengeSuccessScreen,
      backgroundImage: withWebImageSource(theme.challengeSuccessScreen.backgroundImage),
    },
    challengeFailedScreen: {
      ...theme.challengeFailedScreen,
      backgroundImage: withWebImageSource(theme.challengeFailedScreen.backgroundImage),
    },
  };
};

/**
 * Returns quest map items for Storybook screen stories.
 * Background sources are normalized at render time in quest-map-episode.tsx.
 */
export const questMapItemsForStory = (currentLevel = 10): IQuestMapItem[] => buildQuestMapItems(currentLevel);
