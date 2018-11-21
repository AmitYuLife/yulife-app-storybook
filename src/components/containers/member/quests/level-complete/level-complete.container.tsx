import * as React from "react";
import { Component } from "react";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { LevelCompleteModal } from "../../../../modals";

interface IProps {
    level: GetCurrentWorld_getCurrentWorld;
    onPressActivityHistory: () => void;
    onPressCta: () => void;
}

class LevelCompleteContainer extends Component<IProps> {

    public render() {
        const { level, onPressActivityHistory, onPressCta } = this.props;

        return (
            <LevelCompleteModal
                level={level}
                onPressActivityHistory={onPressActivityHistory}
                onPressCta={onPressCta}
            />
        );
    }
}

export default LevelCompleteContainer;
