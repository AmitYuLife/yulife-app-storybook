import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibEditSalaryScreen } from "./fib.edit-salary.screen";

storiesOf("FibEditSalaryScreen").add("default", () => <FibEditSalaryScreen onNavigateBack={() => null} />);
