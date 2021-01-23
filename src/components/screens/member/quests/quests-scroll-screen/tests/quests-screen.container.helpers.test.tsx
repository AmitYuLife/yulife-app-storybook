import { getLevelAction, GetActionConditionArgs } from "../quests-screen.container.helpers";

describe("getActionConditions", () => {
  const defaultGetActionConditionArgs: GetActionConditionArgs = {
    levelStatus: {
      isDone: true,
      isNext: false,
      isPrevious: false,
    },
    challengesStatus: {
      hasDone: true,
      isAvailable: true,
    },
    itemLevel: {
      level: 50,
      levelChestId: "1234",
    },
    showCompletedLevel: false,
    levelAvailable: false,
  };

  describe("when level is done", () => {
    it("should correctly set unity", () => {
      const args = defaultGetActionConditionArgs;

      const res = getLevelAction(args);

      expect(res).toEqual("SetUnity");
    });

    it("should go to challenges list", () => {
      const args = {
        ...defaultGetActionConditionArgs,
        levelStatus: {
          isDone: true,
          isNext: false,
          isPrevious: true,
        },
        itemLevel: {
          level: 21,
          levelChestId: "123",
        },
      };

      const res = getLevelAction(args);

      expect(res).toEqual("GoToChallengesList");
    });

    it("should show level complete modal", () => {
      const args = {
        ...defaultGetActionConditionArgs,
        levelStatus: {
          isDone: true,
          isPrevious: false,
          isNext: false,
        },
        challengesStatus: {
          hasDone: false,
          isAvailable: false,
        },
        itemLevel: {
          level: 21,
          levelChestId: "123",
        },
        showCompletedLevel: true,
      };

      const res = getLevelAction(args);

      expect(res).toEqual("ShowLevelCompleteModal");
    });
  });

  describe("when level is next and not done", () => {
    it("should correctly set and dispatch unity", () => {
      const args = {
        ...defaultGetActionConditionArgs,
        levelStatus: {
          isNext: true,
          isDone: false,
          isPrevious: false,
        },
      };

      const res = getLevelAction(args);

      expect(res).toEqual("DispatchSubmitUnityAction");
    });

    it("should show chest modal", () => {
      const args = {
        ...defaultGetActionConditionArgs,
        levelStatus: {
          isNext: true,
          isDone: false,
          isPrevious: false,
        },
        itemLevel: {
          level: 21,
          levelChestId: "123",
        },
        levelAvailable: true,
      };

      const res = getLevelAction(args);

      expect(res).toEqual("ShowChestModal");
    });

    it("should go to challenges list", () => {
      const args = {
        ...defaultGetActionConditionArgs,
        levelStatus: {
          isNext: true,
          isDone: false,
          isPrevious: false,
        },
        itemLevel: {
          level: 21,
        },
        levelAvailable: true,
      };

      const res = getLevelAction(args);

      expect(res).toEqual("GoToChallengesList");
    });

    it("should show challenge unavailable", () => {
      const args = {
        ...defaultGetActionConditionArgs,
        levelStatus: {
          isNext: true,
          isDone: false,
          isPrevious: false,
        },
        itemLevel: {
          level: 21,
        },
      };

      const res = getLevelAction(args);

      expect(res).toEqual("ShowChallengeUnavailableModal");
    });
  });

  describe("when level is neither done nor next", () => {
    it("should show chest modal", () => {
      const args = {
        ...defaultGetActionConditionArgs,
        levelStatus: {
          isNext: false,
          isDone: false,
          isPrevious: false,
        },
      };

      const res = getLevelAction(args);

      expect(res).toEqual("ShowChestModal");
    });

    it("should should level unavailable", () => {
      const args = {
        ...defaultGetActionConditionArgs,
        levelStatus: {
          isNext: false,
          isDone: false,
          isPrevious: false,
        },
        itemLevel: {
          level: 21,
        },
      };

      const res = getLevelAction(args);

      expect(res).toEqual("ShowLevelUnavailableModal");
    });
  });
});
