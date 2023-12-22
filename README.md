# Sample application with feature flag implemented using Launchdarkly

## 1. Supporting business requirements seamlessly with confident
This repo contains the lab we are going to work through as part of the feature flag - Bridging the gap to the business needs which updates webpage content seamlessly during runtime, without deploying new code.
For the Hands-On, we prepared a few HTML and node js files and made the steps easy for anyone.

Prerequisites
- You will need a launchdarkly account. You may sign up for a trial account here: https://launchdarkly.com/start-trial/
- Installed Node JS in your machine, ideally minimum node version v20.x.x
- Installed Launchdarkly’s node-server-sdk
  - npm install @launchdarkly/node-server-sdk
- Sample application
  - Download/clone from https://github.com/TanSiHao/simpleNodeJsApp.git 

## 2. Setup feature flag
Switch to the “Test” environment. We will create a feature flag under the environment.

<img src="images/Picture1.png" alt="Setup feature flag"><br />

1.	Click “Create flag”
2.	Name: Boolean-flag<br />

<img src="images/Picture2.png" alt="Create feature flag"><br />

3.  Click “Next” 
4.  Now, you need to get the sdkKey from your LaunchDarkly. You can get the key following the path below.
Account settings -> Projects -> CHOOSE YOUR PROJECT -> Copy the correct environment's SDK Key and store it. You will need SDK Key for this hand-on. 

<img src="images/Picture3.png" alt="Copy SDK KEY"><br />

## 3.	Setup sample Node application
Paste the SDK Key copied from your Launchdarkly test environment to testconnection.js and launchDarkly.js.

Line 4, testconnection.js

<img src="images/Picture4.png" alt="Update SDK Key at testconnection.js"><br />

Line 7, launchDarkly.js

<img src="images/Picture5.png" alt="Update SDK Key at launchDarkly.js"><br />

## 4.	Test your connection to your Launchdarkly feature flag.
Run 
```sh
node testconnection.js
```
Your console will return false. 

Result:

<img src="images/Picture6.png" alt="Test connection using launchDarkly.js"><br />

Switch “On” your feature.

<img src="images/Picture7.png" alt="Switch the feature flag on"><br />

Run 
```sh
node testconnection.js
```

Your console will return true.

Result:

<img src="images/Picture8.png" alt="Verify toggle ON in terninal"><br />

## 5.	Run the sample application with feature flag “Off” and “On”.
Start the web server. Run 
```sh
node app.js.
```
<img src="images/Picture12.png" alt="Start web server"><br />

Access URL on port 3000 here: http://localhost:3000/<br />

<img src="images/Picture9.png" alt="How UI Looks like when toggle is False"><br />

Go back to the feature flags page. Toggle “On” the flag.

<img src="images/Picture10.png" alt="Switch toggle to TRUE, and verify update in console"><br />

Click the "refresh" button on your browser or “F5” to refresh the web page. Now, you can see the image updated as shown below.

<img src="images/Picture11.png" alt="UI page A to UI page B"><br />