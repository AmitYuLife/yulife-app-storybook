import { useContext, useState, useMemo } from "react";
import { ScrollPickerModal } from "@components/modals";
import { ContentItemScrollPickerFragment } from "@graphql/__generated";
import { DisplayFormat, ScrollPicker, Wheel } from "./contentItemScrollPicker.types";
import { SduiDispatchContext, SduiStateContext } from "../_context/SduiProvider";
import { t } from "@locale";

type Props = {
  configurationKey: string;
};

export const ContentItemScrollPicker = ({ configurationKey }: Props) => {
  const { dynamicData } = useContext(SduiStateContext);
  const dispatch = useContext(SduiDispatchContext);

  const scrollPicker = dynamicData[configurationKey] as unknown as ScrollPicker;

  const [state, setState] = useState<Record<string, string | number>>({});

  const pickers = useMemo(() => {
    if (!scrollPicker) {
      return [];
    }

    const { variants, activeVariantIndex } = scrollPicker;
    const variant = variants[activeVariantIndex];

    return variant.wheels.map((wheel: Wheel) => {
      const items = buildItems(wheel);
      const storedAnswer = dynamicData[wheel.answerKey] as number;
      const defaultIndex = getDefaultIndex({ items, storedAnswer, initialStepIndex: wheel.initialStepIndex });

      return {
        id: wheel.answerKey,
        defaultIndex,
        items,
        onIndexChange: (index: number) => {
          // Guard against invalid indices from overscroll
          if (index < 0 || index >= items.length) {
            return;
          }

          const selectedItem = items[index];
          if (!selectedItem || selectedItem.value === undefined) {
            return;
          }

          setState((oldState) => ({
            ...oldState,
            ...(variant.answerKey ? { [variant.answerKey]: variant.id } : {}),
            [wheel.answerKey]: items[index].value,
          }));
        },
      };
    });
  }, [scrollPicker]);

  if (!scrollPicker) {
    return null;
  }

  const { variants, activeVariantIndex, answerKey, displayFormat } = scrollPicker;

  return (
    <>
      {variants.map((item, i) =>
        i !== activeVariantIndex ? null : (
          <ScrollPickerModal
            key={item.id}
            pickers={pickers}
            chipsScrollToIndex={i}
            chips={variants.map((v, variantIndex) => ({
              value: v.chipLabel,
              isSelected: variantIndex === activeVariantIndex,
              onPress: () => {
                dispatch({
                  type: "UPDATE_DYNAMIC_DATA",
                  payload: {
                    [configurationKey]: {
                      ...scrollPicker,
                      activeVariantIndex: variantIndex,
                    },
                  },
                });
                setState({});
              },
            }))}
            onConfirm={() => {
              dispatch({
                type: "UPDATE_DYNAMIC_DATA",
                payload: {
                  ...state,
                  [answerKey]: buildDisplayButtonLabel(state, displayFormat),
                  [configurationKey]: null,
                },
              });
              setState({});
            }}
            onCancel={() => {
              dispatch({
                type: "UPDATE_DYNAMIC_DATA",
                payload: {
                  [configurationKey]: null,
                },
              });
              setState({});
            }}
            confirmLabel={scrollPicker.pickerConfirmButtonLabel}
            cancelLabel={scrollPicker.pickerCancelButtonLabel}
          />
        )
      )}
    </>
  );
};

const buildScrollItemLabel = (wheel: Wheel, value: number) => {
  if (wheel.suffixTranslationKey) {
    return t(wheel.suffixTranslationKey, { smart_count: value });
  }

  return `${value}`;
};

const buildDisplayButtonLabel = (data: Record<string, string | number>, displayFormat: DisplayFormat) => {
  const activeFormat = displayFormat.find((f) =>
    f.filter((i) => i.isDynamic).every((i) => typeof data[i.answerKey] !== "undefined")
  );

  if (activeFormat) {
    return activeFormat.reduce((str, i) => {
      const value = data[i.answerKey];

      if (i.smartCountTranslationKey) {
        const translation = t(i.smartCountTranslationKey, { smart_count: value });
        return str ? `${str} ${translation}` : translation;
      }

      return str;
    }, "");
  }

  return "";
};

const buildItems = (wheel: ContentItemScrollPickerFragment["variants"][0]["wheels"][0]) => {
  return Array.from({ length: wheel.max - wheel.min + 1 }).map((_, i) => {
    const value = i + wheel.min;

    return {
      value,
      label: buildScrollItemLabel(wheel, value),
    };
  });
};

const getDefaultIndex = ({
  storedAnswer,
  items,
  initialStepIndex,
}: {
  storedAnswer?: number;
  items: ReturnType<typeof buildItems>;
  initialStepIndex: number;
}) => {
  if (storedAnswer) {
    const storedAnswerIndex = items.findIndex((item) => item.value === storedAnswer);

    return Math.max(0, storedAnswerIndex);
  }

  return initialStepIndex || 0;
};
