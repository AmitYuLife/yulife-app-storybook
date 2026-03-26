import React, { useState, useEffect, ComponentType } from "react";
import { View } from "react-native";

const withLazyLoad =
  (WrappedComponent: ComponentType<unknown>, renderAfterMs = 50) =>
  (props: Record<string, unknown>) => {
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setRender(true);
      }, renderAfterMs);

      return () => clearTimeout(timer);
    }, []);

    if (!shouldRender) {
      return <View />;
    }

    return <WrappedComponent {...props} />;
  };

export default withLazyLoad;
