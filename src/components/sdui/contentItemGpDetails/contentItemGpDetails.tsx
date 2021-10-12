import React, { useCallback, memo, useState, useEffect } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDebouncedQuery } from "@services/hooks/useDebouncedQuery";
import { GQL_GET_MEDICAL_PRACTICES } from "@graphql/products";
import {
  MedicalPractices,
  MedicalPracticesVariables,
  MedicalPractices_getMedicalPractices,
  ContentItemGpDetails as GqlGpDetails,
  MedicalPractices_getMedicalPractices_practicioners,
} from "@graphql/_core/schema";
import { MedicalPracticeIcon, SearchInput } from "@atoms";
import GpNoResults from "./gpNoResults";
import SearchItem, { ISearchItem } from "@atoms/search/search-item";
import { Colours } from "@styles";
import { GPInputForm, GpManualEntry } from "./gpManualEntry";
import { GpDoctorDetails } from "./gpDoctorDetails";
import { GpConfirm } from "./gpConfirm";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { GpSearchList } from "./gpSearchList";

interface IProps extends GqlGpDetails {
  value: string;
  onComplete?: (
    practice: MedicalPractices_getMedicalPractices,
    gp: MedicalPractices_getMedicalPractices_practicioners,
    dispatchType: SduiActionType
  ) => void;
}

type Props = IProps;

export const ContentItemGpDetails = memo((props: Props) => {
  const [showConfirm, setShowConfirm] = useState(null);
  const [name, setName] = useState(null);
  const [medicalPractice, setMedicalPractice] = useState(null as MedicalPractices_getMedicalPractices);
  const [gp, setGp] = useState(null);
  const [practices, setPractices] = useState<ISearchItem<MedicalPractices_getMedicalPractices>[]>([]);
  const [onLoad, setOnLoad] = useState(true);

  const [manualInput, setManualInput] = useState(false);

  const [search, { loading, data, networkStatus, called }] = useDebouncedQuery<
    MedicalPractices,
    MedicalPracticesVariables
  >(GQL_GET_MEDICAL_PRACTICES, { fetchPolicy: "cache-and-network" });

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

  const setManualGp = (formData: GPInputForm) => {
    const practiceData = manualPracticeToGql(formData);

    setGp({ name: formData.gpName });
    setMedicalPractice(practiceData);
    setShowConfirm(true);
  };

  const setTheGp = (theGp: MedicalPractices_getMedicalPractices_practicioners) => {
    setGp(theGp);
    setShowConfirm(true);
  };

  const manualPracticeToGql = (formData: GPInputForm): MedicalPractices_getMedicalPractices => {
    return {
      name: formData.practiceName,
      address1: formData.practiceAddress,
      address2: null,
      address3: formData.practiceTown,
      address4: null,
      address5: null,
      organisationCode: null,
      practicioners: [],
      postCode: formData.practicePostCode,
    };
  };

  const changeFromGpToManual = () => {
    setMedicalPractice(null);
    setManualInput(true);
  };

  if (data?.getMedicalPractices.length >= 0 && data.getMedicalPractices.length !== practices.length && called) {
    setPractices(
      data.getMedicalPractices.map((practice: MedicalPractices_getMedicalPractices, index: number) => {
        return {
          ...practice,
          onPress: () => setMedicalPractice(practice),
          icon: <MedicalPracticeIcon color={!index ? Colours.primary.p600 : null} />,
          text: getPracticeAddress(practice),
        };
      })
    );
  }

  return (
    <View>
      {showConfirm ? (
        <GpConfirm
          key={"gp-confirm"}
          practice={medicalPractice}
          gp={gp}
          onContinue={() => props.onComplete(medicalPractice, gp, props.onSubmit.type)}
          loading={false}
        />
      ) : manualInput ? (
        <GpManualEntry key={"gp-manual-entry"} onContinue={(formData: GPInputForm) => setManualGp(formData)} />
      ) : medicalPractice ? (
        <GpDoctorDetails
          onSelectGP={setTheGp}
          selectedPractice={medicalPractice}
          setManualInput={changeFromGpToManual}
        />
      ) : (
        <View style={styles.searchWrapper}>
          <SearchInput
            title="Enter the name of your local medical practice:"
            query={name}
            onChangeText={onChangeText}
          />
          <GpSearchList
            data={practices}
            networkStatus={networkStatus}
            loading={loading}
            searchItem={SearchItem}
            emptyElement={<GpNoResults setManualInput={setManualInput} onLoad={onLoad} />}
          />
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  searchWrapper: {
    // To negate the margin added in the container
    marginTop: -50,
  } as ViewStyle,
});

function getPracticeAddress(practice: MedicalPractices_getMedicalPractices): string[] {
  const practiceTown =
    practice.address4 || practice.address5
      ? `${practice.address4 ?? ""} ${practice.address5 ?? ""}`
      : practice.address3;
  const address3 = practice.address4 && practice.address5 && practice.address3 ? `${practice.address3}` : "";
  const firstLine = practice.name;
  const secondLine = `${practice.address1} ${practice.address2} ${address3}`;
  const thirdLine = `${practiceTown}, ${practice.postCode}`;
  return [firstLine, secondLine, thirdLine];
}
