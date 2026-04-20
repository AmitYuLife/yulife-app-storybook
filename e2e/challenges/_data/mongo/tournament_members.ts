import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1 } from "../postgres/business";
import { GOALS_TOURNAMENT } from "./goals_for_global";
import { CUSTOMER_76 } from "../postgres/customers";
import moment from "moment";

// ─── Team config ───

const TEAM_NAMES = [
  "Shoreditch",
  "Birmingham",
  "Babu House",
  "Manchester",
  "Edinburgh",
  "Bristol",
  "Leeds",
  "Cardiff",
];

const MEMBER_DATA = [
  { firstName: "James", lastName: "Wright", team: 0, score: 4200 },
  { firstName: "Sophie", lastName: "Chen", team: 0, score: 3800 },
  { firstName: "Oliver", lastName: "Murphy", team: 0, score: 3100 },
  { firstName: "Emma", lastName: "Wilson", team: 1, score: 3900 },
  { firstName: "Liam", lastName: "Patel", team: 1, score: 3500 },
  { firstName: "Ava", lastName: "Taylor", team: 1, score: 2800 },
  { firstName: "Noah", lastName: "Singh", team: 2, score: 3600 },
  { firstName: "Mia", lastName: "Brown", team: 2, score: 3200 },
  { firstName: "Jack", lastName: "Davies", team: 2, score: 2500 },
  { firstName: "Isla", lastName: "Johnson", team: 3, score: 3400 },
  { firstName: "Harry", lastName: "Williams", team: 3, score: 2900 },
  { firstName: "Emily", lastName: "Jones", team: 3, score: 2100 },
  { firstName: "George", lastName: "Scott", team: 4, score: 3000 },
  { firstName: "Amelia", lastName: "Campbell", team: 4, score: 2700 },
  { firstName: "Charlie", lastName: "Reid", team: 4, score: 1900 },
  { firstName: "Freya", lastName: "Thomas", team: 5, score: 2800 },
  { firstName: "Leo", lastName: "Evans", team: 5, score: 2400 },
  { firstName: "Grace", lastName: "Roberts", team: 5, score: 1600 },
  { firstName: "Alfie", lastName: "Walker", team: 6, score: 2500 },
  { firstName: "Poppy", lastName: "Hall", team: 6, score: 2100 },
  { firstName: "Archie", lastName: "Green", team: 6, score: 1400 },
  { firstName: "Rosie", lastName: "Lewis", team: 7, score: 2200 },
  { firstName: "Teddy", lastName: "Morgan", team: 7, score: 1800 },
  { firstName: "Lily", lastName: "Price", team: 7, score: 1100 },
];

const LOGIN_USER_SCORE = 2500;

// ─── Pre-generated IDs ───

const socialGroupIds = TEAM_NAMES.map(() => generateRandomMongoId());
const socialGroupDocIds = TEAM_NAMES.map(() => generateRandomMongoId());
const goalTeamIds = TEAM_NAMES.map(() => generateRandomMongoId());

// ─── Helpers ───

const now = () => moment().format("YYYY-MM-DDTHH:mm:ss");
const inDays = (d: number) => moment().add(d, "days").format("YYYY-MM-DDTHH:mm:ss");
const todayUtc = () => moment.utc().startOf("day").format("YYYY-MM-DD");
const futureUtc = (d: number) => moment.utc().add(d, "days").startOf("day").format("YYYY-MM-DD");

function teamTotal(teamIdx: number) {
  return MEMBER_DATA.filter((m) => m.team === teamIdx).reduce((s, m) => s + m.score, 0);
}

// ─── Social groups (teams) ───

const socialGroups: IDatabaseItem[] = TEAM_NAMES.map((name, i) => ({
  type: "mongo",
  modelName: "social_groups",
  data: {
    _id: socialGroupDocIds[i],
    socialGroupId: socialGroupIds[i],
    archived: false,
    socialGroupType: "business_tag",
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    name,
  },
}));

