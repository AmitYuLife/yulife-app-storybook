import React, { ReactNode, memo, useCallback, useMemo, useState } from "react";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import GenericSelectorItem from "./generic-selector-item";
import { Button } from "@components/molecules";
import { Box } from "@atoms";

interface IItem<T> {
  label: string;
  value: T;
}

interface IGenericSelectorProps<T> {
  items: IItem<T>[];
  buttonLabel?: string;
  onClose?: () => void;
  defaultValue?: T;
  onConfirm: (item: T) => void;
}

const keyExtractor = (item: Omit<IItem<unknown>, "value">) => item.label;

const GenericSelectorModal = <T,>({
  items,
  buttonLabel,
  onClose,
  onConfirm,
  defaultValue,
}: IGenericSelectorProps<T>) => {
  const [activeItem, setActiveItem] = useState(defaultValue);

  const data = useMemo(() => {
    return items.map((item) => ({
      label: item.label,
      onPress: () => {
        setActiveItem(item.value);
      },
      isActive: item.value === activeItem,
    }));
  }, [activeItem, items]);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<(typeof data)[0]>) => {
    return <GenericSelectorItem label={item.label} onPress={item.onPress} isActive={item.isActive} />;
  }, []);

  const onPress = useCallback(() => {
    onConfirm(activeItem);
    onClose();
  }, [activeItem, onClose, onConfirm]);

  return (
    <Box flex={1} mb={40} px={24}>
      <FlashList
        data={data}
        refreshing={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
      <Button testID="generic-selector-confirm" onPress={onPress} translatedLabel={buttonLabel} />
    </Box>
  );
};

export default memo(GenericSelectorModal) as <T>(props: IGenericSelectorProps<T>) => ReactNode;
