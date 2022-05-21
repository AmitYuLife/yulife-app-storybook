/**
 * Registers listener to be called each time component appears on screen (attached to the view hierarchy)
 * [more info](https://wix.github.io/react-native-navigation/api/events/#componentdidappear)
 */

import { ComponentDidAppearEvent, Navigation } from "react-native-navigation";
import { useLayoutEffect } from "react";

export function useNavigationComponentDidAppear(
  /**
   * Function called each time the event is triggered.
   */
  handler: (event: ComponentDidAppearEvent) => void,

  /**
   * Component reference id. If provided it listens for event only for this screen.
   */
  componentId?: string
) {
  useLayoutEffect(() => {
    const subscription = Navigation.events().registerComponentDidAppearListener((event: ComponentDidAppearEvent) => {
      const equalComponentId = event.componentId === componentId;

      if (componentId && !equalComponentId) {
        return;
      }

      handler(event);
    });

    return () => subscription.remove();
  }, [handler, componentId]);
}
