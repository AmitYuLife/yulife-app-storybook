import React, { useCallback, memo, useMemo, useState } from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { useDebouncedQuery } from "@hooks";
import { GQL_GET_MEDICAL_PRACTICES } from "@graphql/products";
import {
  MedicalPractices as MedicalPracticesGql,
  MedicalPracticesVariables,
  ContentItemGpDetails as GqlGpDetails,
  MedicalPractices_getMedicalPractices as MedicalPractices,
  MedicalPractices_getMedicalPractices_practicioners as MedicalPractioners,
} from "@graphql/_core/schema";
import { MedicalPracticeIcon, TextTemplate } from "@atoms";
import GpNoResults from "./gpNoResults";
import { ISearchItem } from "@molecules";
import { Colours, Style } from "@styles";
import { GpManualEntry } from "./gpManualEntry";
import { GpDoctorDetails } from "./gpDoctorDetails";
import { GpSearchList } from "./gpSearchList";
import { SEARCH_INPUT } from "@ids";

interface Props extends GqlGpDetails {
  fields: Record<string, string>;
  onCompletePractise: (practice: MedicalPractices) => void;
  onCompleteGp: (gp: Pick<MedicalPractioners, "name">) => void;
  onUpdateFormField: (key: string, value: string) => void;
}

export const ContentItemGpDetails = memo(({ fields, onCompleteGp, onCompletePractise, onUpdateFormField }: Props) => {
  const [name, setName] = useState(null);
  const [medicalPractice, setMedicalPractice] = useState<MedicalPractices>(null);
  const [gp, setGp] = useState<Pick<MedicalPractioners, "name">>(null);
  const [practices, setPractices] = useState<ISearchItem<MedicalPractices>[]>([]);
  const [onLoad, setOnLoad] = useState(true);

  const [manualInput, setManualInput] = useState(false);

  const [search, { loading, data, networkStatus, called }] = useDebouncedQuery<
    MedicalPracticesGql,
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

  const onSelectGp = useCallback(
    (doctor: MedicalPractioners) => {
      onCompleteGp(doctor);
      setGp({ name: doctor.name });
    },
    [onCompleteGp]
  );

  const textInputStyles = useMemo(
    () => ({
      borderBottomColor: medicalPractice ? Colours.neutral.n400 : Colours.primary.p600,
    }),
    [medicalPractice]
  );

  const changeFromGpToManual = () => {
    setMedicalPractice(null);
    setManualInput(true);
  };

  if (data?.getMedicalPractices.length >= 0 && data.getMedicalPractices.length !== practices.length && called) {
    setPractices(
      data.getMedicalPractices.map((practice: MedicalPractices) => ({
        ...practice,
        onPress: () => {
          onCompletePractise(practice);
          setMedicalPractice(practice);
        },
        icon: <MedicalPracticeIcon />,
        text: getPracticeAddress(practice),
      }))
    );
  }

  if (manualInput) {
    return <GpManualEntry key={"gp-manual-entry"} fields={fields} onUpdateFormField={onUpdateFormField} />;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.searchWrapper}>
        <View style={styles.titleWrapper}>
          <TextTemplate type="h3">Local medical practice:</TextTemplate>
        </View>
        <TextInput
          style={[styles.searchInput, textInputStyles]}
          onChangeText={onChangeText}
          value={medicalPractice ? getPracticeAddress(medicalPractice)[0] : name}
          autoFocus={false}
          editable={!medicalPractice}
          selectionColor={Colours.primary.p200}
          testID={SEARCH_INPUT}
        />
      </View>
      {!medicalPractice ? (
        <GpSearchList
          practices={practices}
          networkStatus={networkStatus}
          loading={loading}
          emptyElement={<GpNoResults setManualInput={setManualInput} onLoad={onLoad} />}
        />
      ) : (
        <GpDoctorDetails
          onSelectGp={onSelectGp}
          selectedPractice={medicalPractice}
          selectedGp={gp}
          setManualInput={changeFromGpToManual}
        />
      )}
    </View>
  );
});

const getPracticeAddress = (practice: MedicalPractices): [string, string, string] => {
  const practiceTown =
    practice.address4 || practice.address5
      ? `${practice.address4 ?? ""} ${practice.address5 ?? ""}`
      : practice.address3;
  const address3 = practice.address4 && practice.address5 && practice.address3 ? `${practice.address3}` : "";
  const firstLine = practice.name;
  const secondLine = `${practice.address1} ${practice.address2} ${address3}`;
  const thirdLine = `${practiceTown}, ${practice.postCode}`;
  return [firstLine, secondLine, thirdLine];
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderBottomWidth: 2,
    color: Colours.neutral.n800,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.adjust(16),
  },
  searchWrapper: {
    paddingTop: Style.adjust(32),
    paddingBottom: Style.adjust(36),
    paddingHorizontal: Style.adjust(24),
    borderColor: Colours.neutral.n100,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  titleWrapper: {
    marginBottom: Style.adjust(24),
  },
  wrapper: {
    marginTop: -20,
  } as ViewStyle,
});
