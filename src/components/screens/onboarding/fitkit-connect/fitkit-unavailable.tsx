import React, { memo } from "react";
import { Platform } from "react-native";
import { Blurb, Heading, Pad } from "@atoms";
import { t } from "@locale";

const FitKitUnavailable = () => (
  <>
    <Heading label={t("screens.fitkit_connect.unavailable_heading")} />
    <Pad height={14} />
    <Blurb
      label={Platform.select({
        android: t("screens.fitkit_connect.unavailable_android"),
        ios: t("screens.fitkit_connect.unavailable_ios"),
      })}
    />
  </>
);

export default memo(FitKitUnavailable);