export const [
  TOURNAMENT_SOCIAL_GROUP_0,
  TOURNAMENT_SOCIAL_GROUP_1,
  TOURNAMENT_SOCIAL_GROUP_2,
  TOURNAMENT_SOCIAL_GROUP_3,
  TOURNAMENT_SOCIAL_GROUP_4,
  TOURNAMENT_SOCIAL_GROUP_5,
  TOURNAMENT_SOCIAL_GROUP_6,
  TOURNAMENT_SOCIAL_GROUP_7,
] = socialGroups;

// ─── Goal teams ───

const goalTeams: IDatabaseItem[] = TEAM_NAMES.map((_, i) => {
  const isLoginTeam = i === 0;
  const memberCount = MEMBER_DATA.filter((m) => m.team === i).length + (isLoginTeam ? 1 : 0);
  const total = teamTotal(i) + (isLoginTeam ? LOGIN_USER_SCORE : 0);

  return {
    type: "mongo",
    modelName: "goal_team",
    data: {
      _id: goalTeamIds[i],
      goal: GOALS_TOURNAMENT.data._id,
      teamName: TEAM_NAMES[i],
      createdAt: todayUtc(),
      membersCount: memberCount,
      overallProgress: total,
      completed: { passive_challenge_steps: total },
    },
  };
});

export const [
  TOURNAMENT_GOAL_TEAM_0,
  TOURNAMENT_GOAL_TEAM_1,
  TOURNAMENT_GOAL_TEAM_2,
  TOURNAMENT_GOAL_TEAM_3,
  TOURNAMENT_GOAL_TEAM_4,
  TOURNAMENT_GOAL_TEAM_5,
  TOURNAMENT_GOAL_TEAM_6,
  TOURNAMENT_GOAL_TEAM_7,
] = goalTeams;

// ─── Tournament document ───

export const TOURNAMENT_8_TEAMS: IDatabaseItem = {
  type: "mongo",
  modelName: "social_group_knockout_tournaments",
  data: {
    _id: generateRandomMongoId(),
    name: { "en-GB": "Purple Voyage" },
    description: { "en-GB": "AQA tournament" },
    teams: TEAM_NAMES.map((name, i) => ({ socialGroupId: socialGroupIds[i], teamName: name })),
    startDateTimeUtc: todayUtc(),
    nextRoundDateTimeUtc: futureUtc(3),
    isCompleted: false,
    currentRound: 1,
    roundDurationInDays: 7,
    numberOfTeamsPerMatchUp: 2,
    isPublished: true,
    gameMode: "team_vs_team",
    rewardType: "yucoin",
    ownerBusinessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
  },
};

// ─── Match-up ───

export const TOURNAMENT_8_MATCH_UP: IDatabaseItem = {
  type: "mongo",
  modelName: "social_group_knockout_tournament_match_ups",
  data: {
    _id: generateRandomMongoId(),
    tournamentId: TOURNAMENT_8_TEAMS.data._id,
    socialGroupIds,
    goalId: GOALS_TOURNAMENT.data._id,
    roundNumber: 1,
    startDateTimeUtc: todayUtc(),
    endDateTimeUtc: futureUtc(3),
    results: TEAM_NAMES.map((name, i) => ({
      socialGroupId: socialGroupIds[i],
      teamName: name,
      score: teamTotal(i),
    })),
  },
};

// ─── Member record factory ───

interface MemberRecords {
  customer: IDatabaseItem;
  auth: IDatabaseItem;
  user: IDatabaseItem;
  gameState: IDatabaseItem;
  toggles: IDatabaseItem;
  profile: IDatabaseItem;
  employee: IDatabaseItem;
  participation: IDatabaseItem;
  invitation: IDatabaseItem;
}

