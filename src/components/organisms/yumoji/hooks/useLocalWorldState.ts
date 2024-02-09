import { YuWorld } from "@graphql/__generated";
import { useEffect, useState } from "react";

export const useLocalWorldState = (externalSelectedYuWorld: YuWorld) => {
  const [selectedWorld, setSelectedWorld] = useState(null);

  useEffect(() => {
    setSelectedWorld(externalSelectedYuWorld || YuWorld.Forest);
  }, [externalSelectedYuWorld]);

  return { selectedWorld, setSelectedWorld };
};
