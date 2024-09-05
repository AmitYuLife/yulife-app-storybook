import { getHealthSmokingState } from "@redux/health-smoking/health-smoking.selectors";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

export function useCachedSmokingState() {
  const smokingState = useSelector(getHealthSmokingState);
  const updates = useRef(-1);
  const [isUsingCachedSmokingState, setIsUsingCachedSmokingState] = useState(true);

  useEffect(() => {
    setIsUsingCachedSmokingState(++updates.current < 1);
  }, [smokingState]);

  return useMemo(() => ({ isUsingCachedSmokingState }), [isUsingCachedSmokingState]);
}
