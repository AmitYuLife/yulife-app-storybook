import React, { ComponentType, useCallback } from "react";
import getClient from "@services/bugsnag";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Platform, View } from "react-native";

const Bugsnag = getClient();
const ErrorBoundary =
  Platform.OS === "web" ? React.createElement(View, {}) : Bugsnag.getPlugin("react")!.createErrorBoundary(React);

const withErrorBoundary = (WrappedComponent: ComponentType<unknown>) => (props: Record<string, unknown>) => {
  /**
   * This error boundary will catch any render UI error, the error will be send automatically to bugsnag
   * and this component will only redirect to daily steps screen
   */
  const onErrorCallback = useCallback(async () => {
    await Navigation.popTo(ROUTES.dailySteps);
  }, []);

  return (
    <ErrorBoundary onError={onErrorCallback}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
};

export default withErrorBoundary;
