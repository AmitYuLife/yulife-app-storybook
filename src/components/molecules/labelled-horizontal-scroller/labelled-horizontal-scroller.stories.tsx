import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView, TouchableOpacity, View } from "react-native";
import LabelledHorizontalScroller from "./labelled-horizontal-scroller";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms";
import { useState } from "@storybook/addons";

storiesOf("LabelledHorizontalScroller", module).add("default", () => {
  const items = Array.from({ length: 30 }).map((_, i) => ({ label: i.toString(), value: i }));
  const [activeValue, setActiveValue] = useState(20);

  const handleIndexChange = (index: number) => {
    setActiveValue(items[index].value);
  };

  return (
    <ScrollView>
      <View style={{ height: Style.DEVICE_HEIGHT / 3 }} />
      <View style={{ paddingHorizontal: 24 }}>
        <TextTemplate type="h1">{`Active value: ${activeValue}`}</TextTemplate>
      </View>
      <View style={{ flexDirection: "row" }}>
        {items.slice(0, 3).map(({ value }, i) => (
          <TouchableOpacity
            key={i}
            style={{
              flex: 1,
              backgroundColor: activeValue === value ? Colours.primary.p600 : Colours.neutral.n800,
              justifyContent: "center",
              alignItems: "center",
              padding: 24,
            }}
            onPress={() => setActiveValue(value)}
          >
            <TextTemplate type="b1b" color={Colours.neutral.white}>
              {i}
            </TextTemplate>
          </TouchableOpacity>
        ))}
      </View>
      <LabelledHorizontalScroller
        label="What age would you like your policy to stop?**"
        items={items}
        onIndexChange={handleIndexChange}
        style={{ marginHorizontal: 24 }}
        activeValue={activeValue}
      />
    </ScrollView>
  );
});
