import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SduiLoadingContext } from "../_context/SduiProvider";

export function useSduiLoading() {
  const isSduiReduxLoading = useSelector(getSduiLoadingForKey("__disabled"));
  const isSduiContextLoading = useContext(SduiLoadingContext);

  return { isSduiLoading: isSduiReduxLoading || isSduiContextLoading };
}
