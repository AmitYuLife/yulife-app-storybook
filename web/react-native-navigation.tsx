/**
 * Web implementation of react-native-navigation (Wix RNN).
 *
 * This replaces the native navigation with a React-based navigation system
 * that runs in the browser. It implements the same API surface that the app uses
 * so that `src/navigation/main.ts` works unchanged.
 */
import React, { ComponentType, useEffect, useSyncExternalStore } from "react";
import { createRoot, Root } from "react-dom/client";

// ---------------------------------------------------------------------------
// Types (mirrors RNN types used by the app)
// ---------------------------------------------------------------------------

export enum OptionsModalPresentationStyle {
  formSheet = "formSheet",
  pageSheet = "pageSheet",
  overFullScreen = "overFullScreen",
  overCurrentContext = "overCurrentContext",
  currentContext = "currentContext",
  popover = "popover",
  fullScreen = "fullScreen",
  none = "none",
}

type ComponentLayout = {
  id?: string;
  name?: string;
  passProps?: Record<string, any>;
  options?: any;
};

type StackLayout = {
  children?: LayoutItem[];
  options?: any;
};

type BottomTabsLayout = {
  children?: LayoutItem[];
  options?: any;
};

type SideMenuLayout = {
  center?: LayoutItem;
  left?: LayoutItem;
  right?: LayoutItem;
  options?: any;
};

type LayoutItem = {
  component?: ComponentLayout;
  stack?: StackLayout;
  bottomTabs?: BottomTabsLayout;
  sideMenu?: SideMenuLayout;
};

type LayoutRoot = {
  root: LayoutItem;
};

type Layout<P = any> = LayoutItem;

type Options = Record<string, any>;

// ---------------------------------------------------------------------------
// Component Registry
// ---------------------------------------------------------------------------

const componentRegistry = new Map<string, ComponentType<any>>();

// ---------------------------------------------------------------------------
// Navigation State
// ---------------------------------------------------------------------------

type StackEntry = {
  id: string;
  name: string;
  passProps: Record<string, any>;
};

type NavState = {
  rootLayout: LayoutRoot | null;
  tabStacks: StackEntry[][];
  activeTabIndex: number;
  modalStack: StackEntry[];
  overlayStack: StackEntry[];
  sideMenuVisible: boolean;
  sideMenuComponent: string | null;
};

let navState: NavState = {
  rootLayout: null,
  tabStacks: [],
  activeTabIndex: 0,
  modalStack: [],
  overlayStack: [],
  sideMenuVisible: false,
  sideMenuComponent: null,
};

// For single-stack roots (login, offline, etc.)
let singleStack: StackEntry[] = [];
let isSingleStackRoot = false;

const listeners = new Set<() => void>();

