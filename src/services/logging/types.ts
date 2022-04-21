export type AppDebugMixpanelEvent = {
  location: "fitkit" | "redux";
  type: string;
  reduxEvent?: string;
  payload?: any;
  timestamp?: string;
};

export type MixpanelEventMetadata = AppDebugMixpanelEvent | Record<string, any>;

export type MixpanelEvent =
  | "accordion_interaction"
  | "active_boosts_viewed"
  | "app_debug"
  | "armour_inspected"
  | "avatar_save"
  | "button_pressed"
  | "customer_cover_viewed"
  | "debug_tool_query_args"
  | "debug_tool_query_results"
  | "document_viewed"
  | "end_challenge_result"
  | "end_challenge_triggered"
  | "faq_viewed"
  | "information_viewed"
  | "initial_pedometer_steps_set"
  | "invalid_pedometer_steps"
  | "modal_close"
  | "modal_dismissed"
  | "modal_movement"
  | "modal_viewed"
  | "package_inspected"
  | "permission_requested"
  | "question_interaction"
  | "referral_link_copied"
  | "referral_link_shared"
  | "referrals_viewed"
  | "rewards_details_button_pressed"
  | "rewards_details_button_pressed_error"
  | "reward_viewed"
  | "screen_view"
  | "settings_toggle"
  | "survey_completed"
  | "user_action"
  | "user_connection_state"
  | "wellbeing_item_button_pressed"
  | "wellbeing_item_button_pressed_error";
