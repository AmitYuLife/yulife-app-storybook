
export interface IDatabaseRecord {
    collection: DatabaseCollection;
    data: { _id: string } & object;
}

// add collection names here

export enum DatabaseCollection {
    auths = "auths",
    challenges = "challenges",
    challengetemplates = "challengetemplates",
    coinledgers = "coinledgers",
    collection = "collection",
    core_coin_multipliers = "core_coin_multipliers",
    core_runner_businesses = "core_runner_businesses",
    core_streaks = "core_streaks",
    coupons = "coupons",
    devices = "devices",

    users = "users",
    map_level_slot_templates = "map_level_slot_templates",
    map_milestone_templates = "map_milestone_templates",
    history_user_consents = "history_user_consents",
    user_leaderboards = "user_leaderboards",
    user_consents = "user_consents"
}
