import { type ComponentType, type ReactElement, type ReactNode, useMemo } from "react";
import { Provider } from "react-redux";
import { createStoryStore } from "../../.storybook/story-store";

type StoreOverrides = Parameters<typeof createStoryStore>[0];

const PreloadedStoreProvider = ({ overrides, children }: { overrides: StoreOverrides; children: ReactNode }) => {
  const store = useMemo(() => createStoryStore(overrides), [overrides]);

  return <Provider store={store}>{children}</Provider>;
};

/**
 * Storybook decorator that wraps the story in a fresh Redux Provider with the
 * given preloaded state. Use for screens that read Redux state not present in
 * the shared storyStore singleton (e.g. yuScreen sections, levels).
 *
 * Prefer `parameters.preloadedState` with the screen preview decorator when
 * possible — it shares a stable store instance per story id.
 */
export const withPreloadedStore =
  (overrides: StoreOverrides) =>
  (Story: ComponentType): ReactElement =>
    (
      <PreloadedStoreProvider overrides={overrides}>
        <Story />
      </PreloadedStoreProvider>
    );
