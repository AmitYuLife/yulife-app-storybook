import { useContext } from "react";
import { SduiScrollContext } from "../_context/SduiProvider";

export function useSduiBodyScrollValue() {
  const scrollValue = useContext(SduiScrollContext);

  return { scrollValue };
}
