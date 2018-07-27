import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import style from "./style";

const CenterView: SFC<{}> = ({ children }) => (
    <View style={style.main}>{children}</View>
);

export default CenterView;
