import { useEffect } from "react";
import { addMessageReplyListener } from "@yu-life/react-native-yu-watch";
import { isiOS } from "@utils";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { getToken } from "@services/storage";
import { getCurrentLocale, region } from "@locale";
import Config from "react-native-config";
import EngagementTracking from "@services/logging/engagement-tracking";
import { getUserDataStart } from "@redux/user/user.actions";
import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";

const SENSITIVE_FIELDS = ["token", "client_token", "mixpanel_token"];

export const useYuWatch = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUserId);

  useEffect(() => {
    if (!isiOS()) {
      return;
    }

    const authTokenListener = addMessageReplyListener("GetAuthToken", async (_, reply) => {
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

      EngagementTracking.logEvent("watch_login", {
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

      if (!isEmpty(replyData.dataTypes)) {
        dispatch(getUserDataStart({ types: replyData.dataTypes }));
      }
    });

    return () => {
      authTokenListener.remove();
      appDataListener.remove();
    };
  }, [currentUserId, dispatch]);
};
