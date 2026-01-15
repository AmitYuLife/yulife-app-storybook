import { useCallback, useMemo, memo } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { Navigation } from "@navigation/main";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { Box, TextTemplate } from "@atoms";
import { ScrollView, TouchableOpacity } from "react-native";
import { GenericHeadingAbsolute } from "@organisms";
import { Colours, Style, TOP_BAR, StyleSheet } from "@styles";
import Clipboard from "@react-native-clipboard/clipboard";
import { gql } from "@graphql/__generated";

interface UserInfoContainerProps {
  componentId: string;
}

interface InfoItem {
  id: string;
  title: string;
  value: string;
}

interface InfoRowProps {
  item: InfoItem;
}

const InfoRow = ({ item }: InfoRowProps) => {
  const handleCopy = useCallback(() => {
    Clipboard.setString(item.value);
  }, [item.value]);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      pv={12}
      borderBottomWidth={1}
      borderColor={Colours.debug.bottomBorder}
    >
      <Box flex={1}>
        <TextTemplate type="b2b">{item.title}</TextTemplate>
        <TextTemplate type="b2" color={Colours.neutral.n600}>
          {item.value}
        </TextTemplate>
      </Box>
      <TouchableOpacity onPress={handleCopy} style={styles.copyButton}>
        <TextTemplate type="b2b" color={Colours.neutral.white}>
          Copy
        </TextTemplate>
      </TouchableOpacity>
    </Box>
  );
};

const UserInfoContainer = ({ componentId }: UserInfoContainerProps) => {
  const currentUserId = useSelector(getCurrentUserId);
  const { data: businessData, loading } = useQuery(gql("GetLinkedBusinessesDocument"));

  const items = useMemo(() => {
    const infoItems: InfoItem[] = [
      {
        id: "user-id",
        title: "User ID",
        value: currentUserId ?? "No user ID found",
      },
    ];

    const linkedBusinesses = businessData?.getLinkedBusinesses || [];

    linkedBusinesses.forEach((business: { id: string; businessAccountId: string; businessAccountName: string }) => {
      infoItems.push({
        id: `business-${business.id}`,
        title: `Business Account ID: ${business.businessAccountName}`,
        value: business.businessAccountId,
      });
    });

    return infoItems;
  }, [currentUserId, businessData]);

  const onClose = useCallback(() => Navigation.pop(componentId), [componentId]);

  return (
    <Box>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
        {loading ? (
          <Box pv={12}>
            <TextTemplate type="b2" color={Colours.neutral.n600}>
              Loading...
            </TextTemplate>
          </Box>
        ) : (
          items.map((item) => <InfoRow key={item.id} item={item} />)
        )}
      </ScrollView>

      <GenericHeadingAbsolute heading="View User Info" onRightIconPress={onClose} />
    </Box>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
    paddingHorizontal: 16,
  },
  scrollView: {
    height: Style.DEVICE_HEIGHT,
  },
  copyButton: {
    marginLeft: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Colours.primary.p500,
    borderRadius: 8,
  },
});

export default memo(UserInfoContainer);
