import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { AvatarPartType } from "@graphql/_core/schema/globalTypes";
import { IBodyItemCategory } from "@redux/avatar/avatar.all.data";
import { BodyColor, ColorItem, EyesItem, FacialHairItem, GlassesItem, HairItem, SavingItem } from "../svg/body-items";
import styles from "./body-item.styles";
import { Category } from "./avatar.types";

export type BodyItemType = "Body" | "Hair" | "FacialHair" | "Eyes" | "Glasses";

interface IProps {
  selected: boolean;
  bodyItemType: AvatarPartType;
  onlyColor?: boolean;
  bodyCategory: IBodyItemCategory;
  onItemPress: (botyItemType: AvatarPartType, category: Category, itemsTitle: string) => void;
}

function BodyItem(props: IProps) {
  const [isItemSelected, setIsItemSelected] = React.useState(true);

  const { selected, bodyItemType, bodyCategory } = props;
  const twoCategoryShouldBeDisplayed = bodyCategory.bodyItems.length === 2;
  const hasItems = bodyCategory.bodyItems.some((e) => e.id === "items");
  const hasColors = bodyCategory.bodyItems.some((e) => e.id === "colors");
  const colorItemTitle = hasColors ? bodyCategory.bodyItems.filter((e) => e.id === "colors")[0].itemTitle : "";
  const itemTitle = hasItems ? bodyCategory.bodyItems.filter((e) => e.id === "items")[0].itemTitle : "";
  const doubleItemColor = isItemSelected && selected ? "#F9BDD9" : "#7b8590";
  const singleItemColor = selected ? "#F9BDD9" : "#7b8590";

  const handleOnItemPressed = (itemTitle: string) => () => {
    props.onItemPress(props.bodyItemType, "items", itemTitle);
    setIsItemSelected(true);
  };

  const handleOnColorPressed = (colorItemTitle: string) => () => {
    props.onItemPress(props.bodyItemType, "colors", colorItemTitle);
    setIsItemSelected(false);
  };

  return (
    <View style={selected && twoCategoryShouldBeDisplayed ? styles.bodyItemWrapperSelected : styles.bodyItemWrapper}>
      {!hasItems ? null : (
        <TouchableOpacity onPress={handleOnItemPressed(itemTitle)}>
          {getBodyItem(bodyItemType, doubleItemColor)}
        </TouchableOpacity>
      )}

      {hasColors && hasItems && selected ? (
        <TouchableOpacity onPress={handleOnColorPressed(colorItemTitle)}>
          <ColorItem color={isItemSelected ? "#7b8590" : "#F9BDD9"} />
        </TouchableOpacity>
      ) : null}

      {hasColors && !hasItems ? (
        <TouchableOpacity onPress={handleOnColorPressed(colorItemTitle)}>
          {getBodyItem(bodyItemType, singleItemColor)}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

function getBodyItem(bodyItem: AvatarPartType, color: string) {
  const items: any = {
    body: <BodyColor color={color} />,
    hair: <HairItem color={color} />,
    facialHair: <FacialHairItem color={color} />,
    eyes: <EyesItem color={color} />,
    glasses: <GlassesItem color={color} />,
  };

  return items[bodyItem] ?? <SavingItem color={color} />;
}

export default BodyItem;
