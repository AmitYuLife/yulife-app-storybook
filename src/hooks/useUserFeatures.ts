import { getUserFeatures } from "@redux/user/user.selectors";
import { useSelector } from "react-redux";

export const useUserFeatures = () => useSelector(getUserFeatures);
