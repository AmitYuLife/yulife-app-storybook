import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native";
import { t } from "@locale";
import { getIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import styles, { NAV_BAR_ICON_SIZE } from "./assets.styles";
import { PressableWithDelay } from "@molecules";
import { TextTemplate } from "@atoms";

const Scroll = ({ isActive, onPressIn, hasNotification, isSuspended }: IIconProps) => {
  const fill = getIconColour(isActive, isSuspended);

  return (
    <PressableWithDelay delay={1000} style={styles.wrapper} onPress={onPressIn}>
      <Svg viewBox="0 0 24 24" width={NAV_BAR_ICON_SIZE} height={NAV_BAR_ICON_SIZE} testID={NAV_BAR("quests")}>
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M3.643 2.746C3.643 1.543 4.51.5 5.714.5H21.43v1H5.714c-.555 0-1.071.494-1.071 1.246v16.762h-1V2.746Z"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M19.357 2.746c0-1.203.867-2.246 2.072-2.246 1.204 0 2.07 1.043 2.07 2.246s-.866 2.246-2.07 2.246h-1.072v16.262h-1V2.746Zm1 1.246h1.071c.556 0 1.072-.493 1.072-1.246 0-.752-.516-1.246-1.071-1.246-.556 0-1.072.494-1.072 1.246v1.246Z"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M.5 21.254c0-1.203.867-2.246 2.071-2.246h17.286v1H2.571c-.555 0-1.071.493-1.071 1.246 0 .752.516 1.246 1.071 1.246h15.715c.555 0 1.071-.494 1.071-1.246h1c0 1.203-.867 2.246-2.071 2.246H2.57C1.367 23.5.5 22.457.5 21.254Z"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M18.286 20.008c-.556 0-1.072.493-1.072 1.246 0 .752.516 1.246 1.072 1.246.555 0 1.071-.494 1.071-1.246h1c0 1.203-.867 2.246-2.071 2.246-1.205 0-2.072-1.043-2.072-2.246s.867-2.246 2.072-2.246h1.571v1h-1.571ZM13.179 3.396a.5.5 0 0 1 .707 0l2.4 2.4a.5.5 0 0 1-.707.708l-2.4-2.4a.5.5 0 0 1 0-.708Z"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M16.286 3.396a.5.5 0 0 1 0 .708l-2.4 2.4a.5.5 0 1 1-.707-.708l2.4-2.4a.5.5 0 0 1 .707 0ZM12.649 7.039a.5.5 0 0 1 .07.704 1.543 1.543 0 0 0-.29.544.5.5 0 0 1-.956-.29c.094-.31.243-.61.472-.889a.5.5 0 0 1 .704-.069Zm-.828 2.225a.5.5 0 0 1 .525.474l.008.152c.025.47.053 1.006-.003 1.556a.5.5 0 1 1-.995-.101c.048-.469.024-.927-.001-1.407l-.008-.149a.5.5 0 0 1 .474-.525Zm-.194 3.246a.5.5 0 0 1 .202.678 4.779 4.779 0 0 1-.51.755.5.5 0 0 1-.774-.635c.166-.201.298-.4.405-.597a.5.5 0 0 1 .677-.2ZM8.97 15.25a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm-1.7.7a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0Z"
          clipRule="evenodd"
        />
      </Svg>
      {!hasNotification ? null : <View style={styles.notification} />}
      <View style={styles.text}>
        <TextTemplate type="l3b" color={fill} numberOfLines={1}>
          {t("navbar.quest.label")}
        </TextTemplate>
      </View>
    </PressableWithDelay>
  );
};

export default memo(Scroll);
