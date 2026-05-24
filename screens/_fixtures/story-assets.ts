/**
 * Canonical remote asset URLs for Storybook screen fixtures.
 *
 * Prefer imgix/CDN URLs from e2e fixtures or production CMS paths over placehold.co.
 * Use `yulife-local.imgix.net` for detox/avatar paths (unsigned develop paths 403 in web Storybook).
 * Use signed `yulife-develop.imgix.net` URLs (with `&s=`) for CMS/reward assets when available.
 *
 * Import from this module in all new screen stories and fixture files.
 */

/** Storybook-safe imgix host for detox avatars and achievement art. */
export const IMGIX_LOCAL = "https://yulife-local.imgix.net";

/** Signed CMS/reward assets from e2e fixtures. */
export const IMGIX_DEVELOP = "https://yulife-develop.imgix.net";

const imgix = (host: string, path: string, params = "ixlib=js-3.2.1&fit=clip&fm=png") => `${host}/${path}?${params}`;

export const imgixLocal = (path: string, params?: string) => imgix(IMGIX_LOCAL, path, params);
export const imgixDevelop = (path: string, params?: string) => imgix(IMGIX_DEVELOP, path, params);

// ── Activity & nudge icons (e2e/_utils/navigation/images/yuscreen_images.ts) ──

export const STORY_YUCOIN_ICON =
  "https://yulife-develop.imgix.net/referral/YuCoin.png?ixlib=js-3.2.1&s=127f8080324e842a2d943842f26e51c7";

export const STORY_STEPS_ICON =
  "https://yulife-develop.imgix.net/yuscreen/maximise-yu/nudges/steps.svg?ixlib=js-3.2.1&w=66&h=66&fit=clip&fm=png&dpr=3&s=dc783945bd7d1dcd94a5a5c4206cfc58";

export const STORY_MEDITATION_ICON =
  "https://yulife-develop.imgix.net/yuscreen/maximise-yu/nudges/meditation.svg?ixlib=js-3.2.1&w=66&h=66&fit=clip&fm=png&dpr=3&s=72a0ee4fddcd3597d8da1f017c8e5e9b";

export const STORY_CALENDAR_ICON =
  "https://yulife-develop.imgix.net/yuscreen/maximise-yu/nudges/calendar.svg?ixlib=js-3.2.1&w=66&h=66&fit=clip&fm=png&dpr=3&s=f7dbc8d46d2723eaca42be6b63507891";

// ── Avatars (e2e detox default male Yumoji) ──

export const STORY_YUMOJI_SVG = imgixLocal("app-system/detox/male-avatar-default.svg", "ixlib=js-3.2.1");

export const STORY_YUMOJI_PNG_FULL = imgixLocal(
  "app-system/detox/male-avatar-default.svg",
  "ixlib=js-3.2.1&fm=png&w=435&h=900"
);

export const STORY_YUMOJI_PNG_MINI = imgixLocal(
  "app-system/detox/male-avatar-default.svg",
  "ixlib=js-3.2.1&fm=png&w=104&h=104&fit=crop"
);

export const STORY_AVATAR_REMOTE_FILES = {
  svgFull: STORY_YUMOJI_SVG,
  pngFull: STORY_YUMOJI_PNG_FULL,
  pngMini: STORY_YUMOJI_PNG_MINI,
};

// ── Reward store images (e2e/yuscreen/yuscreen_v5/_resources/fixtures.ts — signed URLs) ──

export const STORY_REWARD_METLIFE =
  "https://yulife-develop.imgix.net/perks/METLIFE_GP24.png?ixlib=js-3.2.1&fit=clip&fm=png&s=1ddea0de5b993bb05e2e9a04870ff01f";

export const STORY_REWARD_FIIT =
  "https://yulife-develop.imgix.net/cms/1639655759852_Screenshot%202021-12-16%20at%2011.55.50.png?ixlib=js-3.2.1&w=276&h=239.2&crop=fit&fit=clip&fm=png&dpr=3&s=1c5fd23b99f90c0cf32375d4bd750a1b";

