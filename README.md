# Sample application with Feature flag implemented using Launchdarkly

## 1. Enabling Business requirements seamlessly with confident
This Repo contains the labs we are going to work though as part of the feature flag - Bridging the Gap to the Business needs which webpage content during runtime, without deploying new code. 

For the purposes of the Hands-On, we prepared a few html and node js files and make the steps seamless for the anyone.

Prerequisites
- You will need a launchdarkly account. You may sign up a trial account here: https://launchdarkly.com/start-trial/
- Installed Node JS in your machine, ideally minimum node version v20.x.x
- Installed Launchdarkly’s node-server-sdk
  - npm install @launchdarkly/node-server-sdk
- Sample application
  - Download/clone from https://github.com/TanSiHao/simpleNodeJsApp.git 

## 2. Setup feature flag
Switch to “Test” enviroment, we will create a feature flag under the enviroment.

<img src="https://github.com/TanSiHao/simpleNodeJsApp/blob/main/images/Picture1.png?raw=true" alt="Setup feature flag">

1.	Click “Create flag”
2.	Name: Boolean-flag

<img src="images/Picture2.png" alt="Setup feature flag">
