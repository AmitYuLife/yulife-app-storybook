import React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { setIntro } from "../../../services/storage";
import { IntroScreen } from "../../screens";

interface IProps {
    componentId?: string;
}

export default class IntroModal extends PureComponent<IProps> {
    public render() {
        return <IntroScreen onPressLastCta={this.handleLastCta} />;
    }

    private handleLastCta = async () => {
        Navigation.dismissModal(this.props.componentId);
        setIntro();
    }
}
