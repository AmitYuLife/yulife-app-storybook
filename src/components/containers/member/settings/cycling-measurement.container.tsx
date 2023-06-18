import React, { memo, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { Navigation } from "@navigation/main";
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
import Logger from "@services/logging/logger";
import SettingLayout from "./setting.layout";
import { GAME_SETTINGS_SCREEN } from "@ids";
import { t } from "@locale";

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

  const onSelectedCyclingMeasurement = useCallback(async (measurement: DistanceMeasurementType) => {
    dispatch(updateDailyCyclingDistanceMeasurementType(measurement));
    await updateCyclingMeasurement({ variables: { measurement } });
    Logger.logMixpanelEvent("settings_toggle", { type: "cycling_measurement", subtype: measurement });
  }, []);

  const onRightIconPress = useCallback(() => (loading ? null : Navigation.popToRoot(componentId)), [componentId]);
  const onLeftIconPress = useCallback(() => (loading ? null : Navigation.pop(ROUTES.cyclingMeasurement)), []);

  return (
    <SettingLayout
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      headerText={t("screens.measurement_cycling_settings.title")}
      screenTestId={GAME_SETTINGS_SCREEN}
      options={OPTIONS.map((o) => ({
        id: o.id,
        title: t(o.title),
        description: t(o.description),
        isSelected: o.id === cyclingMeasurement,
        onPress: () => onSelectedCyclingMeasurement(o.id),
      }))}
    />
  );
};

export default memo(CyclingMeasurementContainer);

const OPTIONS: Array<{ id: DistanceMeasurementType; title: string; description: string }> = [
  {
    id: DistanceMeasurementType.mi,
    title: "screens.measurement_cycling_settings.imperial.title",
    description: "screens.measurement_cycling_settings.imperial.description",
  },
  {
    id: DistanceMeasurementType.km,
    title: "screens.measurement_cycling_settings.metric.title",
    description: "screens.measurement_cycling_settings.metric.description",
  },
];
