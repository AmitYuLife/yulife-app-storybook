import { AddUserFeedbackMutation, AddUserFeedbackMutationFunction } from "@graphql/user";
import Logger from "@services/logging/logger";
import * as React from "react";
import { PureComponent } from "react";
import FeedbackModal from "./feedback.modal";

interface IProps {
    closeModal: () => void;
}

interface IState {
    rating: number;
}

type Props = IProps;

export default class FeedbackModalContainer extends PureComponent<Props, IState> {
    public state: IState = {
        rating: 0
    };

    public render() {
        return (
            <AddUserFeedbackMutation>
                {(addUserFeedback, { loading }) => {
                    const { rating } = this.state;

                    return (
                        <FeedbackModal
                            isSubmitting={loading}
                            onCancel={this.onCancel}
                            onRatingSelect={this.onRatingSelect}
                            onSubmit={() => this.onSubmit(addUserFeedback)}
                            rating={rating}
                        />
                    );
                }}
            </AddUserFeedbackMutation>
        );
    }

    private onRatingSelect = (rating: number) => {
        this.setState({ rating });
    };

    private onCancel = () => {
        Logger.logEvent("app_rating", { rated: false });
        this.props.closeModal();
    };

    private onSubmit = async (addUserFeedback: AddUserFeedbackMutationFunction) => {
        const { rating } = this.state;

        await addUserFeedback({ variables: { rating } });

        const logging = {
            rated: true,
            rating
        };

        Logger.logEvent("app_rating", logging);

        if (rating <= 3) {
            Logger.logIntercomEvent("low_app_rating");
        }

        this.props.closeModal();
    };
}
