# Pfizer Appium Automation Framework

## Requirements:
| Required | Version
| :-- | :--
| Oracle Java JDK  | 8
| Xcode | latest
| npm | 5.0.0 or higher
| node | ^ 7.0.1

## Installation:

1. Install dependencies:

```
cd e2e/automation
brew install carthage
npm install -g appium
npm install
```

2. Configure environment in: `configs/appium_config.js`.

3. Start appium server and leave it in terminal: 

```
appium &
```

4. Run tests:

```
npm test
```

Once tests executed, HTML report is going to be automatically displayed in default browser.

## Usage:

Test execution start from appium_config.js file located in configs directory. Test run can be customized changing the following keys:

**specs**: define what test suite is going to be run, file mask is supported, e.c. instead of specs: 
'../test_features/search.feature' which runs only search features, input '../test_features/*.feature' to execute 
everything with given mask or extension

**app**: location of testing app, either .app or .apk, relative or absolute path

**platformName**:  'iOS', 'android'

**platformVersion**: e.c. '11.1', '10.3'...

**deviceName**: 'iPhone 6', 'iPhone 7'...

**fullReset**: determines either device will be wiped before each run. Default value is false

**noReset**: determine if testing app is going to be restarted after each test case

## Implementation details:

Framework is based on Appium api to test mobile apps, uses Protractor as proxy to interact with Ionic WebView, Cucumber as BDD test runner, Chai as assertion library.

Once appium_config file is processed, framework runs appropriate `.feature` file located in `test_features` directory.

Scenarios are written in Gherkin language, and get implementation from `*Steps.js` files located in step_definitions directory.

Most steps are getting implementation from `*Page.js` files, which provide a service to interact with certain app features, wrap element locators, ect.

Wrapped elements in page files obtain enhanced functionality from underlying extension, apiExtend.js file, which holds some helper methods for typical actions against element on a page.

## Extend functionality, example:

A new test for Search tab has been written.

Open search.feature file, write a new scenario using 3 key steps: `Given`, `When`, `Then`.

Once scenario is written, open searchSteps.js file, add new step functions, each step has to return callback in the end.

Write implementation for these steps in `*Page.js` file, splitting the functions among Page files according to their 
scope - if function does something for Search only tab, and has it's own specific, it needs to be added to `searchPage` file.
Every Page file contains elements mapping at the end of file, referring to locators storage, following the pattern:

elementName: {locatorType: link to plainLocator}

During framework initialization all defined elements are being created and wrapped using given location strategy, and 
become available through global page objects as:
 
 [pageObjectName].elems.[elementName].[apiExtend or Protractor or Appium native functions]
 
Following SOLID principle, framework re-uses typical actions and snippets, main helper file is located at 
framework/modules/ directory. It has global visibility and can be assessed from any location excluding .feature files.


## Troubleshooting:

1. "Original error: 'xx.x' does not exist in the list of simctl SDKs." Simulator for given version does not exist or not downloaded. To pick a proper (available) version of simulator, navigate to `XCode > Window > Devices and Simulators` then copy device name and version and input into `appium_config` file.

2. Tests not running, appium log throws errors similar to "Webrived ceaused working due to internal XCode error". Try to logout, login and runs tests. DO NOT interact with simulator window (device screen representation) any way. Also applicable to idle simulator state - simulator must stay as it is.
Allowed actions: resize device screen through drag and drop, focus and bring it to foreground.