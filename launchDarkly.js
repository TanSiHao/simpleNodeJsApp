const LaunchDarkly = require('@launchdarkly/node-server-sdk');

module.exports = function getLdFlag() {
  return new Promise(async (resolve, reject) => {

    // Set sdkKey to your LaunchDarkly SDK key.
    const sdkKey = "";

    // Set featureFlagKey to the feature flag key you want to evaluate.
    const featureFlagKey = "boolean-flag";

    function showMessage(s) {
      console.log("*** " + s);
      console.log("");
    }

    if (sdkKey == "") {
      showMessage("Please edit index.js to set sdkKey to your LaunchDarkly SDK key first");
      process.exit(1);
    }

    const ldClient = LaunchDarkly.init(sdkKey);

    // Set up the context properties. This context should appear on your LaunchDarkly contexts dashboard
    // soon after you run the demo.
    const context = {
      kind: "user",
      key: "example-context-key",
      name: "Sandy"
    };

    ldClient.waitForInitialization().then(function () {
      showMessage("SDK successfully initialized!");
      ldClient.variation(featureFlagKey, context, false, function (err, flagValue) {
        showMessage("Feature flag '" + featureFlagKey + "' is " + flagValue + " for this context");

        // Here we ensure that the SDK shuts down cleanly and has a chance to deliver analytics
        // events to LaunchDarkly before the program exits. If analytics events are not delivered,
        // the context properties and flag usage statistics will not appear on your dashboard. In a
        // normal long-running application, the SDK would continue running and events would be
        // delivered automatically in the background.
        ldClient.flush(function () {
          ldClient.close();
          //Si Hao: added return value
          return resolve(flagValue);
        });
      });
    }).catch(function (error) {
      showMessage("SDK failed to initialize: " + error);
      //Si Hao: added return value
      resolve(false);
      process.exit(1);
    });
  });
}