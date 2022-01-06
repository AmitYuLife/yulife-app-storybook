import React, { memo, useCallback, useState } from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { Navigation } from "react-native-navigation";
import { CyclingMeasurementScreen } from "@components/screens";
import { GQL_MUTATION_UPDATE_CYCLING_MEASUREMENT, GQL_QUERY_GET_USER_PROFILE } from "@graphql/user";
import {
  UpdateCyclingMeasurement,
  UpdateCyclingMeasurementVariables,
} from "@graphql/_core/schema/UpdateCyclingMeasurement";
import { ROUTES } from "@navigation/constants";

interface IProps {
  componentId: string;
  cyclingMeasurement: string;
}

const CyclingMeasurementContainer = ({ componentId, cyclingMeasurement }: IProps) => {
  const [selectedCyclingMeasurement, setSelectedCyclingMeasurement] = useState(cyclingMeasurement);
  const [updateCyclingMeasurement, { loading }] = useMutation<
    UpdateCyclingMeasurement,
    UpdateCyclingMeasurementVariables
  >(GQL_MUTATION_UPDATE_CYCLING_MEASUREMENT);

  const client = useApolloClient();

  const onSelectedCyclingMeasurement = useCallback(async (measurement) => {
    setSelectedCyclingMeasurement(measurement);
    client.writeQuery({
      query: GQL_QUERY_GET_USER_PROFILE,
      data: {
        getUserProfile: {
          __typename: "UserProfile",
          gameSettings: {
            __typename: "GameSettings",
            cyclingMeasurement: measurement,
          },
        },
      },
    });
    await updateCyclingMeasurement({ variables: { measurement } });
  }, []);

  const onRightIconPress = useCallback(() => (loading ? null : Navigation.popToRoot(componentId)), [componentId]);
  const onLeftIconPress = useCallback(() => (loading ? null : Navigation.pop(ROUTES.cyclingMeasurement)), []);

  return (
    <CyclingMeasurementScreen
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      onRadioPress={onSelectedCyclingMeasurement}
      selectedCyclingMeasurement={selectedCyclingMeasurement}
    />
  );
};

export default memo(CyclingMeasurementContainer);
