import * as React from "react";
import { Box, TextTemplate } from "@atoms";
import { View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { memo, useCallback, useMemo, useState } from "react";
import { Button } from "@components/molecules";
import { useTranslation } from "@hooks";
import { useSelector } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import { useMutation, useQuery } from "@apollo/client";
import { gql, InventoryItemType } from "@graphql/__generated";
import AvatarFrameSelectItem from "./subcomponents/avatar-frame-select-item";
import { FloatingModal } from "..";
import { isEmpty } from "lodash";
import Loading from "@atoms/loading/loading";

interface IFrameSelectModalProps {
  onClose: () => void;
  onChanged: () => void;
}

const AvatarFrameSelectModal = ({ onChanged, onClose }: IFrameSelectModalProps) => {
  const avatar = useSelector(getUserAvatar);
  const [equipItem, { loading }] = useMutation(gql(`EquipItemDocument`));
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);
  const avatarSource = useMemo(() => avatar?.avatarRemoteFiles?.pngMini, [avatar]);

  const t = useTranslation([
    "modals.leaderboards.frame_select.heading",
    "modals.leaderboards.frame_select.subheading",
    "modals.leaderboards.frame_select.confirm",
    "modals.leaderboards.frame_select.no_frames",
  ]);

  const { data: avatarFrames, loading: framesLoading } = useQuery(gql(`GetInventoryDocument`), {
    fetchPolicy: "cache-and-network",
    variables: { itemType: InventoryItemType.AvatarFrame },
  });

  const onFrameSelect = useCallback((frame: string) => {
    setSelectedFrame((prevFrame) => (frame === prevFrame ? null : frame));
  }, []);

  const onSubmit = useCallback(async () => {
    await equipItem({ variables: { itemType: InventoryItemType.AvatarFrame, itemId: selectedFrame } });
    onChanged();
    onClose();
  }, [equipItem, onClose, onChanged, selectedFrame]);

  return (
    <View style={styles.wrapper}>
      <FloatingModal showButton={false} closeOverlay={onClose} paddingTop={Style.adjust(42)} height={1}>
        <>
          <View style={styles.headerWrapper}>
            <View style={styles.titleContainer}>
              <TextTemplate type="h2" textAlign="center">
                {t["modals.leaderboards.frame_select.heading"]}
              </TextTemplate>
            </View>
            <TextTemplate type="b2" textAlign="center">
              {t["modals.leaderboards.frame_select.subheading"]}
            </TextTemplate>
          </View>
          <View style={styles.contentWrapper}>
            <Box flexDirection="row" center={true} flexWrap="wrap" gap={38}>
              {avatarFrames?.getInventory?.map(({ id, image, lottieUri }) => (
                <AvatarFrameSelectItem
                  key={id}
                  isActive={selectedFrame === id}
                  avatar={avatarSource}
                  onPress={() => onFrameSelect(id)}
                  frame={{ imageUri: image.uri, lottieUri: lottieUri }}
                />
              ))}
              {isEmpty(avatarFrames?.getInventory) && !framesLoading ? (
                <TextTemplate type="b2">{t["modals.leaderboards.frame_select.no_frames"]}</TextTemplate>
              ) : null}
            </Box>
            {framesLoading ? <Loading /> : null}
          </View>
          <View style={styles.confirmButton}>
            <Button translationKey="modals.leaderboards.frame_select.confirm" isLoading={loading} onPress={onSubmit} />
          </View>
        </>
      </FloatingModal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: Style.adjust(220),
    justifyContent: "flex-end",
  },

  confirmButton: {
    marginBottom: Style.adjust(25),
  },
  contentWrapper: {
    marginBottom: Style.adjust(50),
  },
  headerWrapper: {
    marginBottom: Style.adjust(50),
  },
  titleContainer: {
    marginBottom: Style.adjust(10),
  },
});

export default memo(AvatarFrameSelectModal);
