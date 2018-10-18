import React from "react";
import { PureComponent } from "react";
import { setAuthenticatedRoot } from "../../../../navigation/root";
import { setIntro } from "../../../../services/storage";
import { IntroScreen } from "../../../screens";

interface IProps {
    componentId?: string;
}

export default class IntroContainer extends PureComponent<IProps> {
    public render() {
        return <IntroScreen onPressLastCta={this.handleLastCta} />;
    }

    private handleLastCta = async () => {
        setAuthenticatedRoot();
        setIntro();
    }
}
