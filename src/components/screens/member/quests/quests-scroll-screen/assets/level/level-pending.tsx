import { Style } from "@styles/index";
import moment from "moment";
import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../../../../atoms";
import { getTime } from "./level.helpers";

interface IProps {
    nextAvailableAt: string;
    textFill: string;
}

interface IState {
    nextAvailable: number | null;
}

class LevelPending extends PureComponent<IProps, IState> {
    public state: IState = {
        nextAvailable: null
    };
    private interval: NodeJS.Timer;

    public componentDidMount() {
        global.setInterval(this.handleUpdateNextAvailable, 1000);
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public render() {
        const { nextAvailable } = this.state;
        const nextAvailableFormatted = getTime(nextAvailable);
        const style = StyleSheet.flatten([styles.text, { color: this.props.textFill || "white" }]);

        return (
            <View style={{ flexDirection: "column" }}>
                <Text style={style} bold={true}>
                    in
                </Text>
                <Text style={style} bold={true}>
                    {nextAvailableFormatted}
                </Text>
            </View>
        );
    }

    private handleUpdateNextAvailable = () => {
        const nextAvailable = Math.abs(moment().diff(moment(this.props.nextAvailableAt), "seconds"));
        this.setState({ nextAvailable });
    }
}

export default LevelPending;

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        fontSize: Style.SCALE_UP_AND_DOWN(11),
        lineHeight: Style.SCALE_UP_AND_DOWN(11),
        textAlign: "center"
    }
});
