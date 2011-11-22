<div class="alert-message block-message info">
<h3>Setup Objective</h3>
<p>After completing this setup</p>
<br />
<ul>
  <li>You will have made <strong>no changes to your website</strong>.</li>
<li>You will have created <strong>1 (stopped) experiment</strong>.</li>
</ul>
<br />
<p>This new experiment will be used as a blueprint for all your real experiments (see <em>Usage</em>).</p>
<br />
<p>It is recommended to create one blueprint experiment for each <em>kind of experiment</em> you want to conduct (i.e. color variations , rounded corner variations, font variations, ..).</p>
</div>

### 1. Create Missing Accounts

Make sure you enabled the following tools for your Google account.

* [![Google AdSense](/img/google-adsense-logo.gif "Google AdSense logo")](http://www.google.com/adsense "Google AdSense homepage") 
* [![Google Analytics](/img/google-analytics-logo.gif "Google Analytics logo")](http://www.google.com/analytics/ "Google Analytics homepage") 
* [![Google Website Optimizer](/img/google-website-optimizer-logo.gif "Google Website Optimizer logo")](http://www.google.com/websiteoptimizer "Google Website Optimizer homepage")

### 2. Connect AdSense with Analytics

Make sure your AdSense and Analytics accounts are connected. If you're not sure how to do that please follow [this google support document](http://www.google.com/adsense/support/as/bin/answer.py?answer=92625&topic=1385757).

### 3. Ensure Availability of Custom Vars

Conversion tracking will be done using so called *Custom Variables* in Google Analytics. There are five so called indexes that can be used to store such variables.

Because of different persisting behaviour it is important to make sure that your variables don't clash with others. Please contact the webmaster of your website to find out if custom variables are already used and what index is available for you.

If custom variables are not yet used on the website you can choose any index from 1 to 5.

### 4. Create Base Experiment

###### 4.1 Login into Google Website Optimizer and Create a New Experiment

![step 1 - create](/img/scenarios/gwo-new-experiment-step-1-create.png)

###### 4.2 Create a Multivariate Experiment

![step 2 - multivariate](/img/scenarios/gwo-new-experiment-step-2-multivariate.png)

###### 4.3 Tick the Box and Create the Experiment

![step 3 - complete](/img/scenarios/gwo-new-experiment-step-3-complete.png)

###### 4.4 Enter the Page you want to run your Experiment on

![step 4 - identify test page](/img/scenarios/gwo-new-experiment-step-4-identify-test-page.png)

###### 4.5 Enter the same URL as Conversion Page

![step 5 - identify conversion page](/img/scenarios/gwo-new-experiment-step-5-identify-conversion-page.png)

###### 4.6 Confirm that you will care about the implementation yourself

![step 6 - identify conversion page](/img/scenarios/gwo-new-experiment-step-6-you-will-do-it.png)

###### 4.7 Select and Copy the Control and Tracking Script Code

![step 7 - identify conversion page](/img/scenarios/gwo-new-experiment-step-7-control-and-tracking-script.png)

###### 4.8 Paste the Copied Code to the Validation Generator

Go to [GWO Validation Generator](/verification.html "GWO Validation Generator").

![step 8 - open validation generator](/img/scenarios/gwo-validation-generator-1-dialog.png)

###### 4.9 Paste the Copied Code into the Textbox "Control and Tracking Script"

![step 9 - paste control and tracking script](/img/scenarios/gwo-validation-generator-2-paste-code.png)

###### 4.10 Enter Custom Variable Index

Choose any number from 1 to 5 as defined in **3.**.

![step 10 - enter custom variable index](/img/scenarios/gwo-validation-generator-3-enter-custom-variable-index.png)

###### 4.11 Add your Sections

Add as many sections as you want to include in your experiment.

![step 11 - add actions](/img/scenarios/gwo-validation-generator-4-add-sections.png)

###### 4.12 Generate Validation Page

Add as many sections as you want to include in your experiment.

![step 12 - click on validation page](/img/scenarios/gwo-validation-generator-5-click-on-validation-page.png)

###### 4.13 Save Validation Page

![step 13 - download validation page](/img/scenarios/gwo-validation-generator-6-download-validation-page.png)

###### 4.14 Offline Validation

Go back now to your GWO experiment but leave the generator page open. Choose offline validation.

![step 14 - validation](/img/scenarios/gwo-new-experiment-step-8-validation-0.png)

Browse and select the validation page you just downloaded for both the Test Page and the Conversion Page.

![step 15 - validation](/img/scenarios/gwo-new-experiment-step-9-validation-1.png)

Validation should look like this now.

![step 16 - validation](/img/scenarios/gwo-new-experiment-step-10-validation-2.png)

Continue to the next step.

![step 17 - validation](/img/scenarios/gwo-new-experiment-step-11-validation-3.png)

###### 4.15 Create Variations

With the next dialog you can create variations for each section you specified.

![step 15 - create variations 1](/img/scenarios/gwo-new-experiment-step-12-create-variations-1.png)

A common color variation could look like this.

![step 15 - create variations 2](/img/scenarios/gwo-new-experiment-step-13-create-variations-2.png)

###### 4.16 Launch your Experiment

![step 16 - launch experiment](/img/scenarios/gwo-new-experiment-step-14-launch.png)

![step 16 - started experiment](/img/scenarios/gwo-new-experiment-step-15-started-experiment.png)

###### 4.16 Stop your Experiment

Next click on **Stop**, **Continue** and **Save Changes** to stop this experiment again.

![step 16 - stopped experiment](/img/scenarios/gwo-new-experiment-step-16-stopped-experiment.png)

<div class="alert-message block-message info">
  <p style="text-align:center"><strong>The setup for your first experiment is now completed. You can carry on with the Usage tab.</strong></p>
</div>