function makeMember(m: (typeof MEMBER_DATA)[number]): MemberRecords {
  const id = generateRandomMongoId();

  return {
    customer: {
      type: "postgres",
      modelName: "customer",
      data: {
        customerId: id,
        email: `t.${m.firstName.toLowerCase()}.${id.slice(0, 6)}@inbox.testmail.app`,
        firstName: m.firstName,
        lastName: m.lastName,
        status: "onboarded",
      },
    },
    auth: {
      type: "mongo",
      modelName: "authpassword",
      data: {
        _id: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: id,
      },
    },
    user: {
      type: "mongo",
      modelName: "users",
      data: {
        _id: generateRandomMongoId(),
        userId: id,
        displayName: `${m.firstName} ${m.lastName.charAt(0)}`,
        shortName: m.firstName,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
        earnRate: 20,
        products: [
          {
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 20,
            type: "employer",
          },
        ],
      },
    },
    gameState: {
      type: "mongo",
      modelName: "user_game_state",
      data: {
        _id: generateRandomMongoId(),
        customerId: id,
        userId: id,
        currentBalance: 500,
        currentStreak: 0,
        currentLevel: 1,
      },
    },
    toggles: {
      type: "mongo",
      modelName: "usertoggles",
      data: {
        _id: generateRandomMongoId(),
        userId: id,
        features: { showStats: true, showSettings: true, useNewLeaderboardServices: true },
      },
    },
    profile: {
      type: "mongo",
      modelName: "userprofile",
      data: {
        _id: generateRandomMongoId(),
        userId: id,
        rewardStoreLocation: "GB",
        gameSettings: { cyclingMeasurement: "km" },
      },
    },
    employee: {
      type: "postgres",
      modelName: "business_employee",
      data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: id,
        employment_start_date: "2019-12-30T00:00:00Z",
        employment_leave_date: "2999-12-31T00:00:00Z",
      },
    },
    participation: {
      type: "mongo",
      modelName: "goal_participation",
      data: {
        _id: generateRandomMongoId(),
        userId: id,
        parentType: "goals",
        goal: GOALS_TOURNAMENT.data._id,
        team: goalTeamIds[m.team],
        joinGoalTime: now(),
        startDateTime: now(),
        endDateTime: inDays(7),
        status: "active",
        typesToTrack: ["passive_challenge_steps"],
        completed: { passive_challenge_steps: m.score },
      },
    },
    invitation: {
      type: "mongo",
      modelName: "goal_invitation_for_global",
      data: {
        _id: generateRandomMongoId(),
        userId: id,
        goal: GOALS_TOURNAMENT.data._id,
        endDateTime: inDays(7),
      },
    },
  };
}

// ─── Generate all members and flatten to named exports ───

const allMembers = MEMBER_DATA.map(makeMember);

const RECORD_KEYS = [
  "customer",
  "auth",
  "user",
  "gameState",
  "toggles",
  "profile",
  "employee",
  "participation",
  "invitation",
] as const;

export const tournamentMemberRecords: IDatabaseItem[] = allMembers.flatMap((m) =>
  RECORD_KEYS.map((k) => m[k])
);

