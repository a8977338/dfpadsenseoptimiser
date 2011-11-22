<div class="alert-message block-message info">
<h3>Analyse</h3>
<p>This chapter assumes that you have completed the <em>Setup</em> first as it copies an existing experiment rather than creating one.</p>
<br />
<p>After following this chapter you will have successfully installed an AdSense experiment on a website. You can repeat this chapter for as many pages/sites as you require.</p>
</div>

### 1. Create Segment

Login to your Google Analytics account and create a new segment.

![step 1 - create segment](/img/scenarios/ga-analyse-1-create-segment.png)

Filter for **Custom Variable (Key 5)** (assuming your Custom Variable Index was 5) containing the string "exp_XXXXXXXX". You can browse to *Visitor / Custom Variables* first to get the appropriate variable name for your experiment in this example it's "exp_0443911789".

![step 1 - create experiment segment](/img/scenarios/ga-analyse-2-create-experiment-segment.png)

### 2. Use Segment

If this new segment is not yet active after saving it you have to select it from the *ADVANCED SEGMENTS* menu.

![step 2 - use segment](/img/scenarios/ga-analyse-3-use-segment.png)

### 3. Browse AdSense Pages

Browse to *Content / AdSense / AdSense Pages* to see your AdSense figures for the pages your experiment runs on.

![step 3 - browse adsense pages](/img/scenarios/ga-analyse-4-browse-adsense-pages.png)

### 4. Analyse!

Before you can draw any conclusions you have to add **Custom Variable (Value 05)** (assuming your Custom Variable Index was 5) as a *Secondary dimension* like in this screenshot.

![step 4 - analyse](/img/scenarios/ga-analyse-5-analyse.png)

Now you can order by **AdSense CTR** and pick the combination with the best value for it.