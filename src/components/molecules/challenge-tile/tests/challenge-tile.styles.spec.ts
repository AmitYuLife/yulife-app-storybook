import { getImage, getImageStyle } from "../challenge-tile.helpers";
import { IMAGES } from "../challenge-tile.types";

describe("Challenge Tile styles", () => {
  describe("getImage", () => {
    it("should be null on unknown input", () => {
      const actual = getImage(undefined);

      expect(actual).toBeNull();
    });

    it("should be defined on known input", () => {
      const bird = getImage(IMAGES.BIRD);
      expect(bird).toBeDefined();

      const squirrel = getImage(IMAGES.SQUIRREL);
      expect(squirrel).toBeDefined();

      const elephant = getImageStyle(IMAGES.SNAIL);
      expect(elephant).toBeDefined();

      const ostrich = getImage(IMAGES.RABBIT);
      expect(ostrich).toBeDefined();
    });
  });
});
