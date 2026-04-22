export const nativeApplicationVersion = null;
export const nativeBuildVersion = null;
export const applicationName = "YuLife Web";
export const applicationId = "com.yulife.web";
export const getIosIdForVendorAsync = () => Promise.resolve("web-vendor-id");
export const getAndroidId = () => Promise.resolve("web-android-id");
export const getInstallReferrerAsync = () => Promise.resolve("");
export const getIosPushNotificationServiceEnvironmentAsync = () => Promise.resolve("development");
export default {
  nativeApplicationVersion, nativeBuildVersion, applicationName, applicationId,
  getIosIdForVendorAsync, getAndroidId, getInstallReferrerAsync,
  getIosPushNotificationServiceEnvironmentAsync,
};
