import React, { memo, useCallback } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Navigation } from "react-native-navigation";
import { CyclingMeasurementScreen } from "@components/screens";
import { GQL_MUTATION_UPDATE_CYCLING_MEASUREMENT } from "@graphql/user";
import {
  UpdateCyclingMeasurement,
  UpdateCyclingMeasurementVariables,
} from "@graphql/_core/schema/UpdateCyclingMeasurement";
import { ROUTES } from "@navigation/constants";
import { useDispatch, useSelector } from "react-redux";
import { updateDailyCyclingDistanceMeasurementType } from "@redux/daily-cycling/daily-cycling.actions";
import { DistanceMeasurementType } from "@graphql/_core/schema/globalTypes";
import { getDailyCyclingMeasurement } from "@redux/daily-cycling/daily-cycling.selectors";

interface IProps {
  componentId: string;
}

const CyclingMeasurementContainer = ({ componentId }: IProps) => {
  const cyclingMeasurement = useSelector(getDailyCyclingMeasurement);

  const [updateCyclingMeasurement, { loading }] = useMutation<
    UpdateCyclingMeasurement,
    UpdateCyclingMeasurementVariables
  >(GQL_MUTATION_UPDATE_CYCLING_MEASUREMENT);
  const dispatch = useDispatch();

  const onSelectedCyclingMeasurement = useCallback(async (measurement) => {
    dispatch(updateDailyCyclingDistanceMeasurementType(measurement as DistanceMeasurementType));
    await updateCyclingMeasurement({ variables: { measurement } });
  }, []);

  const onRightIconPress = useCallback(() => (loading ? null : Navigation.popToRoot(componentId)), [componentId]);
  const onLeftIconPress = useCallback(() => (loading ? null : Navigation.pop(ROUTES.cyclingMeasurement)), []);

  return (
    <CyclingMeasurementScreen
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      onRadioPress={onSelectedCyclingMeasurement}
      selectedCyclingMeasurement={cyclingMeasurement}
    />
  );
};

export default memo(CyclingMeasurementContainer);
