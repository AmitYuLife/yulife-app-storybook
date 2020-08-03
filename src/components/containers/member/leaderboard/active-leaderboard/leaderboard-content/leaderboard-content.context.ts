import { createContext } from "react";
import { Animated } from "react-native";

export const ScrollValueContext = createContext(new Animated.Value(0));
