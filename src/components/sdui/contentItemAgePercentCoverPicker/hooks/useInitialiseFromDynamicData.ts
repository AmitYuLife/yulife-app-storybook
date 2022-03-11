import { useRef, useEffect } from "react";

interface Props {
  syncDependencies: any[];
  sync: () => void;
  syncTimeoutMs?: number;
}

export const useInitialiseFromDynamicData = ({ syncDependencies, sync, syncTimeoutMs = 1000 }: Props) => {
  const hasSynced = useRef(null);

  useEffect(() => {
    if (hasSynced.current) {
      return;
    }

    const syncTimeout = setTimeout(() => {
      sync();
      hasSynced.current = true;
    }, syncTimeoutMs);

    return () => clearTimeout(syncTimeout);
  }, syncDependencies);
};
