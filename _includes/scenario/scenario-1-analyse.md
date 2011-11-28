**Duration:** <span class="label notice">15-30 min</span>, **Technical skill required:** <span class="label notice">copy&paste will do</span>

<div class="alert-message block-message info">
<h3>Analyse</h3>
<p>This chapter assumes that you have completed the <em>Setup</em> first as it copies an existing experiment rather than creating one.</p>
<br />
<p>After following this chapter you will have successfully installed an AdSense experiment on a website. You can repeat this chapter for as many pages/sites as you require.</p>
</div>

### 1. Use Latest Google Analytics Interface

Make sure you use the latest Google Analytics web interface. If in the top bar next to your account name and email address you see a *New Version* link - click it.

### 2. View Experiment Data

The experiment data is stored using the so called Social Interaction Analytics feature and appear under *Visitor / Social / Engagement*.

![step 1 - browse visitor social engagement](/img/scenarios/ga-visitor-social-engagement.png)

Set the Explorer to the *AdSense* view.

![step 2 - adsense view](/img/scenarios/ga-explorer-adsense.png)

Browse to *Socially Engaged* and sort by *AdSense CTR* to get the experiment combination with the best *click through rate* on top.

![step 3 - sort by ctr](/img/scenarios/ga-adsense-per-experiment-combination-and-path.png)

> You might need to apply a filter if other social activities are tracked as well.

### 3. Pick Combination

In the above screenshot you can see values for *Social Source and Action* that include the following information.

* *name* (i.e. `www.optimizing-adsense.eu`), identifying this project. use this value for your filter if necessary.
* *experiment id* (i.e. `0443911789`), the id of your experiment.
* *combination id* (i.e. `#0004`), representing the combination that was used for this particular case.
* *variation sequence* (i.e. `1,2,0`), tells you which variations were used per section where `0` represents the original (unchanged) variation.

You can now login to your Google Website Optimizer again open the appropriate experiment and pick the appropriate variations.

If the best performing *variation sequence* would be i.e. `1,2,0,1` you would pick the following variations.

* **optad_1_col** => *color variation #1*
* **optad_1_crn** => *corner variation #2*
* **optad_2_col** => *original*
* **optad_2_crn** => *corner variation #1*

### 4. Apply Best Performing Variations

You can now apply these variation in one of two ways.

#### 4.1 Change Ad Unit Style in AdSense

Login to your AdSense account and change the style of the appropriate ad unit.

![step 6 - style ad unit](/img/scenarios/adsense-analyse-1-style.png)

#### 4.2 Write Variation before Ad Unit Code

Go to your websites code again and change this:

{% highlight html %}
<script>utmx_section("adsense_color_one")</script>
</noscript>
<script type="text/javascript"><!--
google_ad_client = "ca-pub-5296440426067087";
/* test_small_square */
google_ad_slot = "3016468276";
google_ad_width = 200;
google_ad_height = 200;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}

to this:

{% highlight html %}
<script type="text/javascript">
google_color_border = "FFFFFF";
google_color_bg = "0000FF";
google_color_link = "FFFFFF";
google_color_text = "000000";
google_color_url = "008000";
</script>
<script type="text/javascript"><!--
google_ad_client = "ca-pub-5296440426067087";
/* test_small_square */
google_ad_slot = "3016468276";
google_ad_width = 200;
google_ad_height = 200;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}

### 5. End Experiment

To end this experiment you have to remove the *Control and Tracking Code* from your website.

You should also remove the *Section Codes* although that is not necessary.

In Google Website Optimizer click on **Stop**, **Continue** and **Save Changes** to stop this experiment.

![step 16 - stopped experiment](/img/scenarios/gwo-new-experiment-step-16-stopped-experiment.png)

