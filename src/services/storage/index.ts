import { setFitkitPermission, getFitkitPermission, REQUESTED } from "./fitkit";

export { setFitkitPermission, getFitkitPermission } from "./fitkit";
export { getToken, setToken, clearToken, migrateOldAppVersionToken } from "./token";

export default {
  fitkit: {
    setFitkitPermission,
    getFitkitPermission,
    REQUESTED,
  },
};
