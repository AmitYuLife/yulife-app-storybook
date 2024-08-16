export interface IFitkitStore {
  authorised: boolean;
  healthApp: string;
  available: boolean;
  initialized: boolean;
  loading: boolean;
}

export type FitkitAuthorisePayload = { healthApp: string };
export type FitkitSetupPayload = { available: boolean; authorised: boolean };
