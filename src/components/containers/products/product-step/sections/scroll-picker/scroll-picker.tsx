import { ScrollPickerModal } from "@components/modals";
import React, { useContext, useState } from "react";
import { IProductStepScrollPicker, ProductStepContext } from "../../product-step.context";

export const ProductStepScrollPicker = () => {
  const { scrollPicker, setScrollPicker, dynamicData, setDynamicData } = useContext(ProductStepContext);
  const [state, setState] = useState<Record<string, string | number>>({});

  if (!scrollPicker) {
    return null;
  }

  const { variants, activeVariantIndex, answerKey, displayFormat } = scrollPicker;
  const variant = variants[activeVariantIndex];

  const pickers = variant.wheels.map((wheel) => {
    const items = Array.from({ length: wheel.max - wheel.min + 1 }).map((_, i) => {
      const value = i + wheel.min;
      const labelSuffix = value === wheel.suffixSingularValue ? wheel.suffixSingular : wheel.suffixPlural;

      return {
        value,
        label: `${value} ${labelSuffix}`,
      };
    });

    const defaultIndex = !dynamicData[wheel.answerKey]
      ? 0
      : items.findIndex((item) => item.value === dynamicData[wheel.answerKey]);

    return {
      defaultIndex,
      items,
      onIndexChange: (index: number) =>
        setState((oldState) => ({
          ...oldState,
          ...(variant.answerKey ? { [variant.answerKey]: variant.id } : {}),
          [wheel.answerKey]: items[index].value,
        })),
    };
  });

  return (
    <>
      {scrollPicker.variants.map((item, i) =>
        i !== activeVariantIndex ? null : (
          <ScrollPickerModal
            key={item.id}
            pickers={pickers}
            toggle={() => {
              setScrollPicker((oldState) => ({ ...oldState, activeVariantIndex: item.toggleIndex }));
              setState({});
            }}
            toggleLabel={variant.toggleLabel}
            onConfirm={() => {
              setDynamicData({ ...state, [answerKey]: buildLabel(state, displayFormat) });
              setScrollPicker(null);
              setState({});
            }}
            onCancel={() => setScrollPicker(null)}
            confirmLabel={scrollPicker.pickerConfirmButtonLabel}
            cancelLabel={scrollPicker.pickerCancelButtonLabel}
          />
        )
      )}
    </>
  );
};

const buildLabel = (
  data: Record<string, string | number>,
  displayFormat: IProductStepScrollPicker["displayFormat"]
) => {
  const activeFormat = displayFormat.find((f) =>
    f.filter((i) => i.isDynamic).every((i) => typeof data[i.answerKey] !== "undefined")
  );

  if (activeFormat) {
    return activeFormat.reduce((str, i) => {
      const value = data[i.answerKey];

      if (i.isDynamic) {
        return `${str}${value}`;
      }

      if (i.singular && i.singularValue && value === i.singularValue) {
        return `${str}${i.singular}`;
      }

      if (i.plural) {
        return `${str}${i.plural}`;
      }

      return str;
    }, "");
  }

  return "";
};
