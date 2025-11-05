const { withMainActivity } = require("@expo/config-plugins");

const mainApplicationPlugin = (config) => {
  return withMainActivity(config, (mod) => {
    const splitContents = mod.modResults.contents.split(`\n`);

    splitContents.splice(3, 0, `import android.view.View`);

    const onCreateLine = splitContents.findIndex((line) => line.includes(`super.onCreate(`));

    splitContents.splice(
      onCreateLine + 1,
      0,
      `
        val rootView = findViewById<View?>(android.R.id.content)
        rootView?.setFilterTouchesWhenObscured(true)
      `
    );

    mod.modResults.contents = splitContents.join(`\n`);

    return mod;
  });
};

module.exports = mainApplicationPlugin;
