**Duration:** <span class="label notice">15-30 min</span>, **Technical skill required:** <span class="label notice">copy&paste will do</span>

<div class="alert-message block-message info">
<h3>Usage</h3>
<p>This chapter assumes that you have completed the <em>Setup</em> first as it copies an existing experiment rather than creating one.</p>
<br />
<p class="label notice" style="text-align:center">It is assumed that you start with an existing page with working AdSense ad units!</p>
<br />
<p>After following this chapter you will have successfully installed an AdSense experiment on a website. You can repeat this chapter for as many pages/sites as you require.</p>
</div>

### 1. Copy Blueprint Experiment

Login to your Google Website Optimizer account and choose the Blueprint Experiment that you created in Setup (also consult Recommendations about best practices).

![step 1 - choose experiment](/img/scenarios/gwo-new-experiment-step-16-stopped-experiment.png)

Click on *Copy* to create your new and already validated experiment with exactly the same settings, sections and variations.

![step 2 - create a copy](/img/scenarios/gwo-copy-experiment-1-copy.png)

### 2. Review your Copy

You can now review these settings and even add new or remove existing variations.

![step 3 - review your copy](/img/scenarios/gwo-copy-experiment-2-review.png)

### 3. Generate Code

Go to the still open [GWO Validation Generator](/verification.html "GWO Validation Generator"). If you closed the window you opened in the Setup chapter in the meantime please go to step *2. Tag pages* to copy the Control and Tracking Script code and paste it in the generators textbox.

![step 4 - copy control and tracking code](/img/scenarios/gwo-new-experiment-step-7-control-and-tracking-script.png)

Then provide the ID of the Google Analytics profile that is connected with your AdSense account.

![step 5 - ad google analytics profile id](/img/scenarios/optad-code-generator-2-analytics-id.png)

> You can also rename, add or remove the sections. The default values are based on the recommendations chapter of this scenario. Make sure that the section names are the same as in your experiment!

Now **click on *2. Generate Codes*** to generate the codes you will need to add to your website.

![step 6 - generated codes](/img/scenarios/optad-code-generator-3-generated-codes.png)

### 4. Extend AdSense Code

Copy the generated codes from the tool and paste them to your website code like the following.

#### 4.1 Add Section Codes

Consider the following Ad Unit code.

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

Add the appropriate section codes in front of it. Following the Recommendations it should then look like this:

{% highlight html %}
<script>utmx_section("optad_1_col")</script>
</noscript>
<script>utmx_section("optad_1_crn")</script>
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

> You can stack multiple section codes in from of an ad unit like two in the above example.

Repeat this step for each ad unit accordingly.

#### 4.2 Add Control and Tracking Code

Paste the generated *Control and Tracking Code* **in front of the first ad unit code!**.

This is what it looked like before.

{% highlight html %}
<script>utmx_section("optad_1_col")</script>
</noscript>
<script>utmx_section("optad_1_crn")</script>
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

And this is what it should look like afterwards.

{% highlight html %}
<!-- Google Website Optimizer Control Script -->
<script>
function utmx_section(){}function utmx(){}
(function(){var k='0039476117',d=document,l=d.location,c=d.cookie;function f(n){
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
var _gaq = _gaq || [];
(function(_gaq){
  var ga  = 'UA-123456-1',
      gwo = '0039476117',
      e   = 'www.optimization-adsense.eu';
  (function(fn) {
    var d = document;
    if(d.addEventListener) d.addEventListener('DOMContentLoaded', function(){ d.removeEventListener('DOMContentLoaded', arguments.callee, false); fn(); }, false);
    else if(d.attachEvent) d.attachEvent('onreadystatechange', function(){ if(d.readyState === "complete"){ d.detachEvent('onreadystatechange', arguments.callee); fn(); }});
  })(function(){
    if (typeof(utmx) == "function" && typeof(utmx_global_vd) == "object") {
      var c = (function(s,l){while(s.length<l) s='0'+s; return s;})(utmx('combination').toString(), 4);
      var v = []; for (s in utmx_global_vd) { v.push( utmx("variation_number", s) ); }
      var v = v.join(','), n = e+' '+gwo+'#'+c+' '+location.pathname.replace(/[^\/]+$/, '');
      if(!(window._gaq instanceof Array)){
        try{ _gat._getTracker(ga)._trackSocial(n, v); } catch(err) { }
      }else{
        _gaq.push(['_trackSocial', n, v]);
      }
    }
  });
})(_gaq);
</script>
<!-- End of Google Website Optimizer Tracking Script -->
<script>utmx_section("optad_1_col")</script>
</noscript>
<script>utmx_section("optad_1_crn")</script>
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

### 5. Run your Experiment

As soon as the above changes to your websites code are live click on *Launch now*.

![step 7 - launch experiment](/img/scenarios/gwo-new-experiment-step-14-launch.png)

Your experiment is now running.

![step 8 - run your experiment](/img/scenarios/gwo-copy-experiment-5-running.png)

<div class="alert-message block-message info">
  <h4>You should now have a live experiment on your website!</h4>
  <p>Take a look at the following two demo pages and their source code to verify your settings.</p>
  <br />
  <ol>
    <li><a href="/demo/1-default-adsense-integration.html">Default AdSense Integration</a></li>
    <li><a href="/demo/2-default-adsense-and-gwo-integration.html">Default AdSense and GWO Integration</a></li>
  </ol>
</div>
