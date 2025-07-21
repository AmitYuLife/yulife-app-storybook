const { default: axios } = require("axios");
const { DetoxCircusEnvironment } = require("detox/runners/jest");

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  async initDetox() {
    return super.initDetox();
  }
}

module.exports = CustomDetoxEnvironment;
