import { GQL_MUTATION_ADD_USER_FEEDBACK, AddUserFeedbackMutationTuple } from "@graphql/user";
import Logger from "@services/logging/logger";
import * as React from "react";
import { FeedbackScreen } from "../../screens";
import { useMutation } from "@apollo/react-hooks";
import { Navigation } from "react-native-navigation";

interface IOwnProps {
  componentId?: string;
}

type Props = IOwnProps;

const FeedbackModal: React.FC<Props> = ({ componentId }) => {
  const [rating, setRating] = React.useState(0);
  const [addFeedback, { loading }]: AddUserFeedbackMutationTuple = useMutation(GQL_MUTATION_ADD_USER_FEEDBACK);

  const handleClose = () => {
    Logger.logEvent("app_rating", { rated: false });
    Navigation.dismissModal(componentId);
  };

  const handleRatingSelect = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = async () => {
    await addFeedback({ variables: { rating } });

    const logging = {
      rated: true,
      rating,
    };

    Logger.logEvent("app_rating", logging);

    if (rating <= 3) {
      Logger.logIntercomEvent("low_app_rating");
    }

    Navigation.dismissModal(componentId);
  };

  return (
    <FeedbackScreen
      isSubmitting={loading}
      onCancel={handleClose}
      onRatingSelect={handleRatingSelect}
      onSubmit={handleSubmit}
      rating={rating}
    />
  );
};

export default FeedbackModal;
