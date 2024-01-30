import { useCallback, useState } from "react";
import { Alert, Linking, Platform } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { t } from "@locale";

const WRITE_PERMISSION =
  Platform.OS === "ios" ? PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;

export function useSaveImage() {
  const [ready, setReady] = useState(true);

  const requestPermissionAndSave = useCallback(async (uri: string) => {
    const result = await request(WRITE_PERMISSION);

    if (Platform.OS === "android" && result === "blocked") {
      Alert.alert(t("save_image.blocked.title"), t("save_image.blocked.description_android"), [
        {
          text: t("labels.cta.cancel"),
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

    await MediaLibrary.saveToLibraryAsync(uri);
    Alert.alert(t("save_image.image_saved.title"), t("save_image.image_saved.description"));
    setReady(true);
  }, []);

  const saveImage = useCallback(
    async (uri: string) => {
      try {
        setReady(false);

        let result = await check(WRITE_PERMISSION);

        // In Android 11 (API 30) WRITE_EXTERNAL_STORAGE does not provide any additional functionality
        // and its permission request will always be blocked when checked
        // https://stackoverflow.com/questions/73620790/android-13-how-to-request-write-external-storage
        if (Platform.OS === "android" && Platform.Version >= 30) {
          result = RESULTS.GRANTED;
        }

        switch (result) {
          case RESULTS.UNAVAILABLE:
            Alert.alert(t("save_image.unavailable.title"), t("save_image.unavailable.title"));
            setReady(true);
            break;
          case RESULTS.DENIED:
            Alert.alert(t("save_image.no_permission.title"), t("save_image.no_permission.description"), [
              {
                text: t("labels.cta.cancel"),
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
            await MediaLibrary.saveToLibraryAsync(uri);
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
