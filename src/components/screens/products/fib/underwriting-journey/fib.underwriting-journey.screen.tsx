import React, { memo, useRef, useEffect, useCallback, ComponentProps } from "react";
import { ScrollView, View, Keyboard } from "react-native";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
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
import { FibInputSalary } from "@components/organisms/fib/input/salary";
import { getCustomComponent } from "./getCustomComponent";
import MedicalChipList from "./subcomponents/medical-chip-list/medical-chip-list";
import { CopyBirthday } from "@organisms/fib/copy/birthday";
import { CopyFullName } from "@organisms/fib/copy/full-name";
import RadioInput from "../feedback-form/radio-input";
import { FibInputAlcohol } from "@organisms/fib/input/alcohol/fib-input-alcohol";
import { styles, getChildWrapperStyle } from "./fib.underwriting-journey.styles";
import { YugiType } from "../layouts/yugi";
import { CopyIntro } from "@organisms/fib/copy/intro";
import GenderQuestion from "./subcomponents/gender/gender-question";
import { ProgressBar } from "@components/molecules";

export interface IFibUnderwritingJourneyScreenProps {
  onNavigateBack: () => void;
  data: UnderwritingJourneyScreen;
  onFirstButtonPressed: () => void;
  onSecondButtonPressed?: () => void;
  onPreviousButtonPressed?: () => void;
  disableFirstButton?: boolean;
  inputFirstName?: string;
  inputLastName?: string;
  setInputFirstName?: (text: string) => void;
  setInputLastName?: (text: string) => void;
  disableSecondButton?: boolean;
  radioInputValue?: string;
  setRadioInputValue?: (text: string) => void;
  progressBarHideType: ComponentProps<typeof ProgressBar>["hideType"];
  salary?: number;
  setInputSalary?: (salary: number) => void;
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
    progressBarHideType,
    salary,
    setInputSalary,
  } = props;
  const scrollViewRef = useRef(null as ScrollView);
  const timer = useRef(null as ReturnType<typeof setTimeout>);

  function handleResetScroll() {
    if (scrollViewRef?.current?.scrollTo) {
      timer.current = setTimeout(() => {
        scrollViewRef.current.scrollTo({ y: 0 });
      }, 0);
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
      timer.current = null;
    };
  }, []);

  const handleScrollToKeyboardOffset = useCallback(() => {
    if (scrollViewRef?.current) {
      scrollViewRef.current.scrollTo({ y: 200 });
    }
  }, [scrollViewRef]);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleScrollToKeyboardOffset);
    return () => {
      Keyboard.removeListener("keyboardDidShow", handleScrollToKeyboardOffset);
    };
  }, [handleScrollToKeyboardOffset]);

  const backHandler = React.useCallback(() => {
    onPreviousButtonPressed();
    handleResetScroll();
    return true;
  }, [onPreviousButtonPressed]);

  useBackHandler(backHandler);

  const firstButton = {
    action: () => {
      onFirstButtonPressed();
      handleResetScroll();
    },
    label: data.firstButton.label,
    disabled: disableFirstButton,
  };

  const secondButton = !onSecondButtonPressed
    ? null
    : { action: onSecondButtonPressed, label: data.secondButton.label, disabled: disableSecondButton };

  const CustomComponent = getCustomComponent(data.id);

  if (CustomComponent) {
    return <CustomComponent {...props} />;
  }

  return (
    <FibUnderwritingJourneyLayout
      centreLogo="yulife"
      onClose={onNavigateBack}
      progressBarHideType={progressBarHideType}
      onPreviousQuestion={onPreviousButtonPressed}
      yugi={YugiType.DEFAULT}
    >
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <View style={styles.topPad} />
        {!data?.question ? null : <FibTitle title={data.question} />}
        {data.children?.map((child: UnderwritingJourneyChild, i) => {
          const key = data.id + i;
          return (
            <View style={getChildWrapperStyle(child.type)} key={key}>
              {renderChildren(child, {
                inputFirstName,
                inputLastName,
                setInputFirstName,
                setInputLastName,
                radioInputValue,
                setRadioInputValue,
                salary,
                setInputSalary,
              })}
            </View>
          );
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
  salary?: number;
  setInputSalary?: (salary: number) => void;
}

function renderChildren(child: UnderwritingJourneyChild, extraProps: RenderChildrenExtraProps) {
  const FIELDS: Record<string, React.ReactNode> = {
    medicalHistory: <MedicalHistoryItem {...(child as IMedicalHistoryItemProps)} />,
    markdown: <MarkdownFib {...(child as IMarkdownFibProps)} />,
    inputBirth: <FibInputBirth />,
    inputHeight: <FibInputHeight />,
    inputWeight: <FibInputWeight />,
    inputSalary: <FibInputSalary setInputSalary={extraProps.setInputSalary} salary={extraProps.salary} />,
    inputFullName: (
      <FibInputName
        setInputFirstName={extraProps.setInputFirstName}
        inputFirstName={extraProps.inputFirstName}
        setInputLastName={extraProps.setInputLastName}
        inputLastName={extraProps.inputLastName}
      />
    ),
    chiplist: <MedicalChipList items={child.chips} columns={2} />,
    inputAlcohol: <FibInputAlcohol />,
    copyBirthday: <CopyBirthday />,
    copyFullName: <CopyFullName />,
    copyIntro: <CopyIntro />,
    radioInput: (
      <RadioInput
        options={child.radioInputOptions}
        selectedValue={extraProps.radioInputValue}
        onChange={extraProps.setRadioInputValue}
        styles={styles.radioInputStyles}
        extraVerticalPadding={4}
      />
    ),
    gender: <GenderQuestion />,
  };
  return FIELDS[child.type] || null;
}