export const STORY_REWARD_YUNIVERSITY =
  "https://yulife-develop.imgix.net/cms/1669639176057_Yuniversity@3x.png?ixlib=js-3.2.1&w=276&h=239.2&crop=fit&fit=clip&fm=png&dpr=3&s=423beccd8655b409d6a35a8af434ad1b";

export const STORY_REWARD_BUPA =
  "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/bupa/bupa-ghi-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=ca33d0822995c9d37ad42782febc02b0";

export const STORY_REWARD_BUPA_DENTAL =
  "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/bupa/bupa-dental-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=c5f6727b33849ef9b45859495d362b13";

// ── Battle pass / donation icons (e2e/battle_pass/battle_pass/_resources/constants.ts) ──

export const STORY_DONATION_TREE =
  "https://yulife-develop.imgix.net/game/donations/tree_2024_08_05.svg?ixlib=js-3.2.1&w=88&h=88&fit=clip&fm=png&dpr=3&s=7206050e6b81edf91895a64b9313019c";

export const STORY_DONATION_WATER =
  "https://yulife-develop.imgix.net/game/donations/water_2024_08_05.svg?ixlib=js-3.2.1&w=88&h=88&fit=clip&fm=png&dpr=3&s=2ae92fd7e197dd71cadf265da1d980fe";

export const STORY_DONATION_MEAL =
  "https://yulife-develop.imgix.net/game/donations/meal_2024_08_05.svg?ixlib=js-3.2.1&w=88&h=88&fit=clip&fm=png&dpr=3&s=4e3d9f9cdfb662faa21bf6e71f2321eb";

export const STORY_DONATION_OCEAN =
  "https://yulife-develop.imgix.net/game/donations/ocean_2024_08_05.svg?ixlib=js-3.2.1&w=88&h=88&fit=clip&fm=png&dpr=3&s=a5d486b2ba195b396d03eb2905d55fa1";

export const STORY_BATTLE_PASS_BACKGROUND =
  "https://yulife-develop.imgix.net/referral/background/full-without-clouds/Forest.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=89c39a63e68038928486907012018dab";

export const STORY_WELLBEING_PASS_BACKGROUND =
  "https://yulife-develop.imgix.net/referral/background.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=e796997e07a6b3d5e62bc2eace8ed7ff";

// ── Referrals (e2e/admin/referrals/_resources/fixtures.ts) ──

export const STORY_REFERRAL_BACKGROUND = STORY_WELLBEING_PASS_BACKGROUND;

export const STORY_REFERRAL_BACKGROUND_FOREST = STORY_BATTLE_PASS_BACKGROUND;

// ── Achievements (mock-yu-screen-hero.ts / e2e game_achievements) ──

export const STORY_ACHIEVEMENT_ENDURING_WANDERER = imgixLocal("achievements/unlocked/enduring-wanderer-15-07-25.png");

export const STORY_ACHIEVEMENT_ZENITH_BG = imgixLocal(
  "achievements/backgrounds/yudoku-workout-background-05-08-25.png"
);

// ── YuScreen / perks (e2e/yuscreen/yuscreen_v5/_resources/fixtures.ts) ──

export const STORY_YUMOJI_PROMPT_ILLUSTRATION =
  "https://yulife-develop.imgix.net/content/icons/yumojis.svg?ixlib=js-3.2.1&w=192&h=192&s=d94c9a0b897fae56df13ee23db3b7e8d";

export const STORY_WELLBEING_HUB_YU_MATTER =
  "https://yulife-develop.imgix.net/wellbeing_hub/yu-matter.png?ixlib=js-3.2.1&fit=clip&fm=png&s=b1127559c64c08bc138f7a02d0faa2f2";

// ── Leaderboard tab icons ──

export const STORY_LEADERBOARD_STEPS_ICON = STORY_STEPS_ICON;
export const STORY_LEADERBOARD_SUDOKU_ICON = STORY_CALENDAR_ICON;
