import React, { useEffect, memo, FC } from "react";
import { SvgCss, UriProps } from "react-native-svg";
import { connect, ConnectedProps } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { fetchAvatar } from "@redux/avatar-cache/avatar-cache.actions";
import { getCachedAvatarSelector } from "@redux/avatar-cache/avatar-cache.selectors";
import { AvatarEmpty } from "@molecules";

type OwnProps = UriProps;

type Props = OwnProps & ConnectedProps<typeof redux>;

const AvatarCachedSvg: FC<Props> = ({ uri, xml, fetchAvatar: fetchAvatarAction, ...props }) => {
  useEffect(() => {
    if (!xml && uri && fetchAvatarAction) {
      fetchAvatarAction({ uri });
    }
  }, [xml, fetchAvatarAction, uri]);

  if (!xml) {
    return <AvatarEmpty {...props} />;
  }

  return <SvgCss xml={xml} override={props} />;
};

const redux = connect(
  (state: IReduxState, props: OwnProps) => ({
    xml: getCachedAvatarSelector(state, props.uri),
  }),
  {
    fetchAvatar,
  }
);

const arePropsSame = (prev: Props, next: Props) => !!prev.xml === !!next.xml;

export default redux(memo(AvatarCachedSvg, arePropsSame));
