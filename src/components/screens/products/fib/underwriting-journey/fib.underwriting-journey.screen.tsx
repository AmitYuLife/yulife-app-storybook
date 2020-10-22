import React, { memo } from "react";
import { View, StyleSheet, ScrollView, ViewStyle } from "react-native";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import TitleWithIcon from "@atoms/fib/title-with-icon/title-with-icon";
import FibTitle from "@atoms/fib/title/title";
import Footer from "./subcomponents/footer/footer";
import { FibUnderwritingJourneyLayout } from "../layouts/fib.underwriting-journey-layout";
import {
  UnderwritingJourneyScreen,
  UnderwritingJourneyChild,
} from "@components/containers/products/fib/data/underwriting-journey-data";
import {
  MedicalHistoryItem,
  IMedicalHistoryItemProps,
} from "../../../../atoms/fib/medical-history-item/medical-history-item";
import MarkdownFib from "../../../../atoms/fib/markdown/markdown";
import { IMarkdownFibProps } from "../../../../atoms/fib/markdown/markdown";
import { FibInputBirth } from "@components/organisms/fib/input/birth/fib-input-birth";
import { FibInputHeight } from "@components/organisms/fib/input/height/fib-input-height";
import { FibInputName } from "@components/organisms/fib/input/name/fib-input-name";
import { FibInputWeight } from "@components/organisms/fib/input/weight/fib-input-weight";
import { getCustomComponent } from "./getCustomComponent";
import MedicalChipList from "./subcomponents/medical-chip-list/medical-chip-list";
import { AlcoholIntakeInput } from "@components/organisms/fib/input/alcohol/alcohol-intake-input";
import { CopyBirthday } from "@organisms/fib/copy/birthday";
import { CopyFullName } from "@organisms/fib/copy/full-name";
import RadioInput from "../feedback-form/radio-input";

export interface IFibUnderwritingJourneyScreenProps {
  onNavigateBack: () => void;
  data: UnderwritingJourneyScreen;
  onFirstButtonPressed: () => void;
  onSecondButtonPressed?: () => void;
  onPreviousButtonPressed?: () => void;
  progressBar: {
    maxLength: number;
    currentPosition: number;
    isHidden: boolean;
  };
  disableFirstButton?: boolean;
  inputFirstName?: string;
  inputLastName?: string;
  setInputFirstName?: (text: string) => void;
  setInputLastName?: (text: string) => void;
  disableSecondButton?: boolean;
  radioInputValue?: string;
  setRadioInputValue?: (text: string) => void;
}

const _FibUnderwritingJourneyScreen = memo(function (props: IFibUnderwritingJourneyScreenProps) {
  const {
    onNavigateBack,
    data,
    onFirstButtonPressed,
    onSecondButtonPressed,
    onPreviousButtonPressed,
    disableFirstButton,
    inputFirstName,
    inputLastName,
    setInputFirstName,
    setInputLastName,
    disableSecondButton,
    radioInputValue,
    setRadioInputValue,
  } = props;

  const backHandler = React.useCallback(() => {
    onPreviousButtonPressed();
    return true;
  }, [onPreviousButtonPressed]);

  useBackHandler(backHandler);

  const firstButton = { action: onFirstButtonPressed, label: data.firstButton.label, disabled: disableFirstButton };

  const secondButton = !onSecondButtonPressed
    ? null
    : { action: onSecondButtonPressed, label: data.secondButton.label, disabled: disableSecondButton };

  const CustomComponent = getCustomComponent(data.id);

  if (CustomComponent) {
    return <CustomComponent {...props} />;
  }

  return (
    <FibUnderwritingJourneyLayout
      heading={data.heading}
      onClose={onNavigateBack}
      progressBar={props.progressBar}
      onPreviousQuestion={onPreviousButtonPressed}
      hideHeadingBorder={!props.progressBar.isHidden}
    >
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.wrapper}>
        <TitleWithIcon icon={data.icon} title={data.title} />
        <FibTitle title={data.question} isLarge={data.isTitleLarge} />
        {data.children?.map((child: UnderwritingJourneyChild, i) => {
          const key = data.id + i;
          return renderChildren(child, key, {
            inputFirstName,
            inputLastName,
            setInputFirstName,
            setInputLastName,
            radioInputValue,
            setRadioInputValue,
          });
        })}
        <View style={{ height: Footer.HEIGHT }} />
      </ScrollView>
      <Footer firstButton={firstButton} secondButton={secondButton} />
    </FibUnderwritingJourneyLayout>
  );
});

export const FibUnderwritingJourneyScreen = memo(_FibUnderwritingJourneyScreen);

interface RenderChildrenExtraProps {
  inputFirstName?: string;
  inputLastName?: string;
  setInputFirstName?: (text: string) => void;
  setInputLastName?: (text: string) => void;
  radioInputValue?: string;
  setRadioInputValue?: (value: string) => void;
}

function renderChildren(child: UnderwritingJourneyChild, key: string, extraProps: RenderChildrenExtraProps) {
  const FIELDS: Record<string, React.ReactNode> = {
    medicalHistory: <MedicalHistoryItem {...(child as IMedicalHistoryItemProps)} key={key} />,
    markdown: <MarkdownFib {...(child as IMarkdownFibProps)} key={key} />,
    inputBirth: <FibInputBirth key={key} />,
    inputHeight: <FibInputHeight key={key} />,
    inputWeight: <FibInputWeight key={key} />,
    inputFullName: (
      <FibInputName
        key={key}
        setInputFirstName={extraProps.setInputFirstName}
        inputFirstName={extraProps.inputFirstName}
        setInputLastName={extraProps.setInputLastName}
        inputLastName={extraProps.inputLastName}
      />
    ),
    chiplist: <MedicalChipList items={child.chips} columns={2} key={key} />,
    inputAlcohol: <AlcoholIntakeInput key={key} />,
    copyBirthday: <CopyBirthday key={key} />,
    copyFullName: <CopyFullName key={key} />,
    radioInput: (
      <RadioInput
        key={key}
        options={child.radioInputOptions}
        selectedValue={extraProps.radioInputValue}
        onChange={extraProps.setRadioInputValue}
        styles={styles.radioInputStyles}
        extraVerticalPadding={4}
      />
    ),
  };
  return FIELDS[child.type] || null;
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 32,
  } as ViewStyle,
  radioInputStyles: {
    marginTop: 48,
  } as ViewStyle,
});
