import React from "react";
import moment from "moment";
import mockRNCNetInfo from "@react-native-community/netinfo/jest/netinfo-mock.js";
import "@testing-library/react-native/jest-preset";

jest.mock("@react-native-community/netinfo", () => mockRNCNetInfo);

// TODO why isn't this mock working?
jest.mock("react-native-config", () => ({
  API_URL: "http://api-url.com",
  SIGNUP_URL: "http://signup-url.com",
}));

jest.mock("react-native/Libraries/Components/Touchable/TouchableOpacity.js", () => {
  const { TouchableHighlight } = require("react-native");
  const MockTouchable = (props) => {
    return <TouchableHighlight {...props} />;
  };
  MockTouchable.displayName = "TouchableOpacity";

  return MockTouchable;
});

jest.mock("react-native-intercom", () => {}, { virtual: true });
jest.mock(
  "@wootric/react-native-wootric",
  () => ({
    configureWithClientID: () => ({}),
    setEndUserEmail: () => ({}),
    setSurveyImmediately: () => ({}),
    setEndUserCreatedAt: () => ({}),
    setEndUserExternalId: () => ({}),
    setEndUserPhoneNumber: () => ({}),
    setEndUserProperties: () => ({}),
    showOptOut: () => ({}),
    setFirstSurveyAfter: () => ({}),
    setCustomLanguage: () => ({}),
    setCustomProductName: () => ({}),
    setCustomAudience: () => ({}),
    showSurvey: () => ({}),
  }),
  {}
);

jest.mock("react-native-fitkit", () => ({
  // As strange as it is to use moment in a config file, this ensures that at whatever point this
  // mock method is used it will return a recently completed 5 minute activity worth 54 points.
  sampleQuery: jest.fn(() => [
    {
      endDateTime: moment().subtract(1, "minute").format(),
      startDateTime: moment().subtract(6, "minute").format(),
      value: 54,
    },
  ]),
  queryPedometerFromDate: jest.fn(() => ({ steps: 75 })),
  FitKitTypes: { Types: {} },
}));

jest.mock("react-native-device-info", () => ({
  getUniqueId: jest.fn(),
  getVersion: jest.fn(),
  getTimezone: jest.fn(),
  getDeviceName: jest.fn(),
  getDeviceId: jest.fn(),
  getModel: jest.fn(),
}));

jest.mock("@react-native-community/push-notification-ios", () => ({
  FetchResult: {
    NoData: "no-data",
  },
}));

jest.mock("react-native-push-notification", () => ({
  configure: jest.fn(),
  unregister: jest.fn(),
  localNotification: jest.fn(),
  localNotificationSchedule: jest.fn(),
  requestPermissions: jest.fn(),
  presentLocalNotification: jest.fn(),
  scheduleLocalNotification: jest.fn(),
  cancelLocalNotifications: jest.fn(),
  cancelAllLocalNotifications: jest.fn(),
  setApplicationIconBadgeNumber: jest.fn(),
  getApplicationIconBadgeNumber: jest.fn(),
  popInitialNotification: jest.fn(),
  abandonPermissions: jest.fn(),
  checkPermissions: jest.fn(),
  registerNotificationActions: jest.fn(),
  clearAllNotifications: jest.fn(),
}));

jest.mock("react-native-mixpanel", () => ({
  initPushHandling: jest.fn(),
  sharedInstanceWithToken: jest.fn(),
  identify: jest.fn(),
  track: jest.fn(),
  trackChargeWithProperties: jest.fn(),
  trackWithProperties: jest.fn(),
}));

jest.mock("bugsnag-react-native", () => ({
  Configuration: jest.fn(),
  Client: jest.fn(),
}));

jest.mock("../src/graphql/member/collectAward.gql", () => ({
  collectAwardWithClient: jest.fn(),
}));
