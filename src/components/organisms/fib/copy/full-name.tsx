import React from "react";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getFullName } from "@redux/product/product.selectors";
import { Text } from "@atoms";
import { styles } from "./common.styles";

type ConnectedProps = ReturnType<typeof mapStateToProps>;

const _CopyFullName = ({ fullName }: ConnectedProps) => {
  return (
    <Text bold={true} style={[styles.bold, styles.margin]}>
      {fullName}
    </Text>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  fullName: getFullName(state),
});

export const CopyFullName = connect(mapStateToProps)(_CopyFullName);
