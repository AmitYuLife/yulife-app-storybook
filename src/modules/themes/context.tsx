import { createContext, memo, ReactNode, useContext } from "react";
import { GetMobileGameThemeQuery, GetWellbeingHubItemsQuery } from "@graphql/__generated";

// Sourced from the sections of feature specific themes
// e.g wellbeing-hub
export type ThemeOverride =
  | NonNullable<GetWellbeingHubItemsQuery["theme"]>
  | GetMobileGameThemeQuery["getMobileGameTheme"];

/**
 * Overrides `useTheme()` for the wrapped subtree. Pass `null`/`undefined`
 * to fall through to the user's theme (e.g. while loading). *
 * @example
 *   <ThemeOverrideProvider theme={data?.theme}>
 *     <WellBeingHub ... />
 *   </ThemeOverrideProvider>
 */
export const ThemeOverrideContext = createContext<ThemeOverride | null>(null);

export const useThemeOverride = () => useContext(ThemeOverrideContext);

interface IThemeOverrideProviderProps {
  theme: ThemeOverride | null | undefined;
  children: ReactNode;
}

const ThemeOverrideProvider = ({ theme, children }: IThemeOverrideProviderProps) => (
  <ThemeOverrideContext value={theme ?? null}>{children}</ThemeOverrideContext>
);

export default memo(ThemeOverrideProvider);
