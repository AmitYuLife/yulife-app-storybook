import React, { SFC } from "react";
import { GenericScreen } from "../../screens";

interface IProps {
    onPress: () => void;
}

const GenericConnectionErrorModal: SFC<{ onPress: IProps["onPress"] }> = ({ onPress }) => (
    <GenericScreen
        onPress={onPress}
        heading="you're offline"
        subheading="check your internet connection"
        ctaLabel="back"
    />
);

export default GenericConnectionErrorModal;
