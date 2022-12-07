import { ComponentProvider } from "react-native";
import { Layout, LayoutRoot, Navigation as NativeNavigation, Options } from "react-native-navigation";

export class Navigation {
  public static setRoot = async (layout: LayoutRoot) => {
    return NativeNavigation.setRoot(layout);
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

  public static mergeOptions = async (componentId: string, options: Options) => {
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
}
