import { useCallback, useState } from "react";
import { Alert, Linking, Platform } from "react-native";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { t } from "@locale";

const WRITE_PERMISSION =
  Platform.OS === "ios" ? PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;

export function useSaveImage() {
  const [ready, setReady] = useState(true);

  const requestPermissionAndSave = useCallback(async (uri) => {
    const result = await request(WRITE_PERMISSION);

    if (Platform.OS === "android" && result === "blocked") {
      Alert.alert(t("save_image.blocked.title"), t("save_image.blocked.description_android"), [
        {
          text: t("save_image.blocked.cancel_label"),
          style: "cancel",
          onPress: () => setReady(true),
        },
        {
          text: t("save_image.blocked.confirm_label"),
          onPress: Linking.openSettings,
        },
      ]);
      setReady(true);
      return;
    }

    if (result !== "granted") {
      setReady(true);
      return;
    }

    await CameraRoll.save(uri);
    Alert.alert(t("save_image.image_saved.title"), t("save_image.image_saved.description"));
    setReady(true);
  }, []);

  const saveImage = useCallback(
    async (uri: string) => {
      try {
        setReady(false);

        const result = await check(WRITE_PERMISSION);

        switch (result) {
          case RESULTS.UNAVAILABLE:
            Alert.alert(t("save_image.unavailable.title"), t("save_image.unavailable.title"));
            setReady(true);
            break;
          case RESULTS.DENIED:
            Alert.alert(t("save_image.no_permission.title"), t("save_image.no_permission.description"), [
              {
                text: t("save_image.no_permission.cancel_label"),
                style: "cancel",
                onPress: () => setReady(true),
              },
              {
                text: t("save_image.no_permission.confirm_label"),
                onPress: () => requestPermissionAndSave(uri),
              },
            ]);
            break;
          case RESULTS.GRANTED:
          case RESULTS.LIMITED:
            await CameraRoll.save(uri);
            Alert.alert(t("save_image.image_saved.title"), t("save_image.image_saved.description"));
            setReady(true);
            break;
          case RESULTS.BLOCKED:
            Alert.alert(
              t("save_image.blocked.title"),
              t(Platform.OS === "android" ? "save_image.blocked.description_android" : "save_image.blocked.description")
            );
            setReady(true);
            break;
        }
      } catch (e) {
        Alert.alert(
          t("save_image.error.title"),
          t(Platform.OS === "android" ? "save_image.error.description_android" : "save_image.error.description")
        );
        setReady(true);
      }
    },
    [requestPermissionAndSave]
  );

  return {
    ready,
    saveImage,
  };
}
