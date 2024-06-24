import { createAction } from "@reduxjs/toolkit";

export const UPDATE_IS_SWITCHING_LOCALE = "UPDATE_IS_SWITCHING_LOCALE";

export const updateIsSwitchingLocale = createAction<boolean, typeof UPDATE_IS_SWITCHING_LOCALE>(
  UPDATE_IS_SWITCHING_LOCALE
);
