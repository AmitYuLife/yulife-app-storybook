const { DetoxCircusEnvironment } = require('detox/runners/jest')

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  async handleTestEvent(event, state) {
    if (event.name === 'test_start') {
      this.global.__assertionName = `${event.test.parent.name} ${event.test.name}`;
    }

    return super.handleTestEvent(event, state);
  }
}

module.exports = CustomDetoxEnvironment