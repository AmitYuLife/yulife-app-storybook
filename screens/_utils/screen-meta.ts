import type { Meta } from "@storybook/react-webpack5";

type ScreenMetaOptions<T> = {
  /** Storybook path segment after `Screens/`, e.g. `Auth/LoginEmail`. */
  title: string;
  /** Plain-English description for humans and LLMs. */
  description: string;
  /** Presentational screen component from `@screens` or a relative import. */
  component: T;
  /** Navigation route ID from `src/navigation/constants.ts`, when registered. */
  route?: string;
  /** Source path to the `.screen.tsx` file, relative to repo root. */
  screenPath: string;
};

export const createScreenMeta = <T>({
  title: _title,
  description,
  component,
  route,
  screenPath,
}: ScreenMetaOptions<T>): Meta<T> => ({
  component,
  tags: ["autodocs"],
  parameters: {
    screenStory: true,
    layout: "fullscreen",
    docs: {
      description: {
        component: [
          description,
          "",
          route ? `**Route:** \`${route}\`` : "",
          `**Source:** \`${screenPath}\``,
          "",
          "**Story pattern:** Presentational screen only — props are mocked here. Containers wire Redux, Apollo, and navigation in the app.",
          "",
          "**Assets:** Use imgix/CDN URLs from `screens/_fixtures/story-assets.ts` (or bundled assets via `themeForStory` / `normalizeBundledSource`). Do not use placehold.co for new screen stories.",
        ]
          .filter(Boolean)
          .join("\n"),
      },
    },
  },
});
