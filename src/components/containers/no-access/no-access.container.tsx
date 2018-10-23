import * as React from "react";
import { PureComponent } from "react";
import { NoAccessScreen } from "../../screens";

interface IProps {
    componentId: string;
}

export default class NoAccessContainer extends PureComponent<IProps> {
    public render() {
        return <NoAccessScreen />;
    }
}