function getSnapshot(): NavState {
  return navState;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function notify() {
  // Create new reference so useSyncExternalStore detects change
  navState = { ...navState };
  listeners.forEach((l) => l());
}

// ---------------------------------------------------------------------------
// Event System
// ---------------------------------------------------------------------------

type AppLaunchedCallback = () => void;
type ComponentDidAppearCallback = (event: { componentId: string; componentName: string }) => void;
type ComponentDidDisappearCallback = (event: { componentId: string; componentName: string }) => void;

const appLaunchedCallbacks: AppLaunchedCallback[] = [];
const componentDidAppearCallbacks: ComponentDidAppearCallback[] = [];
const componentDidDisappearCallbacks: ComponentDidDisappearCallback[] = [];

// Track component props for updateProps
const componentPropsMap = new Map<string, Record<string, any>>();

// ---------------------------------------------------------------------------
// Layout Parsing Helpers
// ---------------------------------------------------------------------------

function extractStackEntries(stack: StackLayout | undefined): StackEntry[] {
  if (!stack?.children) return [];
  return stack.children
    .filter((child) => child.component)
    .map((child) => ({
      id: child.component!.id || child.component!.name || "",
      name: child.component!.name || "",
      passProps: child.component!.passProps || {},
    }));
}

function parseRootLayout(layout: LayoutRoot) {
  const root = layout.root;

  // Case 1: sideMenu > center > bottomTabs (authenticated)
  if (root.sideMenu) {
    const sideMenu = root.sideMenu;
    const menuComponent = sideMenu.left?.component?.name || sideMenu.right?.component?.name || null;

    const center = sideMenu.center;
    if (center?.bottomTabs?.children) {
      isSingleStackRoot = false;
      const tabs = center.bottomTabs.children;
      navState.tabStacks = tabs.map((tab) => {
        if (tab.stack) {
          return extractStackEntries(tab.stack);
        }
        if (tab.component) {
          return [
            {
              id: tab.component.id || tab.component.name || "",
              name: tab.component.name || "",
              passProps: tab.component.passProps || {},
            },
          ];
        }
        return [];
      });
      navState.activeTabIndex = 0;
      navState.sideMenuComponent = menuComponent;
      navState.sideMenuVisible = false;
      return;
    }
  }

  // Case 2: bottomTabs at root
  if (root.bottomTabs?.children) {
    isSingleStackRoot = false;
    const tabs = root.bottomTabs.children;
    navState.tabStacks = tabs.map((tab) => {
      if (tab.stack) return extractStackEntries(tab.stack);
      if (tab.component) {
        return [
          {
            id: tab.component.id || tab.component.name || "",
            name: tab.component.name || "",
            passProps: tab.component.passProps || {},
          },
        ];
      }
      return [];
    });
    navState.activeTabIndex = 0;
    return;
  }

  // Case 3: Single stack (login, offline, update, etc.)
  if (root.stack) {
    isSingleStackRoot = true;
    singleStack = extractStackEntries(root.stack);
    navState.tabStacks = [];
    return;
  }

  // Case 4: Single component
  if (root.component) {
    isSingleStackRoot = true;
    singleStack = [
      {
        id: root.component.id || root.component.name || "",
        name: root.component.name || "",
        passProps: root.component.passProps || {},
      },
    ];
    navState.tabStacks = [];
    return;
  }
}

// Find which tab stack contains a given componentId
function findStackForComponent(componentId: string): StackEntry[] | null {
  // Check single stack
  if (isSingleStackRoot) {
    if (singleStack.some((e) => e.id === componentId)) return singleStack;
    // If not found but we're in single stack mode, return it anyway
    return singleStack;
  }

  // Check tab stacks
  for (const stack of navState.tabStacks) {
    if (stack.some((e) => e.id === componentId)) return stack;
  }

  // Fallback: return current active tab stack
  return navState.tabStacks[navState.activeTabIndex] || null;
}

// ---------------------------------------------------------------------------
// Navigation API
// ---------------------------------------------------------------------------

export const Navigation = {
  registerComponent(
    componentName: string | number,
    componentProvider: () => ComponentType<any>,
    _concreteComponentProvider?: () => ComponentType<any>
  ) {
    try {
      componentRegistry.set(String(componentName), componentProvider());
    } catch (e) {
      console.warn("[web-nav] Failed to register component:", componentName, e);
    }
  },

  setRoot(layout: LayoutRoot): Promise<string> {
    console.log("[web-nav] setRoot called", JSON.stringify(layout).substring(0, 200));
    navState.modalStack = [];
    navState.overlayStack = [];
    parseRootLayout(layout);
    navState.rootLayout = layout;
    notify();
    return Promise.resolve("root");
  },

  setDefaultOptions(_options: Options) {
    // No-op on web — native options like status bar, animations, etc.
  },

  mergeOptions(componentId: string, options: Options) {
    // Handle tab switching
    if (options.bottomTabs?.currentTabIndex !== undefined) {
      navState.activeTabIndex = options.bottomTabs.currentTabIndex;
      notify();
    }

    // Handle side menu
    if (options.sideMenu) {
      const left = options.sideMenu.left;
      const right = options.sideMenu.right;
      const side = left || right;
      if (side) {
        if (side.visible !== undefined) {
          navState.sideMenuVisible = side.visible;
          notify();
        }
      }
    }
  },

  updateProps(componentId: string, props: Record<string, any>) {
    const existing = componentPropsMap.get(componentId) || {};
    componentPropsMap.set(componentId, { ...existing, ...props });
    notify();
  },

  push<P>(componentId: string, layout: Layout<P>): Promise<string> {
    const comp = layout.component;
    if (!comp) return Promise.resolve("");

    const entry: StackEntry = {
      id: comp.id || comp.name || "",
      name: comp.name || "",
      passProps: comp.passProps || {},
    };

    const stack = findStackForComponent(componentId);
    if (stack) {
      stack.push(entry);
      notify();
    }

    return Promise.resolve(entry.id);
  },

  pop(componentId: string, _mergeOptions?: Options): Promise<string> {
    const stack = findStackForComponent(componentId);
    if (stack && stack.length > 1) {
      stack.pop();
      notify();
    }
    return Promise.resolve(componentId);
  },

  popTo(componentId: string, _mergeOptions?: Options): Promise<string> {
    const stack = findStackForComponent(componentId);
    if (stack) {
      const idx = stack.findIndex((e) => e.id === componentId);
      if (idx >= 0) {
        stack.splice(idx + 1);
        notify();
      }
    }
    return Promise.resolve(componentId);
  },

  popToRoot(componentId: string, _mergeOptions?: Options): Promise<string> {
    const stack = findStackForComponent(componentId);
    if (stack && stack.length > 1) {
      stack.splice(1);
      notify();
    }
    return Promise.resolve(componentId);
  },

  setStackRoot<P>(componentId: string, layout: Layout<P> | Array<Layout<P>>): Promise<string> {
    const layouts = Array.isArray(layout) ? layout : [layout];
    const entries = layouts
      .filter((l) => l.component)
      .map((l) => ({
        id: l.component!.id || l.component!.name || "",
        name: l.component!.name || "",
        passProps: l.component!.passProps || {},
      }));

    const stack = findStackForComponent(componentId);
    if (stack) {
      stack.splice(0, stack.length, ...entries);
      notify();
    }

    return Promise.resolve(entries[0]?.id || "");
  },

  showModal<P>(layout: Layout<P>): Promise<string> {
    // Modal can be a stack or a component
    let entry: StackEntry;
    if (layout.stack?.children?.[0]?.component) {
      const comp = layout.stack.children[0].component;
      entry = {
        id: comp.id || comp.name || "",
        name: comp.name || "",
        passProps: comp.passProps || {},
      };
    } else if (layout.component) {
      entry = {
        id: layout.component.id || layout.component.name || "",
        name: layout.component.name || "",
        passProps: layout.component.passProps || {},
      };
    } else {
      return Promise.resolve("");
    }

    navState.modalStack.push(entry);
    notify();
    return Promise.resolve(entry.id);
  },

  dismissModal(componentId: string, _mergeOptions?: Options): Promise<string> {
    navState.modalStack = navState.modalStack.filter((m) => m.id !== componentId);
    notify();
    return Promise.resolve(componentId);
  },

  dismissAllModals(_mergeOptions?: Options): Promise<string> {
    navState.modalStack = [];
    notify();
    return Promise.resolve("");
  },

  showOverlay<P>(layout: Layout<P>): Promise<string> {
    const comp = layout.component;
    if (!comp) return Promise.resolve("");

    const entry: StackEntry = {
      id: comp.id || comp.name || "",
      name: comp.name || "",
      passProps: comp.passProps || {},
    };

    navState.overlayStack.push(entry);
    notify();
    return Promise.resolve(entry.id);
  },

  dismissOverlay(componentId: string): Promise<string> {
    navState.overlayStack = navState.overlayStack.filter((o) => o.id !== componentId);
    notify();
    return Promise.resolve(componentId);
  },

  dismissAllOverlays(): Promise<string> {
    navState.overlayStack = [];
    notify();
    return Promise.resolve("");
  },

  events() {
    return {
      registerAppLaunchedListener(callback: AppLaunchedCallback) {
        appLaunchedCallbacks.push(callback);
        // Fire immediately on next tick (simulates app launch)
        setTimeout(() => callback(), 0);
        return { remove: () => {} };
      },
      registerComponentDidAppearListener(callback: ComponentDidAppearCallback) {
        componentDidAppearCallbacks.push(callback);
        return { remove: () => {} };
      },
      registerComponentDidDisappearListener(callback: ComponentDidDisappearCallback) {
        componentDidDisappearCallbacks.push(callback);
        return { remove: () => {} };
      },
      registerModalDismissedListener(_callback: any) {
        return { remove: () => {} };
      },
      registerBottomTabSelectedListener(_callback: any) {
        return { remove: () => {} };
      },
      registerNavigationButtonPressedListener(_callback: any) {
        return { remove: () => {} };
      },
      registerScreenPoppedListener(_callback: any) {
        return { remove: () => {} };
      },
      registerCommandListener(_callback: any) {
        return { remove: () => {} };
      },
      registerCommandCompletedListener(_callback: any) {
        return { remove: () => {} };
      },
      bindComponent(_component: any) {
        return { remove: () => {} };
      },
    };
  },

  constants() {
    return Promise.resolve({
      statusBarHeight: 0,
      topBarHeight: 0,
      bottomTabsHeight: 56,
    });
  },

  constantsSync() {
    return {
      statusBarHeight: 0,
      topBarHeight: 0,
      bottomTabsHeight: 56,
    };
  },
};

// ---------------------------------------------------------------------------
// Tab Labels (for the bottom tab bar)
// ---------------------------------------------------------------------------

const TAB_LABELS = ["Steps", "Quests", "YuScreen", "Leaderboard", "Rewards"];
const TAB_ICONS = ["👟", "⚔️", "🏠", "🏆", "🎁"];

// ---------------------------------------------------------------------------
// React Components for Rendering
// ---------------------------------------------------------------------------

function RenderComponent({ entry }: { entry: StackEntry }) {
  const Component = componentRegistry.get(entry.name);
  if (!Component) {
    return (
      <div style={{ padding: 20, color: "#999", textAlign: "center" as const }}>
        <p>Component not registered: <code>{entry.name}</code></p>
      </div>
    );
  }

  const dynamicProps = componentPropsMap.get(entry.id) || {};

  return <Component componentId={entry.id} {...entry.passProps} {...dynamicProps} />;
}

function BottomTabBar({
  activeIndex,
  onTabPress,
}: {
  activeIndex: number;
  onTabPress: (index: number) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row" as const,
        borderTop: "1px solid #e0e0e0",
        backgroundColor: "#fff",
        height: 56,
        flexShrink: 0,
      }}
    >
      {TAB_LABELS.map((label, i) => (
        <button
          key={label}
          onClick={() => onTabPress(i)}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            background: "none",
            cursor: "pointer",
            color: i === activeIndex ? "#6C63FF" : "#999",
            fontSize: 10,
            fontWeight: i === activeIndex ? 600 : 400,
            padding: 4,
            transition: "color 0.2s",
          }}
        >
          <span style={{ fontSize: 20, marginBottom: 2 }}>{TAB_ICONS[i]}</span>
          {label}
        </button>
      ))}
    </div>
  );
}

