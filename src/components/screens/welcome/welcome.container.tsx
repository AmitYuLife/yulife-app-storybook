import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import WelcomeScreen from "./welcome.screen";

interface IProps {
    componentId: string;
}

class WelcomeContainer extends Component<IProps> {

    public render() {
        return (
            <WelcomeScreen
                onLoginPress={this.onLoginPress}
            />
        );
    }

    private onLoginPress = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.LoginScreen"
            }
        });
    }

}

export default WelcomeContainer;
