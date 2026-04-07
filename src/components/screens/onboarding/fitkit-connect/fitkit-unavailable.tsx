import React, { memo } from "react";
import { Platform } from "react-native";
import { Box, Pad, TextTemplate } from "@atoms";
import { t } from "@locale";

const FitKitUnavailable = () => (
  <>
    <TextTemplate type="h3" textAlign="center">
      {t("screens.fitkit_connect.unavailable_heading")}
    </TextTemplate>
    <Pad height={14} />
    <Box px={40}>
      <TextTemplate type="l1" textAlign="center">
        {Platform.select({
          android: t("screens.fitkit_connect.unavailable_android"),
          ios: t("screens.fitkit_connect.unavailable_ios"),
        })}
      </TextTemplate>
    </Box>
  </>
);

export default memo(FitKitUnavailable);
