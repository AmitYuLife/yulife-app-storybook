import { useEffect } from "react";
import { useUserFeatures } from "./useUserFeatures";
import { addMessageReplyListener } from "@yu-life/react-native-yu-watch";
import { isiOS } from "@utils";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { getToken } from "@services/storage";
import { getCurrentLocale, region } from "@locale";
import Config from "react-native-config";
import Logger from "@services/logging/logger";
import { getUserDataStart, getUserStart } from "@redux/user/user.actions";
import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";

const SENSITIVE_FIELDS = ["token", "client_token", "mixpanel_token"];

const NOT_IMPLEMENTED_DATA_TYPES = ["challengesDoneToday"];

export const useYuWatch = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUserId);
  const { tempGameEnableYuWatch, tempGameEnableYuWatchUsage } = useUserFeatures();

  useEffect(() => {
    if (!tempGameEnableYuWatch || !isiOS()) {
      return;
    }

    const authTokenListener = addMessageReplyListener("GetAuthToken", async (_, reply) => {
      if (!tempGameEnableYuWatchUsage) {
        Logger.logEvent("watch_login_fail", {
          message: "User tried to login on watch, but tempGameEnableYuWatchUsage isn't enabled",
        });

        reply({ error: "notAvailable" });
        return;
      }

      const token = await getToken();
      const url = region.getRegionUri();

      const response = {
        token,
        api_url: `${url}/graphql`,
        user_id: currentUserId,
        client_token: Config.YU_CLIENT_TOKEN,
        mixpanel_token: region.getConfig("mixpanelKey"),
        locale: getCurrentLocale(),
      };

      Logger.logEvent("watch_login", {
        message: "User logged in on watch",
        data: {
          ...response,
          ...SENSITIVE_FIELDS.reduce((acc, field) => {
            acc[field] = "hidden";
            return acc;
          }, {} as Record<string, string>),
        },
      });

      reply(response);
    });

    const appDataListener = addMessageReplyListener("RefetchAppData", (replyData) => {
      if (!Array.isArray(replyData?.dataTypes)) {
        return;
      }

      const appDataTypes = replyData.dataTypes.filter(
        (dataType: string) => !NOT_IMPLEMENTED_DATA_TYPES.includes(dataType)
      );

      if (!isEmpty(appDataTypes)) {
        dispatch(getUserDataStart({ types: appDataTypes }));
      }

      if (appDataTypes.length !== replyData.dataTypes.length) {
        // TODO: this should be removed when AppDataType.challengesDoneToday is implemented
        // currently challengesDoneToday is a user resolver rather than a query, so we need to refetch everything
        dispatch(getUserStart());
      }
    });

    return () => {
      authTokenListener.remove();
      appDataListener.remove();
    };
  }, [currentUserId, dispatch, tempGameEnableYuWatch, tempGameEnableYuWatchUsage]);
};
