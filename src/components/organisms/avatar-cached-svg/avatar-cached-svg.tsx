import React, { useEffect, memo, useState } from "react";
import { SvgCss, UriProps } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { cacheAvatar, IAvatarCacheItem } from "@redux/avatar-cache/avatar-cache.actions";
import { AvatarEmpty } from "@molecules";

function _AvatarCachedSvg(props: UriProps) {
  const { uri } = props;
  const [key] = useState(uri.split(".svg")[0]);
  const avatarFromCache = useSelector<IReduxState, IAvatarCacheItem>(
    (state) => state.avatarCache[key],
    (left, right) => left.xml?.length === right.xml?.length
  );
  const dispatch = useDispatch();

  const avatar = avatarFromCache || { isLoading: true, xml: null };

  useEffect(() => {
    let isMounted = true;

    if (uri && !avatar.xml) {
      // TODO: use blob fetch and remove redux?
      fetch(uri)
        .then((response) => response.text())
        .then((data) => {
          if (isMounted) {
            dispatch(cacheAvatar({ key, xml: data }));
          }
        })
        .catch(() => {
          // do nothing
        });
    }

    return () => {
      isMounted = false;
    };
  }, [uri, key, avatar.xml, dispatch]);

  if (avatar.isLoading || !avatar.xml) {
    return <AvatarEmpty {...props} />;
  }

  return <SvgCss xml={avatar.xml} override={props} />;
}

const AvatarCachedSvg = memo(_AvatarCachedSvg);

export default AvatarCachedSvg;
