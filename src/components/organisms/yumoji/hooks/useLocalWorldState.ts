import { useEffect, useState } from "react";
import { YuWorld } from "@graphql/_core/schema/globalTypes";

export const useLocalWorldState = (externalSelectedYuWorld: YuWorld) => {
  const [selectedWorld, setSelectedWorld] = useState(null);

  useEffect(() => {
    setSelectedWorld(externalSelectedYuWorld || YuWorld.forest);
  }, [externalSelectedYuWorld]);

  return { selectedWorld, setSelectedWorld };
};
