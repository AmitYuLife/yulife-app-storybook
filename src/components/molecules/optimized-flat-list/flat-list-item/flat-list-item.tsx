import React from "react";
import { LayoutChangeEvent, View } from "react-native";

interface IProps {
    data?: any;
    viewComponent: React.ReactNode;
}

interface IState {
    visibility: boolean;
}

export default class FlatListItem extends React.PureComponent<IProps, IState> {
    public state: IState = {
        visibility: true
    };

    private viewProperties = {
        height: 0,
        width: 0
    };

    public setVisibility = (visibility: boolean) => {
        if (this.state.visibility !== visibility) {
            this.setState({ visibility });
        }
    };

    public render() {
        const { visibility } = this.state;
        const { viewComponent } = this.props;

        return visibility ? (
            <View onLayout={this.onLayout}>{viewComponent}</View>
        ) : (
            <View style={{ width: this.viewProperties.width, height: this.viewProperties.height }} />
        );
    }

    private onLayout = (evt: LayoutChangeEvent) => {
        this.viewProperties.width = evt.nativeEvent.layout.width;
        this.viewProperties.height = evt.nativeEvent.layout.height;
    };
}
