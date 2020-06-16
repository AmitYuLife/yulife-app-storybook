import { getActionConditions, GetActionConditionArgs } from "../quests-screen.container.helpers";

const defaultConditions = {
  shouldSetUnity: false,
  shouldGoToChallengesList: false,
  shouldShowLevelCompleteModal: false,
  shouldDispatchSubmitUnityAction: false,
  shouldShowChestModal: false,
  shouldShowChallengeUnavailableModal: false,
  shouldShowLevelUnavailableModal: false,
};

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

      const res = getActionConditions(args);

      expect(res).toEqual({ ...defaultConditions, shouldSetUnity: true });
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

      const res = getActionConditions(args);

      expect(res).toEqual({ ...defaultConditions, shouldGoToChallengesList: true });
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

      const res = getActionConditions(args);

      expect(res).toEqual({ ...defaultConditions, shouldShowLevelCompleteModal: true });
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

      const res = getActionConditions(args);

      expect(res).toEqual({
        ...defaultConditions,
        shouldSetUnity: true,
        shouldDispatchSubmitUnityAction: true,
      });
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

      const res = getActionConditions(args);

      expect(res).toEqual({
        ...defaultConditions,
        shouldShowChestModal: true,
      });
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

      const res = getActionConditions(args);

      expect(res).toEqual({
        ...defaultConditions,
        shouldGoToChallengesList: true,
      });
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

      const res = getActionConditions(args);

      expect(res).toEqual({
        ...defaultConditions,
        shouldShowChallengeUnavailableModal: true,
      });
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

      const res = getActionConditions(args);

      expect(res).toEqual({
        ...defaultConditions,
        shouldShowChestModal: true,
      });
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

      const res = getActionConditions(args);

      expect(res).toEqual({
        ...defaultConditions,
        shouldShowLevelUnavailableModal: true,
      });
    });
  });
});
