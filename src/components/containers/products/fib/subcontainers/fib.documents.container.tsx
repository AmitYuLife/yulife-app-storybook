import React, { memo } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibDocumentsScreen } from "@components/screens";

interface Props {
  navigation: FibLocalNavigation;
}

const FibDocumentsContainer = (props: Props) => {
  const { navigation } = props;

  return <FibDocumentsScreen onNavigateBack={navigation.pop} />;
};

export default memo(FibDocumentsContainer);
