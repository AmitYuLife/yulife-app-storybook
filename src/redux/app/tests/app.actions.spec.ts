import {
  UPDATE_APP_STATE,
  updateAppState
} from "../app.actions";

// TODO update to new style and add missing tests

describe("App Actions", () => {

  describe("updateAppState", () => {

    const action = updateAppState("active");

    it("has the correct type", () => {
      expect(action.type).toEqual(UPDATE_APP_STATE);
    });

    it("has the correct payload", () => {
      expect(action.payload).toEqual("active");
    });

  });

});
