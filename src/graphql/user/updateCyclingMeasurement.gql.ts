import gql from "graphql-tag";

export const GQL_MUTATION_UPDATE_CYCLING_MEASUREMENT = gql`
  mutation UpdateCyclingMeasurement($measurement: DistanceMeasurementType!) {
    updateCyclingMeasurement(measurement: $measurement)
  }
`;
