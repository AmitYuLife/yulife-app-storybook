import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { minifiedFromNow } from "@utils";
import moment from "moment";

interface IProps {
  title: string;
  description: string;
  multiplier: string;
  endDateTime: string;
}

const SurgeModal = ({ title, description, multiplier, endDateTime }: IProps) => {
  const parser = description.split("$");
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.title}>
        <TextTemplate type={"h2"}>{title}</TextTemplate>
      </View>
      <TextTemplate type="b2" textAlign="center">
        {parser.map((text, index) => {
          if (text === "multiplier" || text === "endDateTime") {
            return (
              <TextTemplate key={index} type="b2b" color={Colours.products.fib.epic}>
                {text === "multiplier" ? multiplier : minifiedFromNow(moment(endDateTime))}
              </TextTemplate>
            );
          }

          return text;
        })}
      </TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    paddingHorizontal: Style.adjust(38),
  },
  title: {
    marginBottom: Style.adjust(25),
  },
});

export default memo(SurgeModal);
