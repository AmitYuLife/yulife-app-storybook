import { getMemberServicesDisplayState } from "../member-services.helpers";

describe("getMemberServicesDisplayState", () => {
  describe("yumatter screen", () => {
    it("should be hidden if the value is in the store and is true", () => {
      const { shouldHideYuMatterScreen } = getMemberServicesDisplayState(
        {
          hideSmartHealthScreen: true,
          hideYuMatterScreen: true,
        },
        { isGroupUser: true, isWellbeingAccess: true }
      );

      expect(shouldHideYuMatterScreen).toBe(true);
    });

    it("should be visible if the value is in the store and is false", () => {
      const { shouldHideYuMatterScreen } = getMemberServicesDisplayState(
        {
          hideSmartHealthScreen: true,
          hideYuMatterScreen: false,
        },
        { isGroupUser: true, isWellbeingAccess: true }
      );

      expect(shouldHideYuMatterScreen).toBe(false);
    });

    it("should be visible if the value is not in the store", () => {
      const { shouldHideYuMatterScreen } = getMemberServicesDisplayState(
        {
          hideSmartHealthScreen: true,
        },
        { isGroupUser: true, isWellbeingAccess: true }
      );

      expect(shouldHideYuMatterScreen).toBe(false);
    });
  });

  describe("smarthealth screen", () => {
    it("should be hidden if the value is in the store and is true", () => {
      const { shouldHideSmartHealthScreen } = getMemberServicesDisplayState(
        {
          hideSmartHealthScreen: true,
          hideYuMatterScreen: true,
        },
        { isGroupUser: true, isWellbeingAccess: true }
      );

      expect(shouldHideSmartHealthScreen).toBe(true);
    });

    it("should be visible if the value is in the store and is false", () => {
      const { shouldHideSmartHealthScreen } = getMemberServicesDisplayState(
        {
          hideSmartHealthScreen: false,
          hideYuMatterScreen: false,
        },
        { isGroupUser: true, isWellbeingAccess: true }
      );

      expect(shouldHideSmartHealthScreen).toBe(false);
    });

    it("should be visible if the value is not in the store and user is in group", () => {
      const { shouldHideSmartHealthScreen } = getMemberServicesDisplayState(
        {
          hideYuMatterScreen: true,
        },
        { isGroupUser: true, isWellbeingAccess: true }
      );

      expect(shouldHideSmartHealthScreen).toBe(false);
    });

    it("should be hidden if the value is not in the store and user is not in group", () => {
      const { shouldHideSmartHealthScreen } = getMemberServicesDisplayState(
        {
          hideYuMatterScreen: true,
        },
        { isGroupUser: false, isWellbeingAccess: false }
      );

      expect(shouldHideSmartHealthScreen).toBe(true);
    });
  });
});
