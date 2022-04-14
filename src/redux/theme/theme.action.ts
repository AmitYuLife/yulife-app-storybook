export const CHANGE_PANEL_VISIBILITY = "CHANGE_PANEL_VISIBILITY";

export const changePanelVisibility = (payload: boolean) => ({
  type: CHANGE_PANEL_VISIBILITY,
  payload,
});
