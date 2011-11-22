<div class="alert-message block-message info">
<h3>Usage</h3>
<p>This chapter assumes that you have completed the <em>Setup</em> first as it copies an existing experiment rather than creating one.</p>
<br />
<p class="label notice" style="text-align:center">It is assumed that you start with an existing page with working AdSense ad units!</p>
<br />
<p>After following this chapter you will have successfully installed an AdSense experiment on a website. You can repeat this chapter for as many pages/sites as you require.</p>
</div>

### 1. Choose a Blueprint Experiment

Login to your Google Website Optimizer account and choose a Blueprint Experiment that you created in Setup (also consult Recommendations about best practices).

![step 1 - choose experiment](/img/scenarios/gwo-new-experiment-step-16-stopped-experiment.png)

If you followed the Recommendation your Blueprint Experiment is probably called *Blueprint Color Variations* or *Blueprint Corner Variations*.

### 2. Create a Copy

Click on *Copy* to create your new and already validated experiment with exactly the same settings, sections and variations.

![step 2 - create a copy](/img/scenarios/gwo-copy-experiment-1-copy.png)

### 3. Review your Copy

You can now review these settings and even ad new variations.

![step 3 - review your copy](/img/scenarios/gwo-copy-experiment-2-review.png)

### 4. Copy Control and Tracking Code

Go to step *2. Tag pages* to see the Control and Tracking Script code.

![step 4 - copy control and tracking code](/img/scenarios/gwo-copy-experiment-3-copy-code.png)

Now copy the code.

![step 4 - copy control and tracking code](/img/scenarios/gwo-new-experiment-step-7-control-and-tracking-script.png)

### 5. Paste Code to Code Generator

Go to [GWO Validation Generator](/verification.html "GWO Validation Generator") and paste the code from the previous step.

![step 5 - paste control and tracking code](/img/scenarios/gwo-validation-generator-2-paste-code.png)

### 6. Enter Custom Variable Index

Enter the Custom Variable Index (1-5) as defined during Setup.

![step 6 - enter custom variable index](/img/scenarios/gwo-validation-generator-3-enter-custom-variable-index.png)

### 7. Add Sections

Add *Sections*.

![step 7 - add sections](/img/scenarios/gwo-validation-generator-5-add-sections.png)

Make sure you choose the exact same section names as you did for the experiment.

![step 7 - add sections](/img/scenarios/gwo-copy-experiment-4-sections.png)

### 8. Generate Codes for your Experiment

Click on *Generate Codes*.

![step 8 - click on generate codes](/img/scenarios/gwo-validation-generator-7-click-on-generate-code.png)

### 9. Extend AdSense Ad Units with Generated Codes

Copy the generated codes from the tool.

![step 9 - extend adsense ad units with generated codes](/img/scenarios/gwo-validation-generator-8-generated-code.png)

And paste them to your website code like the following.

#### 9.1 Paste Section Codes before Ad Units

The Ad Unit code.

{% highlight html %}
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

Should then look like this:

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

In case you want to run multiple experiments (i.e. color scheme variations _and_ corner stlye variations) you can stack multiple section codes in from of an ad unit.

{% highlight html %}
<script>utmx_section("adsense_color_one")</script>
</noscript>
<script>utmx_section("adsense_corner_one")</script>
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

#### 9.2 Paste Control and Tracking Code before Google Analytics Code

Paste the generated *Control and Tracking Code* **before** the your Google Analytics code.

This is what it looked like before.

{% highlight html %}
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27081588-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
{% endhighlight %}

And this is what it should look like afterwards.

{% highlight html %}
<!-- Google Website Optimizer Control Script -->
<script>
function utmx_section(){}function utmx(){}
(function(){var k='0443911789',d=document,l=d.location,c=d.cookie;function f(n){
if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.indexOf(';',i);return escape(c.substring(i+n.
length+1,j<0?c.length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;
d.write('<sc'+'ript src="'+
'http'+(l.protocol=='https:'?'s://ssl':'://www')+'.google-analytics.com'
+'/siteopt.js?v=1&utmxkey='+k+'&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='
+new Date().valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
'" type="text/javascript" charset="utf-8"></sc'+'ript>')})();
</script>
<!-- End of Google Website Optimizer Control Script -->
<!-- Alternative Google Website Optimizer Tracking Script -->
<script type="text/javascript">
// track a custom variable like "combo_2:small(1),large(0)"
if (typeof(utmx) == "function" && typeof(utmx_global_vd) == "object") {
  var _gaq = _gaq || [], _ss = [], _cw = "combo_" + utmx("combination") + ":";
  for (_s in utmx_global_vd) { _ss.push( utmx("variation_number", _s) ); }
  _cw += _ss.join(",");
  _gaq.push(['_setCustomVar', 5, 'exp_0443911789', _cw.substr(0,46), 3]);
}
</script>
<!-- End of Google Website Optimizer Tracking Script -->
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27081588-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
{% endhighlight %}

### 10. Run your Experiment

As soon as the above changes to your websites code are live click on *Launch now*.

![step 10 - launch experiment](/img/scenarios/gwo-new-experiment-step-14-launch.png)

Your experiment is now running.

![step 10 - run your experiment](/img/scenarios/gwo-copy-experiment-5-running.png)

<div class="alert-message block-message info">
  <h4>You should now have a live experiment on your website!</h4>
  <p>Take a look at the following two demo pages and their source code to verify your settings.</p>
  <br />
  <ol>
    <li><a href="/demo/1-default-adsense-integration.html">Default AdSense Integration</a></li>
    <li><a href="/demo/2-default-adsense-and-gwo-integration.html">Default AdSense and GWO Integration</a></li>
  </ol>
</div>
