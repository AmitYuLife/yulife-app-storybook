import { CheckBoxType } from "@components/molecules";
import { Colours } from "@styles";
import ListItem from "./list-item";
import { Box } from "@atoms";
import { VoidFunction } from "@utils";

type Props = {
  disabled: boolean;
  name: string;
  uri: string;
  onPress: VoidFunction;
  checked: boolean;
};

export const GiftingListItem = ({ disabled, name, uri, onPress, checked }: Props) => (
  <Box h={45} mb={14}>
    <ListItem
      disabled={disabled}
      name={name}
      uri={uri}
      type="search"
      onPress={onPress}
      rightIcon={
        <CheckBoxType
          type={"cubic"}
          checked={checked}
          strokeColor={Colours.neutral.n400}
          activeCheckboxFillColor={Colours.primary.p600}
        />
      }
    />
  </Box>
);