// Individual exports for BDD framework compatibility (re-exported via index.ts)
export const TOURNAMENT_MEMBER_0_CUSTOMER = allMembers[0].customer;
export const TOURNAMENT_MEMBER_0_AUTH = allMembers[0].auth;
export const TOURNAMENT_MEMBER_0_USER = allMembers[0].user;
export const TOURNAMENT_MEMBER_0_GAME_STATE = allMembers[0].gameState;
export const TOURNAMENT_MEMBER_0_TOGGLES = allMembers[0].toggles;
export const TOURNAMENT_MEMBER_0_PROFILE = allMembers[0].profile;
export const TOURNAMENT_MEMBER_0_EMPLOYEE = allMembers[0].employee;
export const TOURNAMENT_MEMBER_0_PARTICIPATION = allMembers[0].participation;
export const TOURNAMENT_MEMBER_0_INVITATION = allMembers[0].invitation;
export const TOURNAMENT_MEMBER_1_CUSTOMER = allMembers[1].customer;
export const TOURNAMENT_MEMBER_1_AUTH = allMembers[1].auth;
export const TOURNAMENT_MEMBER_1_USER = allMembers[1].user;
export const TOURNAMENT_MEMBER_1_GAME_STATE = allMembers[1].gameState;
export const TOURNAMENT_MEMBER_1_TOGGLES = allMembers[1].toggles;
export const TOURNAMENT_MEMBER_1_PROFILE = allMembers[1].profile;
export const TOURNAMENT_MEMBER_1_EMPLOYEE = allMembers[1].employee;
export const TOURNAMENT_MEMBER_1_PARTICIPATION = allMembers[1].participation;
export const TOURNAMENT_MEMBER_1_INVITATION = allMembers[1].invitation;
export const TOURNAMENT_MEMBER_2_CUSTOMER = allMembers[2].customer;
export const TOURNAMENT_MEMBER_2_AUTH = allMembers[2].auth;
export const TOURNAMENT_MEMBER_2_USER = allMembers[2].user;
export const TOURNAMENT_MEMBER_2_GAME_STATE = allMembers[2].gameState;
export const TOURNAMENT_MEMBER_2_TOGGLES = allMembers[2].toggles;
export const TOURNAMENT_MEMBER_2_PROFILE = allMembers[2].profile;
export const TOURNAMENT_MEMBER_2_EMPLOYEE = allMembers[2].employee;
export const TOURNAMENT_MEMBER_2_PARTICIPATION = allMembers[2].participation;
export const TOURNAMENT_MEMBER_2_INVITATION = allMembers[2].invitation;
export const TOURNAMENT_MEMBER_3_CUSTOMER = allMembers[3].customer;
export const TOURNAMENT_MEMBER_3_AUTH = allMembers[3].auth;
export const TOURNAMENT_MEMBER_3_USER = allMembers[3].user;
export const TOURNAMENT_MEMBER_3_GAME_STATE = allMembers[3].gameState;
export const TOURNAMENT_MEMBER_3_TOGGLES = allMembers[3].toggles;
export const TOURNAMENT_MEMBER_3_PROFILE = allMembers[3].profile;
export const TOURNAMENT_MEMBER_3_EMPLOYEE = allMembers[3].employee;
export const TOURNAMENT_MEMBER_3_PARTICIPATION = allMembers[3].participation;
export const TOURNAMENT_MEMBER_3_INVITATION = allMembers[3].invitation;
export const TOURNAMENT_MEMBER_4_CUSTOMER = allMembers[4].customer;
export const TOURNAMENT_MEMBER_4_AUTH = allMembers[4].auth;
export const TOURNAMENT_MEMBER_4_USER = allMembers[4].user;
export const TOURNAMENT_MEMBER_4_GAME_STATE = allMembers[4].gameState;
export const TOURNAMENT_MEMBER_4_TOGGLES = allMembers[4].toggles;
export const TOURNAMENT_MEMBER_4_PROFILE = allMembers[4].profile;
export const TOURNAMENT_MEMBER_4_EMPLOYEE = allMembers[4].employee;
export const TOURNAMENT_MEMBER_4_PARTICIPATION = allMembers[4].participation;
export const TOURNAMENT_MEMBER_4_INVITATION = allMembers[4].invitation;
export const TOURNAMENT_MEMBER_5_CUSTOMER = allMembers[5].customer;
export const TOURNAMENT_MEMBER_5_AUTH = allMembers[5].auth;
export const TOURNAMENT_MEMBER_5_USER = allMembers[5].user;
export const TOURNAMENT_MEMBER_5_GAME_STATE = allMembers[5].gameState;
export const TOURNAMENT_MEMBER_5_TOGGLES = allMembers[5].toggles;
export const TOURNAMENT_MEMBER_5_PROFILE = allMembers[5].profile;
export const TOURNAMENT_MEMBER_5_EMPLOYEE = allMembers[5].employee;
export const TOURNAMENT_MEMBER_5_PARTICIPATION = allMembers[5].participation;
export const TOURNAMENT_MEMBER_5_INVITATION = allMembers[5].invitation;
export const TOURNAMENT_MEMBER_6_CUSTOMER = allMembers[6].customer;
export const TOURNAMENT_MEMBER_6_AUTH = allMembers[6].auth;
export const TOURNAMENT_MEMBER_6_USER = allMembers[6].user;
export const TOURNAMENT_MEMBER_6_GAME_STATE = allMembers[6].gameState;
export const TOURNAMENT_MEMBER_6_TOGGLES = allMembers[6].toggles;
export const TOURNAMENT_MEMBER_6_PROFILE = allMembers[6].profile;
export const TOURNAMENT_MEMBER_6_EMPLOYEE = allMembers[6].employee;
export const TOURNAMENT_MEMBER_6_PARTICIPATION = allMembers[6].participation;
export const TOURNAMENT_MEMBER_6_INVITATION = allMembers[6].invitation;
export const TOURNAMENT_MEMBER_7_CUSTOMER = allMembers[7].customer;
export const TOURNAMENT_MEMBER_7_AUTH = allMembers[7].auth;
export const TOURNAMENT_MEMBER_7_USER = allMembers[7].user;
export const TOURNAMENT_MEMBER_7_GAME_STATE = allMembers[7].gameState;
export const TOURNAMENT_MEMBER_7_TOGGLES = allMembers[7].toggles;
export const TOURNAMENT_MEMBER_7_PROFILE = allMembers[7].profile;
export const TOURNAMENT_MEMBER_7_EMPLOYEE = allMembers[7].employee;
export const TOURNAMENT_MEMBER_7_PARTICIPATION = allMembers[7].participation;
export const TOURNAMENT_MEMBER_7_INVITATION = allMembers[7].invitation;
export const TOURNAMENT_MEMBER_8_CUSTOMER = allMembers[8].customer;
export const TOURNAMENT_MEMBER_8_AUTH = allMembers[8].auth;
export const TOURNAMENT_MEMBER_8_USER = allMembers[8].user;
export const TOURNAMENT_MEMBER_8_GAME_STATE = allMembers[8].gameState;
export const TOURNAMENT_MEMBER_8_TOGGLES = allMembers[8].toggles;
export const TOURNAMENT_MEMBER_8_PROFILE = allMembers[8].profile;
export const TOURNAMENT_MEMBER_8_EMPLOYEE = allMembers[8].employee;
export const TOURNAMENT_MEMBER_8_PARTICIPATION = allMembers[8].participation;
export const TOURNAMENT_MEMBER_8_INVITATION = allMembers[8].invitation;
export const TOURNAMENT_MEMBER_9_CUSTOMER = allMembers[9].customer;
export const TOURNAMENT_MEMBER_9_AUTH = allMembers[9].auth;
export const TOURNAMENT_MEMBER_9_USER = allMembers[9].user;
export const TOURNAMENT_MEMBER_9_GAME_STATE = allMembers[9].gameState;
export const TOURNAMENT_MEMBER_9_TOGGLES = allMembers[9].toggles;
export const TOURNAMENT_MEMBER_9_PROFILE = allMembers[9].profile;
export const TOURNAMENT_MEMBER_9_EMPLOYEE = allMembers[9].employee;
export const TOURNAMENT_MEMBER_9_PARTICIPATION = allMembers[9].participation;
export const TOURNAMENT_MEMBER_9_INVITATION = allMembers[9].invitation;
export const TOURNAMENT_MEMBER_10_CUSTOMER = allMembers[10].customer;
export const TOURNAMENT_MEMBER_10_AUTH = allMembers[10].auth;
export const TOURNAMENT_MEMBER_10_USER = allMembers[10].user;
export const TOURNAMENT_MEMBER_10_GAME_STATE = allMembers[10].gameState;
export const TOURNAMENT_MEMBER_10_TOGGLES = allMembers[10].toggles;
export const TOURNAMENT_MEMBER_10_PROFILE = allMembers[10].profile;
export const TOURNAMENT_MEMBER_10_EMPLOYEE = allMembers[10].employee;
export const TOURNAMENT_MEMBER_10_PARTICIPATION = allMembers[10].participation;
export const TOURNAMENT_MEMBER_10_INVITATION = allMembers[10].invitation;
export const TOURNAMENT_MEMBER_11_CUSTOMER = allMembers[11].customer;
export const TOURNAMENT_MEMBER_11_AUTH = allMembers[11].auth;
export const TOURNAMENT_MEMBER_11_USER = allMembers[11].user;
export const TOURNAMENT_MEMBER_11_GAME_STATE = allMembers[11].gameState;
export const TOURNAMENT_MEMBER_11_TOGGLES = allMembers[11].toggles;
export const TOURNAMENT_MEMBER_11_PROFILE = allMembers[11].profile;
export const TOURNAMENT_MEMBER_11_EMPLOYEE = allMembers[11].employee;
export const TOURNAMENT_MEMBER_11_PARTICIPATION = allMembers[11].participation;
export const TOURNAMENT_MEMBER_11_INVITATION = allMembers[11].invitation;
export const TOURNAMENT_MEMBER_12_CUSTOMER = allMembers[12].customer;
export const TOURNAMENT_MEMBER_12_AUTH = allMembers[12].auth;
export const TOURNAMENT_MEMBER_12_USER = allMembers[12].user;
export const TOURNAMENT_MEMBER_12_GAME_STATE = allMembers[12].gameState;
export const TOURNAMENT_MEMBER_12_TOGGLES = allMembers[12].toggles;
export const TOURNAMENT_MEMBER_12_PROFILE = allMembers[12].profile;
export const TOURNAMENT_MEMBER_12_EMPLOYEE = allMembers[12].employee;
export const TOURNAMENT_MEMBER_12_PARTICIPATION = allMembers[12].participation;
export const TOURNAMENT_MEMBER_12_INVITATION = allMembers[12].invitation;
export const TOURNAMENT_MEMBER_13_CUSTOMER = allMembers[13].customer;
export const TOURNAMENT_MEMBER_13_AUTH = allMembers[13].auth;
export const TOURNAMENT_MEMBER_13_USER = allMembers[13].user;
export const TOURNAMENT_MEMBER_13_GAME_STATE = allMembers[13].gameState;
export const TOURNAMENT_MEMBER_13_TOGGLES = allMembers[13].toggles;
export const TOURNAMENT_MEMBER_13_PROFILE = allMembers[13].profile;
export const TOURNAMENT_MEMBER_13_EMPLOYEE = allMembers[13].employee;
export const TOURNAMENT_MEMBER_13_PARTICIPATION = allMembers[13].participation;
export const TOURNAMENT_MEMBER_13_INVITATION = allMembers[13].invitation;
export const TOURNAMENT_MEMBER_14_CUSTOMER = allMembers[14].customer;
export const TOURNAMENT_MEMBER_14_AUTH = allMembers[14].auth;
export const TOURNAMENT_MEMBER_14_USER = allMembers[14].user;
export const TOURNAMENT_MEMBER_14_GAME_STATE = allMembers[14].gameState;
export const TOURNAMENT_MEMBER_14_TOGGLES = allMembers[14].toggles;
export const TOURNAMENT_MEMBER_14_PROFILE = allMembers[14].profile;
export const TOURNAMENT_MEMBER_14_EMPLOYEE = allMembers[14].employee;
export const TOURNAMENT_MEMBER_14_PARTICIPATION = allMembers[14].participation;
export const TOURNAMENT_MEMBER_14_INVITATION = allMembers[14].invitation;
export const TOURNAMENT_MEMBER_15_CUSTOMER = allMembers[15].customer;
export const TOURNAMENT_MEMBER_15_AUTH = allMembers[15].auth;
export const TOURNAMENT_MEMBER_15_USER = allMembers[15].user;
export const TOURNAMENT_MEMBER_15_GAME_STATE = allMembers[15].gameState;
export const TOURNAMENT_MEMBER_15_TOGGLES = allMembers[15].toggles;
export const TOURNAMENT_MEMBER_15_PROFILE = allMembers[15].profile;
export const TOURNAMENT_MEMBER_15_EMPLOYEE = allMembers[15].employee;
export const TOURNAMENT_MEMBER_15_PARTICIPATION = allMembers[15].participation;
export const TOURNAMENT_MEMBER_15_INVITATION = allMembers[15].invitation;
export const TOURNAMENT_MEMBER_16_CUSTOMER = allMembers[16].customer;
export const TOURNAMENT_MEMBER_16_AUTH = allMembers[16].auth;
export const TOURNAMENT_MEMBER_16_USER = allMembers[16].user;
export const TOURNAMENT_MEMBER_16_GAME_STATE = allMembers[16].gameState;
export const TOURNAMENT_MEMBER_16_TOGGLES = allMembers[16].toggles;
export const TOURNAMENT_MEMBER_16_PROFILE = allMembers[16].profile;
export const TOURNAMENT_MEMBER_16_EMPLOYEE = allMembers[16].employee;
export const TOURNAMENT_MEMBER_16_PARTICIPATION = allMembers[16].participation;
export const TOURNAMENT_MEMBER_16_INVITATION = allMembers[16].invitation;
export const TOURNAMENT_MEMBER_17_CUSTOMER = allMembers[17].customer;
export const TOURNAMENT_MEMBER_17_AUTH = allMembers[17].auth;
export const TOURNAMENT_MEMBER_17_USER = allMembers[17].user;
export const TOURNAMENT_MEMBER_17_GAME_STATE = allMembers[17].gameState;
export const TOURNAMENT_MEMBER_17_TOGGLES = allMembers[17].toggles;
export const TOURNAMENT_MEMBER_17_PROFILE = allMembers[17].profile;
export const TOURNAMENT_MEMBER_17_EMPLOYEE = allMembers[17].employee;
export const TOURNAMENT_MEMBER_17_PARTICIPATION = allMembers[17].participation;
export const TOURNAMENT_MEMBER_17_INVITATION = allMembers[17].invitation;
export const TOURNAMENT_MEMBER_18_CUSTOMER = allMembers[18].customer;
export const TOURNAMENT_MEMBER_18_AUTH = allMembers[18].auth;
export const TOURNAMENT_MEMBER_18_USER = allMembers[18].user;
export const TOURNAMENT_MEMBER_18_GAME_STATE = allMembers[18].gameState;
export const TOURNAMENT_MEMBER_18_TOGGLES = allMembers[18].toggles;
export const TOURNAMENT_MEMBER_18_PROFILE = allMembers[18].profile;
export const TOURNAMENT_MEMBER_18_EMPLOYEE = allMembers[18].employee;
export const TOURNAMENT_MEMBER_18_PARTICIPATION = allMembers[18].participation;
export const TOURNAMENT_MEMBER_18_INVITATION = allMembers[18].invitation;
export const TOURNAMENT_MEMBER_19_CUSTOMER = allMembers[19].customer;
export const TOURNAMENT_MEMBER_19_AUTH = allMembers[19].auth;
export const TOURNAMENT_MEMBER_19_USER = allMembers[19].user;
export const TOURNAMENT_MEMBER_19_GAME_STATE = allMembers[19].gameState;
export const TOURNAMENT_MEMBER_19_TOGGLES = allMembers[19].toggles;
export const TOURNAMENT_MEMBER_19_PROFILE = allMembers[19].profile;
export const TOURNAMENT_MEMBER_19_EMPLOYEE = allMembers[19].employee;
export const TOURNAMENT_MEMBER_19_PARTICIPATION = allMembers[19].participation;
export const TOURNAMENT_MEMBER_19_INVITATION = allMembers[19].invitation;
export const TOURNAMENT_MEMBER_20_CUSTOMER = allMembers[20].customer;
export const TOURNAMENT_MEMBER_20_AUTH = allMembers[20].auth;
export const TOURNAMENT_MEMBER_20_USER = allMembers[20].user;
export const TOURNAMENT_MEMBER_20_GAME_STATE = allMembers[20].gameState;
export const TOURNAMENT_MEMBER_20_TOGGLES = allMembers[20].toggles;
export const TOURNAMENT_MEMBER_20_PROFILE = allMembers[20].profile;
export const TOURNAMENT_MEMBER_20_EMPLOYEE = allMembers[20].employee;
export const TOURNAMENT_MEMBER_20_PARTICIPATION = allMembers[20].participation;
export const TOURNAMENT_MEMBER_20_INVITATION = allMembers[20].invitation;
export const TOURNAMENT_MEMBER_21_CUSTOMER = allMembers[21].customer;
export const TOURNAMENT_MEMBER_21_AUTH = allMembers[21].auth;
export const TOURNAMENT_MEMBER_21_USER = allMembers[21].user;
export const TOURNAMENT_MEMBER_21_GAME_STATE = allMembers[21].gameState;
export const TOURNAMENT_MEMBER_21_TOGGLES = allMembers[21].toggles;
export const TOURNAMENT_MEMBER_21_PROFILE = allMembers[21].profile;
export const TOURNAMENT_MEMBER_21_EMPLOYEE = allMembers[21].employee;
export const TOURNAMENT_MEMBER_21_PARTICIPATION = allMembers[21].participation;
export const TOURNAMENT_MEMBER_21_INVITATION = allMembers[21].invitation;
export const TOURNAMENT_MEMBER_22_CUSTOMER = allMembers[22].customer;
export const TOURNAMENT_MEMBER_22_AUTH = allMembers[22].auth;
export const TOURNAMENT_MEMBER_22_USER = allMembers[22].user;
export const TOURNAMENT_MEMBER_22_GAME_STATE = allMembers[22].gameState;
export const TOURNAMENT_MEMBER_22_TOGGLES = allMembers[22].toggles;
export const TOURNAMENT_MEMBER_22_PROFILE = allMembers[22].profile;
export const TOURNAMENT_MEMBER_22_EMPLOYEE = allMembers[22].employee;
export const TOURNAMENT_MEMBER_22_PARTICIPATION = allMembers[22].participation;
export const TOURNAMENT_MEMBER_22_INVITATION = allMembers[22].invitation;
export const TOURNAMENT_MEMBER_23_CUSTOMER = allMembers[23].customer;
export const TOURNAMENT_MEMBER_23_AUTH = allMembers[23].auth;
export const TOURNAMENT_MEMBER_23_USER = allMembers[23].user;
export const TOURNAMENT_MEMBER_23_GAME_STATE = allMembers[23].gameState;
export const TOURNAMENT_MEMBER_23_TOGGLES = allMembers[23].toggles;
export const TOURNAMENT_MEMBER_23_PROFILE = allMembers[23].profile;
export const TOURNAMENT_MEMBER_23_EMPLOYEE = allMembers[23].employee;
export const TOURNAMENT_MEMBER_23_PARTICIPATION = allMembers[23].participation;
export const TOURNAMENT_MEMBER_23_INVITATION = allMembers[23].invitation;

// ─── Login user participation (team 0 - Shoreditch) ───

export const TOURNAMENT_LOGIN_USER_PARTICIPATION: IDatabaseItem = {
  type: "mongo",
  modelName: "goal_participation",
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_76.data.customerId,
    parentType: "goals",
    goal: GOALS_TOURNAMENT.data._id,
    team: goalTeamIds[0],
    joinGoalTime: now(),
    startDateTime: now(),
    endDateTime: inDays(7),
    status: "active",
    typesToTrack: ["passive_challenge_steps"],
    completed: { passive_challenge_steps: LOGIN_USER_SCORE },
  },
};
