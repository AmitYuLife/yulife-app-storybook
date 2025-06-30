import Logger from "@services/logging/logger";
import { ReactElement } from "react";
import { ComponentProvider, ViewStyle } from "react-native";
import { Layout, LayoutRoot, Navigation as NativeNavigation, Options } from "react-native-navigation";
import { MODALS, ROUTES } from "./constants";
import { getRNNStatusBarStyle } from "@styles/status-bar.styles";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";

const BLURRED_OVERLAY_COMPONENT_ID = MODALS.blurredOverlay;

type NavigationShowOverlayWithChildArgs = {
  children: ReactElement;
  withBlurBackground?: boolean;
  wrapperStyle?: ViewStyle;
  modalId?: string;
  closeOnBlur?: boolean;
  onClose?: VoidFunctionOrSduiActionPayload;
  passProps?: Record<string, unknown>;
};

export class Navigation {
  /** Makes the specified routes(tabs) as inaccessible */
  public static SUSPENDED_NAV_BAR_ROUTES: Set<string> = new Set([]);

  public static setAppLoading = async (loadingText?: string) => {
    await Navigation.setRoot({
      root: {
        component: {
          id: ROUTES.appLoading,
          name: ROUTES.appLoading,
          passProps: {
            loadingText,
          },
          options: {
            statusBar: getRNNStatusBarStyle(),
          },
        },
      },
    });
  };

  public static setRoot = async (layout: LayoutRoot) => {
    return NativeNavigation.setRoot(layout);
  };

  public static updateProps = async (componentId: string, props: object) => {
    return NativeNavigation.updateProps(componentId, props);
  };

  public static events = () => {
    return NativeNavigation.events();
  };

  public static setDefaultOptions = (options: Options) => {
    NativeNavigation.setDefaultOptions(options);
  };

  public static registerComponent = (
    componentName: string | number,
    componentProvider: ComponentProvider,
    concreteComponentProvider?: ComponentProvider
  ) => {
    NativeNavigation.registerComponent(componentName, componentProvider, concreteComponentProvider);
  };

  public static setBlackListedNavBarRoutes = (componentIds: string[]) => {
    Navigation.SUSPENDED_NAV_BAR_ROUTES = new Set(componentIds);
  };

  public static isNavBarRouteSuspended = (componentId: string) => this.SUSPENDED_NAV_BAR_ROUTES.has(componentId);

  public static mergeOptions = async (componentId: string, options: Options) => {
    if (Navigation.isNavBarRouteSuspended(componentId)) {
      return;
    }

    return NativeNavigation.mergeOptions(componentId, options);
  };

  public static showModal = async <P>(layout: Layout<P>) => {
    return NativeNavigation.showModal(layout);
  };

  public static dismissModal = async (componentId: string, mergeOptions?: Options) => {
    return NativeNavigation.dismissModal(componentId, mergeOptions);
  };

  public static dismissAllModals = async (mergeOptions?: Options) => {
    return NativeNavigation.dismissAllModals(mergeOptions);
  };

  public static push = async <P>(componentId: string, layout: Layout<P>) => {
    return NativeNavigation.push(componentId, layout);
  };

  public static pop = async (componentId: string, mergeOptions?: Options) => {
    return NativeNavigation.pop(componentId, mergeOptions);
  };

  public static popTo = async (componentId: string, mergeOptions?: Options) => {
    return NativeNavigation.popTo(componentId, mergeOptions);
  };

  public static popToRoot = async (componentId: string, mergeOptions?: Options) => {
    return NativeNavigation.popToRoot(componentId, mergeOptions);
  };

  public static setStackRoot = async <P>(componentId: string, layout: Layout<P> | Array<Layout<P>>) => {
    return NativeNavigation.setStackRoot(componentId, layout);
  };

  public static showOverlay = async <P>(layout: Layout<P>) => {
    return NativeNavigation.showOverlay(layout);
  };

  public static dismissOverlay = async (componentId: string) => {
    return NativeNavigation.dismissOverlay(componentId);
  };

  public static dismissAllOverlays = async () => {
    return NativeNavigation.dismissAllOverlays();
  };

  public static showOverlayWithChild({
    children,
    withBlurBackground = true,
    wrapperStyle,
    modalId,
    closeOnBlur,
    onClose,
    passProps,
  }: NavigationShowOverlayWithChildArgs) {
    if (modalId) {
      Logger.logEvent("screen_view", { name: modalId });
    }

    return NativeNavigation.showOverlay({
      component: {
        id: BLURRED_OVERLAY_COMPONENT_ID,
        name: BLURRED_OVERLAY_COMPONENT_ID,
        options: {
          layout: {
            componentBackgroundColor: "transparent",
          },
          overlay: {
            interceptTouchOutside: true,
          },
        },
        passProps: {
          ...(passProps || {}),
          children,
          withBlurBackground,
          wrapperStyle,
          closeOnBlur,
          onClose,
        },
      },
    });
  }
  public static dismissOverlayWithChild() {
    return NativeNavigation.dismissOverlay(BLURRED_OVERLAY_COMPONENT_ID);
  }
}
