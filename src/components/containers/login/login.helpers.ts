import { gql, LoginUserMutation, MobileGameTheme } from "@graphql/__generated";
import { t } from "@locale";
import { IFeature, ILoginUserPayload } from "@redux/user/user.types";
import { VoidFunction } from "@utils";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { Keyboard } from "react-native";
import { setAuthenticatedRoot } from "@navigation/root";
import { Dispatch } from "react";
import { setAuthenticated, setRegionConfig } from "@redux/app/app.actions";
import { Style } from "@styles";
import client from "@graphql/_core/client";
import { REGION, region as regionService } from "@locale";
import { setToken } from "@services/storage";
import themeService from "@modules/themes/theme.service";
import { FetchResult } from "@apollo/client";
import { loginUserSuccess } from "@redux/user/user.actions";
import { reduceUserFeatures } from "@redux/user/user.helpers";

export const applyLoginSession = async ({
  loginResponse,
  region,
  componentId,
  dispatch,
}: {
  loginResponse: FetchResult<LoginUserMutation>;
  region: REGION;
  componentId: string;
  dispatch: Dispatch<unknown>;
}) => {
  const loginUser = loginResponse?.data?.loginUser;

  const tempGameEnableAppTheme = !!loginUser?.user?.userFeatures?.find((r) => r.name === "tempGameEnableAppTheme")
    ?.value;

  regionService.setRegion(region);

  if (loginUser?.token) {
    await setToken(loginUser.token);
  }

  const response = await client().query({
    query: tempGameEnableAppTheme ? gql("GetPublicYuApiConfigWithThemeDocument") : gql("GetPublicYuApiConfigDocument"),
    fetchPolicy: "no-cache",
  });

  if (response?.data?.config?.__typename) {
    await regionService.setConfig(response.data.config);
  }

  if ("theme" in response.data) {
    const theme = response.data.theme as MobileGameTheme;
    await themeService.setThemeId(theme.id);
    client().writeQuery({
      query: gql("GetMobileGameThemeDocument"),
      data: { getMobileGameTheme: theme },
    });
  }

  dispatch(setRegionConfig({ shouldFetchConfig: false }));

  if (loginUser?.token) {
    const features = loginUser?.user?.userFeatures;

    dispatch(loginUserSuccess(toLoginUserSuccessPayload(loginResponse.data)));

    // no need to send the user to healthkit-connect if device is an ipad
    await transitionFromLoginToAuthenticated({
      onboarded: loginResponse.data.loginUser.user?.redeemedOnboarding,
      userFeatures: features.reduce(reduceUserFeatures, {}),
      componentId,
      dispatch,
    });
  } else {
    throw new Error(t("screens.login.accessibility.alert_error_default_message"));
  }
};

const transitionFromLoginToAuthenticated = async ({
  onboarded,
  userFeatures,
  componentId,
  dispatch,
}: {
  onboarded: boolean;
  userFeatures: IFeature;
  componentId: string;
  dispatch: Dispatch<unknown>;
}) => {
  const { tempGameEnableReleaseYuHealthV4 } = userFeatures || {};

  // ensure the keyboard is dismissed
  Keyboard.dismiss();

  const onFinalDone = async () => {
    await setAuthenticatedRoot(() => dispatch(setAuthenticated()));
  };

  const onboardingNavigationBuilder = (next?: VoidFunction) => () => {
    return navigateToRoute(componentId, ROUTES.onboardingSignUpReward, next);
  };

  const connectNavigationBuilder = (next?: VoidFunction) => () => {
    const route = tempGameEnableReleaseYuHealthV4 ? ROUTES.yuHealthConnect : ROUTES.onboardingFitKitConnect;

    return navigateToRoute(componentId, route, next);
  };

  const actionOrder: (VoidFunction | ((next?: VoidFunction) => VoidFunction))[] = [];

  if (!onboarded) {
    actionOrder.push(onboardingNavigationBuilder);
  }

  if (!Style.isIPad()) {
    actionOrder.push(connectNavigationBuilder);
  }

  actionOrder.push(onFinalDone);

  const action = actionOrder.reduceRight((acc, curr) => (acc === null ? curr : curr(acc)), null) as VoidFunction;

  action();
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return t("validator.password");
  }

  // if (password.length < 6) {
  //     return "Please enter a password";
  // }

  return "";
};

export const toLoginUserSuccessPayload = (data: LoginUserMutation): ILoginUserPayload => ({
  intercomHash: data?.loginUser?.intercomHash,
  onboarding: { redeemedOnboarding: data?.loginUser?.user?.redeemedOnboarding },
  passiveSteps: {
    exchangeRate: {
      yucoin: data?.loginUser?.user?.passiveSteps?.exchange?.yucoin,
      steps: data?.loginUser?.user?.passiveSteps?.exchange?.steps,
      meditation: data?.loginUser?.user?.passiveSteps?.exchange?.meditation,
      surge: data?.loginUser?.user?.passiveSteps?.exchange?.surge,
    },
  },
  user: {
    id: data?.loginUser?.user?.id,
    firstName: data?.loginUser?.user?.firstName,
    lastName: data?.loginUser?.user?.lastName,
    fullName: data?.loginUser?.user?.fullName,
    userFeatures: data?.loginUser?.user?.userFeatures?.map((feature) => ({
      name: feature.name,
      value: feature.value,
    })),
    supportConfig: {
      supportLevel: data?.loginUser?.user?.supportConfig?.supportLevel,
    },
  },
});

type LoginNavigatableRoutes =
  | typeof ROUTES.onboardingSignUpReward
  | typeof ROUTES.yuHealthConnect
  | typeof ROUTES.onboardingFitKitConnect;

export const navigateToRoute = (componentId: string, route: LoginNavigatableRoutes, navigateToNext?: VoidFunction) => {
  const componentExtraOptions = navigateToNext ? { passProps: { navigateToNext } } : {};

  return Navigation.push(componentId, {
    component: {
      id: route,
      name: route,
      options: { bottomTabs },
      ...componentExtraOptions,
    },
  });
};
