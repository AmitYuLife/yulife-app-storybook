import * as React from "react";
import { View } from "react-native";
import styles from "./page-indicator.styles";

interface IProps {
    pages: any[];
    activePage: number;
}

const PageIndicator: React.SFC<IProps> = ({ pages, activePage }) => (
    <>
        {pages.map((_, i: number) => (
            <View key={i} style={[styles.pageIndicator, i === activePage ? styles.activePage : styles.inactivePage]} />
        ))}
    </>
);

export default PageIndicator;
