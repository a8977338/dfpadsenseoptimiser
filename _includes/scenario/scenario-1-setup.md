**Technical skill required:** <span class="label">copy&paste will do</span>

<div class="alert-message block-message info">
<h3>Setup</h3>
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

If you plan to run experiments on more than one website please make sure that all of the have an Analytics pixel implemented and that their AdSense account is connected accordingly.

### 3. Create Base Experiment

In your **Experiments** tab click on *Create another experiment*.

![step 1 - create](/img/scenarios/gwo-new-experiment-step-1-create.png)

Choose to create a *Multivariate Experiment*.

![step 2 - multivariate](/img/scenarios/gwo-new-experiment-step-2-multivariate.png)

Ignore the next page: just *tick the checkbox and continue*.

![step 3 - complete](/img/scenarios/gwo-new-experiment-step-3-complete.png)

On the next page you need to define *a descriptive name* for your experiment and provide two existing but otherwise unimportant URLs.

![step 4 - identify test page](/img/scenarios/gwo-new-experiment-step-4-setup.png)

Confirm that *You will install and validate the JavaScript tags*.

![step 5 - identify conversion page](/img/scenarios/gwo-new-experiment-step-6-you-will-do-it.png)

### 4. Validation

Google Website Optimizer requires you to validate your implementation. As for optimizing AdSense the default Website Optimizer code is not suitable you need to forge the validation process.

On the page *Step 2: Install and validate JavaScript tags* find the *Control and Tracking Script* and copy it to your clipboard.

![step 6 - identify conversion page](/img/scenarios/gwo-new-experiment-step-7-control-and-tracking-script.png)

Then open a new browser window and go to the [Optimizing AdSense Code Generator](/code-generator.html "Optimizing AdSense Code Generator") and paste the code into the textbox.

![step 7 - open code generator](/img/scenarios/optad-code-generator-1-dialog.png)

> You can also rename, add or remove the sections. The default values are based on the recommendations chapter of this scenario.

Now **click on *1. Validation Page*** to download a generated webpage to pass validation. Save this document somewhere on your computer.

![step 8 - download validation page](/img/scenarios/gwo-validation-generator-6-download-validation-page.png)

Leave that browser window open but go back to Google Website Optimizer to continue with the validation.

Choose **offline validation**.

![step 9 - validation](/img/scenarios/gwo-new-experiment-step-8-validation-0.png)

Browse and select the validation page you just downloaded for *both the Test Page and the Conversion Page*.

![step 10 - validation](/img/scenarios/gwo-new-experiment-step-9-validation-1.png)

Click on *Continue* to validate the page you downloaded.

![step 11 - validation](/img/scenarios/gwo-new-experiment-step-10-validation-2.png)

Continue to the next step.

![step 12 - validation](/img/scenarios/gwo-new-experiment-step-11-validation-3.png)

### 5. Create Variations

With the next dialog you can create variations for each section you specified.

A common color variation could look like this.

![step 14 - create variations 2](/img/scenarios/gwo-new-experiment-step-13-create-variations.png)

> Make sure that you create *the same variations for each color section and also the same variations for each corner section*.

> You can edit, add and remove variations later as well but it is recommended to define all desired variations in the *Blueprint Experiment*.

### 6. Launch your Experiment

![step 15 - launch experiment](/img/scenarios/gwo-new-experiment-step-14-launch.png)

![step 16 - started experiment](/img/scenarios/gwo-new-experiment-step-15-started-experiment.png)

### 7. Stop your Experiment

Next click on **Stop**, **Continue** and **Save Changes** to stop this experiment again.

![step 17 - stopped experiment](/img/scenarios/gwo-new-experiment-step-16-stopped-experiment.png)

<div class="alert-message block-message info">
  <p style="text-align:center"><strong>The setup for your blueprint experiment is now completed. You can carry on with the Usage tab.</strong></p>
</div>