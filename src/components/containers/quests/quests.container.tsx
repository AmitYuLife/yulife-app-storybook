// import moment from "moment";
import React from "react";
import { IChallenge, QuestsScreen, QuestsScreenOffline } from "../../screens";

interface IProps {
    nextAvailable?: number;
    data: IChallenge[];
    coins: number;
    hasNotification?: boolean;
    isOffline?: boolean;
}

class QuestsScreenContainer extends React.PureComponent<IProps> {
    public render() {
        const {
            data,
            // nextAvailable,
            isOffline
        } = this.props;
        // const nextAvailableFormatted = moment(moment.unix(nextAvailable).toISOString());
        // const diff = moment().diff(
        //     nextAvailableFormatted,
        //     "seconds"
        // );
        return (
            isOffline ? (
                <QuestsScreenOffline />
            ) : (
                <QuestsScreen
                    data={data}
                />
            )
        );
    }
}

export default QuestsScreenContainer;
