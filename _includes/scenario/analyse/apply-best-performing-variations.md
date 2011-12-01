### 4. Apply Best Performing Variations

You can now apply the best performing variation in one of two ways.

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
