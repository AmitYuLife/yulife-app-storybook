import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import React, { useState, useRef, useEffect } from "react";
import ReactNative, {
  Keyboard,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./products-survey.styles";
import Logger from "@services/logging/logger";
import ProductsSurveyGreetings from "./products-survey-greetings";
import { Colours } from "@styles";
import { SURVEY_SCREEN, SURVEY_TEXT_BOX } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { CheckBox } from "@molecules";

interface IProductSurvey {
  label: string;
  value: string;
}

const textAreaPlaceHolder = "Describe anything else you would like to see here...";

const products: IProductSurvey[] = [
  {
    label: "Bicycle insurance",
    value: "bicycleInsurance",
  },
  {
    label: "Car insurance (comprehensive)",
    value: "carInsuranceComprehensive",
  },
  {
    label: "Car insurance (pay for usage only)",
    value: "carInsurancePayUsageOnly",
  },
  {
    label: "Critical illness (pays a lump sum when you get sick)",
    value: "criticalIllnessPayLump",
  },
  {
    label: "Dental insurance",
    value: "dentalInsurance",
  },
  {
    label: "Gadget insurance (e.g. mobile phone, laptop, musical instrument etc.)",
    value: "gadgetInsurance",
  },
  {
    label: "Health cashplan",
    value: "healthCashplan",
  },
  {
    label: "Home content insurance (owner)",
    value: "homeContentInsuranceOwner",
  },
  {
    label: "Home content insurance (renter)",
    value: "homeContentInsuranceRenter",
  },
  {
    label: "Income protection (pays an income when you get sick)",
    value: "incomeProtectionPayOnSick",
  },
  {
    label: "Optical insurance",
    value: "opticalInsurance",
  },
  {
    label: "Pet insurance",
    value: "petInsurance",
  },
  {
    label: "Private medical insurance",
    value: "privateMedicalInsurance",
  },
  {
    label: "Travel insurance",
    value: "travelInsurance",
  },
];

interface IProps {
  onExitConfirmed: () => void;
}

function ProductsSurvey({ onExitConfirmed }: IProps) {
  const [productState, setProductState] = useState<string[]>([]);
  const [textAreaValue, setTextArea] = useState("");
  const [textAreaStyle, setTextAreaStyles] = useState(styles.textArea);
  const [screenGreetings, setScreenGreetings] = useState(false);
  const [scrollDone, setScrollDone] = useState(false);
  const [viewHeight, setViewHeight] = useState(0);

  // Handle keyboard
  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    const onKeyboardShow = (event: ReactNative.KeyboardEvent) => {
      const isRefDefined = scrollViewRef?.current?.scrollTo;
      const value = event.endCoordinates.height;

      if (!scrollDone && value && isRefDefined) {
        scrollViewRef.current.scrollTo({ y: viewHeight + event.endCoordinates.height });
        setScrollDone(true);
      }
    };

    const onKeyboardHide = () => {
      setScrollDone(false);
    };

    Keyboard.addListener("keyboardDidShow", onKeyboardShow);
    Keyboard.addListener("keyboardDidHide", onKeyboardHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", onKeyboardShow);
      Keyboard.removeListener("keyboardDidHide", onKeyboardHide);
    };
  }, [scrollDone, viewHeight]);

  const onScrollViewLayout = (event: ReactNative.LayoutChangeEvent) => {
    if (event.nativeEvent.layout.height && event.nativeEvent.layout.height > viewHeight) {
      setViewHeight(event.nativeEvent.layout.height);
    }
  };

  const onBackButton = () => {
    Keyboard.dismiss();
    return onExitConfirmed();
  };

  if (screenGreetings) {
    return <ProductsSurveyGreetings onExitConfirmed={onExitConfirmed} />;
  }

  const disableButton = productState.length < 1 && textAreaValue?.length < 1;

  const updateProductState = (value: string) => {
    const indexOfValue = productState.indexOf(value);

    if (indexOfValue !== -1) {
      const updatedArray = productState.filter((productValue) => productValue !== value);

      return setProductState(updatedArray);
    }

    return setProductState([...productState, value]);
  };

  const onSubmitButton = () => {
    const data = productState.reduce((acc: any, value) => {
      acc[value] = true;
      return acc;
    }, {});

    if (textAreaValue) {
      data.free_form_text = textAreaValue;
    }

    Logger.logEvent("app_product_survey", data);
    setScreenGreetings(true);
  };

  const onFocus = () => {
    setTextAreaStyles(StyleSheet.flatten([styles.textArea, styles.textAreaFocus]));
  };

  const onBlur = () => {
    setTextAreaStyles(styles.textArea);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.greetingsWrapper}>
      <GenericHeadingPad />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <ScrollView
          testID={SURVEY_SCREEN}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ref={scrollViewRef}
          onLayout={onScrollViewLayout}
        >
          <View style={styles.viewWrapper}>
            <View style={styles.headerTextWrapper}>
              <TextTemplate type="b2">
                We’d love to take your feedback onboard. Out of the following, which would you like to see covered?
              </TextTemplate>
            </View>
            <View style={styles.checkboxWrapper}>
              {products.map((item) => {
                return (
                  <CheckBox
                    checked={productState.includes(item.value)}
                    value={item.value}
                    key={item.value}
                    label={item.label}
                    onChange={updateProductState}
                  />
                );
              })}
            </View>
            <View style={styles.footerWrapper}>
              <TextInput
                key="textArea"
                placeholder={textAreaPlaceHolder}
                placeholderTextColor={Colours.lightGray}
                value={textAreaValue}
                multiline={true}
                onChangeText={setTextArea}
                numberOfLines={4}
                onFocus={onFocus}
                onBlur={onBlur}
                style={textAreaStyle}
                textAlignVertical="top"
                testID={SURVEY_TEXT_BOX}
              />
              <Button
                onPress={onSubmitButton}
                size="Medium"
                label="Submit"
                disabled={disableButton}
                wrapperStyle={styles.submitButton}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <GenericHeadingAbsolute heading="What would you like to see?" onLeftIconPress={onBackButton} />
    </View>
  );
}

export default ProductsSurvey;
