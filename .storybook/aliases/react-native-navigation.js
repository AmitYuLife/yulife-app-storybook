/* eslint-disable @typescript-eslint/no-empty-function */

export const Navigation = {
  mergeOptions: () => undefined,
  push: () => undefined,
  pop: () => undefined,
  showModal: () => undefined,
  dismissModal: () => undefined,
  dismissAllModals: () => undefined,
  setRoot: () => undefined,
  setStackRoot: () => undefined,
  popToRoot: () => undefined,
  popTo: () => undefined,
  showOverlay: () => undefined,
  dismissOverlay: () => undefined,
  dismissAllOverlays: () => undefined,
  events: () => ({ bindComponent: () => undefined, registerAppLaunchedListener: () => ({ remove: () => undefined }) }),
};

export const OptionsModalPresentationStyle = {
  fullScreen: "fullScreen",
  pageSheet: "pageSheet",
  formSheet: "formSheet",
  overFullScreen: "overFullScreen",
};
