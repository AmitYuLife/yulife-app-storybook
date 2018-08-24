import * as React from "react";
import { SFC } from "react";
import { Text, Button } from "../../../atoms";
import styles from "./daily-steps.screen.styles";
import data from "./daily-steps.screen.data";

interface IProps {
    onPress: () => void;
}

const DailyStepsFitKitAuthorise: SFC<IProps> = ({ onPress }) => (
    <>
        <Text
            style={styles.permissionText}
        >
            {data.permission}
        </Text>
        <Button
            label={data.permissionCta}
            onPress={onPress}
            type={Button.Types.PRIMARY_MEDIUM}
        />
    </>
);

export default DailyStepsFitKitAuthorise;
