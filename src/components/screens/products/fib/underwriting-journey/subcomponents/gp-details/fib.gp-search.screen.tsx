import React, { useCallback, memo, useState, useEffect } from "react";
import { View } from "react-native";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import GenericHeadingAbsolute, {
  GenericHeadingPad,
} from "../../../../../../atoms/generic-heading/generic-heading-absolute";
import { useDebouncedQuery } from "../../../../../../../services/hooks/useDebouncedQuery";
import { GQL_GET_MEDICAL_PRACTICES } from "../../../../../../../graphql/products";
import {
  MedicalPractices,
  MedicalPracticesVariables,
  MedicalPractices_getMedicalPractices,
} from "../../../../../../../graphql/_core/schema";
import { MedicalPracticeIcon, SearchInput, SearchList } from "@atoms";
import EmptyGpElement from "./fib.gp-no-results";
import SearchItem, { ISearchItem } from "../../../../../../atoms/search/search-item";
import { Colours } from "../../../../../../../styles";

interface GpPracticeSearchScreenProps {
  onClose: () => void;
  onNavigateBack: () => void;
  onSelectMedicalPractice: (practice: ISearchItem<MedicalPractices_getMedicalPractices>) => void;
  name: string;
  setName: (value: React.SetStateAction<string>) => void;
  setManualInput: () => void;
}

function keyExtractor(item: ISearchItem<MedicalPractices_getMedicalPractices>, index: number) {
  return item.organisationCode + index;
}

function _FibGPPracticeSearchScreen(props: GpPracticeSearchScreenProps) {
  const { onNavigateBack, onSelectMedicalPractice, onClose, name, setName, setManualInput } = props;

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const [practices, setPractices] = useState<ISearchItem<MedicalPractices_getMedicalPractices>[]>([]);
  const [onLoad, setOnLoad] = useState(true);
  const [search, { loading, data, networkStatus, called }] = useDebouncedQuery<
    MedicalPractices,
    MedicalPracticesVariables
  >(GQL_GET_MEDICAL_PRACTICES, { fetchPolicy: "cache-and-network" }, null, null);

  const onChangeText = useCallback(
    (text: string) => {
      setName(text);
      search({ name: text });
      if (onLoad) {
        setOnLoad(false);
      }
    },
    [search, onLoad, setName]
  );

  const onRefresh = useCallback(async () => {
    if (name) {
      search({ name });
    }
  }, [search, name]);

  useEffect(() => {
    // Run query for navigating back cases
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data?.getMedicalPractices.length >= 0 && data.getMedicalPractices.length !== practices.length && called) {
    setPractices(
      data.getMedicalPractices.map((practice: MedicalPractices_getMedicalPractices, index: number) => {
        const practiceTown =
          practice.address4 || practice.address5
            ? `${practice.address4 ?? ""} ${practice.address5 ?? ""}`
            : practice.address3;
        const address3 = practice.address4 && practice.address5 && practice.address3 ? `${practice.address3}` : "";
        const firstLine = practice.name;
        const secondLine = `${practice.address1} ${practice.address2} ${address3}`;
        const thirdLine = `${practiceTown}, ${practice.postCode}`;
        return {
          ...practice,
          onPress: (practice: ISearchItem<MedicalPractices_getMedicalPractices>) => {
            onSelectMedicalPractice(practice);
          },
          icon: <MedicalPracticeIcon color={!index ? Colours.primary.p600 : null} />,
          text: [firstLine, secondLine, thirdLine],
        };
      })
    );
  }

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <GenericHeadingPad />
      <SearchInput title="Enter the name of your local medical practice:" query={name} onChangeText={onChangeText} />
      <SearchList
        data={practices}
        networkStatus={networkStatus}
        onRefresh={onRefresh}
        loading={loading}
        searchItem={SearchItem}
        keyExtractor={keyExtractor}
        emptyElement={<EmptyGpElement setManualInput={setManualInput} onLoad={onLoad} />}
      />
      <GenericHeadingAbsolute heading="GP Report" onLeftIconPress={onNavigateBack} onRightIconPress={onClose} />
    </View>
  );
}

export const FibGPPracticeSearchScreen = memo(_FibGPPracticeSearchScreen);
