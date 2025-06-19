import React, { ComponentClass, useState, useEffect } from "react";
import { View } from "react-native";

const withLazyLoad =
  (WrappedComponent: ComponentClass, renderAfterMs = 50) =>
  (props: any) => {
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
