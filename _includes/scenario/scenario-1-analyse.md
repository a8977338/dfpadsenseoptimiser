<div class="alert-message block-message info">
<h3>Analyse</h3>
<p>This chapter assumes that you have completed the <em>Setup</em> first as it copies an existing experiment rather than creating one.</p>
<br />
<p>After following this chapter you will have successfully installed an AdSense experiment on a website. You can repeat this chapter for as many pages/sites as you require.</p>
</div>

### 1. Create Segment

Login to your Google Analytics account and create a new segment.

![step 1 - create segment](/img/scenarios/ga-analyse-1-create-segment.png)

Filter for **Custom Variable (Key 5)** (assuming your Custom Variable Index was 5) containing the string "exp_XXXXXXXX".

![step 1 - create experiment segment](/img/scenarios/ga-analyse-2-create-experiment-segment.png)

You can browse to *Visitor / Custom Variables* first to get the appropriate variable name for your experiment in this example it's "exp_0443911789".

![step 1 - look up variable name](/img/scenarios/ga-analyse-3-look-up-experiment.png)

### 2. Use Segment

If this new segment is not yet active after saving it you have to select it from the *ADVANCED SEGMENTS* menu.

![step 2 - use segment](/img/scenarios/ga-analyse-4-use-segment.png)

### 3. Browse AdSense Pages

Browse to *Content / AdSense / AdSense Pages* to see your AdSense figures for the pages your experiment runs on.

![step 3 - browse adsense pages](/img/scenarios/ga-analyse-5-browse-adsense-pages.png)

### 4. Analyse!

Before you can draw any conclusions you have to add **Custom Variable (Value 05)** (assuming your Custom Variable Index was 5) as a *Secondary dimension* like in this screenshot.

![step 4 - analyse](/img/scenarios/ga-analyse-6-analyse.png)

Now you can order by **AdSense CTR** and pick the combination with the best value.

### 5. Pick Combination

As you see in the above screenshot the combinations are represented with strings like `combo_XX:x,y,z` where `XX` is the number of the combination, `y` the variation number for the first section, `x` the variation number for the second section and `z` the variation number for the third section and so on if you defined more than three sections.

You can now login to your Google Website Optimizer again open the appropriate experiment and pick the appropriate variations.

![step 5 - pick variations](/img/scenarios/gwo-analyse-1-pick-variations.png)

If the best performing combination would be i.e. `combo_19:1,0,2` you would pick the following variations.

* **adsense_color_one** => *col1*
* **adsense_color_two** => *Original*
* **adsense_color_three** => *col2*

### 6. Apply Best Performing Variations

You can now apply these variation in one of two ways.

#### 6.1 Change Ad Unit Style in AdSense

Login to your AdSense account and change the style of the appropriate ad unit.

![step 6 - style ad unit](/img/scenarios/adsense-analyse-1-style.png)

#### 6.2 Write Variation before Ad Unit Code

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

### 7. End Experiment

To end this experiment you have to remove the *Control and Tracking Code* from your website.

You should also remove the *Section Codes* although that is not necessary.

In Google Website Optimizer click on **Stop**, **Continue** and **Save Changes** to stop this experiment.

![step 16 - stopped experiment](/img/scenarios/gwo-new-experiment-step-16-stopped-experiment.png)

