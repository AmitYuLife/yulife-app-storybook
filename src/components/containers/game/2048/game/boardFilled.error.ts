export class BoardFilled extends Error {
  constructor() {
    super();
    this.name = "BoardFilled";
    this.message = "Board has maxmimum number of cells possible";
  }
}
