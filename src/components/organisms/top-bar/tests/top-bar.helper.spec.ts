import { TopBarType } from "@graphql/_core/schema/globalTypes";
import { fromGql, TOP_BAR_TYPES } from "../top-bar.helpers";

describe("topBarType: Cast", () => {
  it("Should cast topBarType from graphql to client", () => {
    const clientTopBarTypes = Object.values(TopBarType).map((type) => fromGql(type));
    expect(clientTopBarTypes).toEqual([
      TOP_BAR_TYPES.DEFAULT,
      TOP_BAR_TYPES.DESERT,
      TOP_BAR_TYPES.FOREST,
      TOP_BAR_TYPES.MOUNTAIN,
      TOP_BAR_TYPES.WHITE,
    ]);
  });
});
