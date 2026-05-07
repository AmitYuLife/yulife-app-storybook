/**
 * Web entry point for the YuLife app.
 *
 * Uses the same webpack aliases as Storybook (react-native-web, native module stubs)
 * plus a functional react-native-navigation implementation that renders in the browser.
 */
import React from "react";
import { createRoot } from "react-dom/client";
import { Navigation, NavigationRoot } from "./react-native-navigation";

// Patch Object.assign to handle CSSStyleDeclaration gracefully.
// react-native-svg + reanimated calls Object.assign(element.style, {...})
// with array-indexed properties that CSSStyleDeclaration rejects on web.
const originalAssign = Object.assign;
Object.assign = function (target: any, ...sources: any[]) {
  if (target instanceof CSSStyleDeclaration) {
    for (const source of sources) {
      if (source) {
        for (const key of Object.keys(source)) {
          try {
            target[key] = source[key];
          } catch {}
        }
      }
    }

    return target;
  }

  return originalAssign(target, ...sources);
};

// Import the app's main entry — this registers all screens and fires the
// appLaunched event, which triggers the normal boot flow (Redux hydration,
// API config, setRoot, etc.)
import "../src/main";

// On native, the boot flow is:
//   AppLoading (splash) → saga hydrates API config → setRoot(login or authenticated)
//
// On web, the saga crashes silently because native services aren't available.
// We intercept: after screens are registered and the initial setRoot(AppLoading)
// happens, we directly call setUnauthenticatedRoot to show the login screen.
// If a token exists, we call setAuthenticatedRoot instead.
import { getToken } from "../src/services/storage";
import { setUnauthenticatedRoot, setAuthenticatedRoot } from "../src/navigation/root";
import { region } from "../src/locale";
import { store } from "../src/redux/_core/store";

import { getUserSessionSuccess, refreshUserProfileEvents } from "../src/redux/user/user.actions";
import { setAuthenticated } from "../src/redux/app/app.actions";

// Monitor navigation: when setRoot is called with AppLoading, wait briefly for the
// saga to do its thing. If it doesn't navigate away, we take over.
//
// Verified still required: without the redux dispatches below the hero-cards saga
// never fires, so `Purple Voyage` etc. don't render after login.
const originalSetRoot = Navigation.setRoot.bind(Navigation);
let hasNavigatedPastLoading = false;

Navigation.setRoot = (layout) => {
  const result = originalSetRoot(layout);
  const rootName = layout?.root?.component?.name || "";

  if (rootName === "yulife.Loading" && !hasNavigatedPastLoading) {
    // Give the saga a chance (it has a 4s timeout), then take over
    setTimeout(async () => {
      if (!hasNavigatedPastLoading) {
        console.log("[web] Saga didn't navigate — taking over boot flow");
        try {
          await region.hydratePreferredRegion();
          region.setRegion("UK");

          const token = await getToken();
          if (token) {
            store.dispatch(getUserSessionSuccess());
            store.dispatch(setAuthenticated());
            store.dispatch(refreshUserProfileEvents(null));
            await setAuthenticatedRoot();
          } else {
            await setUnauthenticatedRoot({ useNewLoginFlow: true });
          }
        } catch (e) {
          console.error("[web] Failed to set root:", e);
          await setUnauthenticatedRoot({ useNewLoginFlow: true });
        }
      }
    }, 2000);
  } else if (rootName !== "yulife.Loading") {
    hasNavigatedPastLoading = true;
  }

  return result;
};

// ---------------------------------------------------------------------------
// Mount the navigation renderer
// ---------------------------------------------------------------------------

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <NavigationRoot />
    </React.StrictMode>
  );
}