function SideMenu({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const menuName = navState.sideMenuComponent;
  if (!visible || !menuName) return null;

  const MenuComponent = componentRegistry.get(menuName);

  return (
    <div
      style={{
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 900,
        display: "flex",
      }}
    >
      <div
        style={{
          position: "absolute" as const,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: "relative",
          width: "85%",
          maxWidth: 360,
          height: "100%",
          backgroundColor: "#fff",
          boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
          overflow: "auto" as const,
        }}
      >
        {MenuComponent ? <MenuComponent componentId="yulife.menu" /> : null}
      </div>
    </div>
  );
}

function ModalLayer() {
  if (navState.modalStack.length === 0) return null;

  return (
    <>
      {navState.modalStack.map((entry) => (
        <div
          key={entry.id}
          style={{
            position: "fixed" as const,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              maxWidth: 500,
              backgroundColor: "#fff",
              overflow: "auto" as const,
            }}
          >
            <RenderComponent entry={entry} />
          </div>
        </div>
      ))}
    </>
  );
}

function OverlayLayer() {
  if (navState.overlayStack.length === 0) return null;

  return (
    <>
      {navState.overlayStack.map((entry) => (
        <div
          key={entry.id}
          style={{
            position: "fixed" as const,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1100,
          }}
        >
          <RenderComponent entry={entry} />
        </div>
      ))}
    </>
  );
}

// ---------------------------------------------------------------------------
// Main Navigation Renderer
// ---------------------------------------------------------------------------

export function NavigationRoot() {
  const state = useSyncExternalStore(subscribe, getSnapshot);

  const handleTabPress = (index: number) => {
    navState.activeTabIndex = index;
    notify();
  };

  const handleCloseSideMenu = () => {
    navState.sideMenuVisible = false;
    notify();
  };

  // No root set yet — show loading
  if (!state.rootLayout) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "system-ui, sans-serif",
          color: "#666",
        }}
      >
        Loading...
      </div>
    );
  }

  // Single stack mode (login, offline, etc.)
  if (isSingleStackRoot) {
    const topEntry = singleStack[singleStack.length - 1];
    if (!topEntry) return null;

    return (
      <div style={{ display: "flex", flexDirection: "column" as const, height: "100vh" }}>
        <div style={{ flex: 1, overflow: "auto" as const }}>
          {singleStack.length > 1 && (
            <button
              onClick={() => {
                singleStack.pop();
                notify();
              }}
              style={{
                position: "absolute" as const,
                top: 12,
                left: 12,
                zIndex: 10,
                background: "rgba(0,0,0,0.05)",
                border: "none",
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              Back
            </button>
          )}
          <RenderComponent entry={topEntry} />
        </div>
        <ModalLayer />
        <OverlayLayer />
      </div>
    );
  }

  // Tab-based mode (authenticated)
  const currentStack = state.tabStacks[state.activeTabIndex] || [];
  const topEntry = currentStack[currentStack.length - 1];

  return (
    <div style={{ display: "flex", flexDirection: "column" as const, height: "100vh" }}>
      <div style={{ flex: 1, overflow: "auto" as const, position: "relative" as const }}>
        {currentStack.length > 1 && (
          <button
            onClick={() => {
              currentStack.pop();
              notify();
            }}
            style={{
              position: "absolute" as const,
              top: 12,
              left: 12,
              zIndex: 10,
              background: "rgba(0,0,0,0.05)",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Back
          </button>
        )}
        {topEntry ? <RenderComponent entry={topEntry} /> : null}
      </div>
      <SideMenu visible={state.sideMenuVisible} onClose={handleCloseSideMenu} />
      <ModalLayer />
      <OverlayLayer />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Exports matching RNN's export shape
// ---------------------------------------------------------------------------

export default { Navigation, OptionsModalPresentationStyle };

// Expose for vibes tests so they can drive navigation directly without clicking through
// onboarding overlays / SDUI saga chains.
if (typeof window !== "undefined") {
  (window as unknown as { __NAV: typeof Navigation }).__NAV = Navigation;
}
