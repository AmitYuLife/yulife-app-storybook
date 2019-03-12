import React, { SFC } from "react";
import { View } from "react-native";
import styles from "./page-indicator.styles";

interface IProps {
    pages: any[];
    activePage: number;
}

const PageIndicator: SFC<IProps> = ({ pages, activePage }) => (
    <>
        {pages.map((_, i: number) => (
            <View key={i} style={[styles.pageIndicator, i === activePage ? styles.activePage : styles.inactivePage]} />
        ))}
    </>
);

export default PageIndicator;
