import React from "react";
import { Provider } from "react-redux";
import { storiesOf } from "@storybook/react-native";
import { ProductStepScreen } from "./product-step.screen";
import { covea_fib_01_1 } from "./stories/covea_fib_01_1";
import { mockStore } from "@redux/_core/store";

storiesOf("containers/products/product-step.screen", module)
  .addDecorator((g: any) => <Provider store={mockStore}>{g()}</Provider>)
  .add("default", () => <ProductStepScreen {...covea_fib_01_1} />);
