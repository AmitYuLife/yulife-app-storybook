import React, { ComponentType, PropsWithChildren } from "react";

// Native version uses Bugsnag's React plugin to create a real ErrorBoundary class component.
// That plugin isn't loaded on web, and the native fallback (`React.createElement(View, {})`)
// returns an *element* rather than a component, which crashes the app with
// "Element type is invalid ... got: <View />". A passthrough wrapper is sufficient here.
const ErrorBoundary = ({ children }: PropsWithChildren<{ onError?: () => void }>) => <>{children}</>;

const withErrorBoundary = (WrappedComponent: ComponentType<unknown>) => (props: Record<string, unknown>) =>
  (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

export default withErrorBoundary;
