import React, { ComponentClass, useState } from "react";
import { InteractionManager, View } from "react-native";

const withLazyLoad = (WrappedComponent: ComponentClass) => (props: any) => {
    const [shouldRender, setRender] = useState(false);

    if (!shouldRender) {
        const onLayout = () => {
            InteractionManager.runAfterInteractions(() => setRender(true));
        };

        return <View onLayout={onLayout} />;
    }

    return <WrappedComponent {...props} />;
};

export default withLazyLoad;
