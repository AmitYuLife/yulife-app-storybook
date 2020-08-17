import React from "react";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getBirthday } from "@redux/product/product.selectors";
import { Text } from "@atoms";
import { styles } from "./common.styles";

type ConnectedProps = ReturnType<typeof mapStateToProps>;

const _CopyBirthday = ({ birthday }: ConnectedProps) => {
  return (
    <Text bold={true} style={[styles.bold, styles.margin]}>
      {birthday}
    </Text>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  birthday: getBirthday(state),
});

export const CopyBirthday = connect(mapStateToProps)(_CopyBirthday);
