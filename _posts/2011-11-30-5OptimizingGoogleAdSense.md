---
layout: "book"
title: "Chapter 5 - Optimizing Google AdSense"
permalink: "/book/chapter-5-optimizing-google-adsense-with-google-website-optimizer.html"
abstract: "In the previous two chapters you have seen how to use both Google AdSense and Google Website Optimizer on their own. This chapter focusses on combining the two to optimize your AdSense revenue."
submenu:
  - { hook: "integration",  title: "Combining AdSense and Website Optimizer" }
  - { hook: "styling",      title: "Multivariate Ad Styling" }
  - { hook: "positioning",  title: "Multivariate Ad Positioning" }
  - { hook: "demo",         title: "Demo" }
  - { hook: "tracking",     title: "Tracking Ad Click Conversion" }
  - { hook: "analytics",    title: "Ignore all GWO reports" }
---
## Chapter 5 - Optimizing Google AdSense with Google Website Optimizer

{{ page.abstract }}

### Combining AdSense and Website Optimizer<a name="integration">&nbsp;</a>

In the previous two chapters you will have noticed the obvious similarity between [styling an AdSense advert](/book/chapter-3-using-google-adsense.html#styling "Using Google AdSense - Dynamic Ad Styling") and the Website Optimizer example of [the colored button](http://a8977338.github.com/book/chapter-4-using-google-website-optimizer.html#demo "Using Google Website Optimizer - Demo"). This is of course a deliberate choice which should make it easy to understand how a combination of both tools can look like.

### Multivariate Ad Styling<a name="styling">&nbsp;</a>

Take a look at the following code and try to make sense of it.

{% highlight html %}
<script>utmx_section("gwo_adsense_style")</script>
<script type="text/javascript"><!--
google_color_border = '000000';
google_color_bg     = 'DDDDDD';
google_color_link   = '000080';
google_color_url    = '008000';
google_color_text   = '000000';
//-->
</script>
</noscript>

<script type="text/javascript"><!--
google_ad_client = "ca-pub-0123456789abcdef";
/* custom_ad_name */
google_ad_slot = "0123456789";
google_ad_width = 125;
google_ad_height = 125;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}

Notice that the dynamic styling part is simply wrapped in a _page section_ bounded by a section start tag and end tag.

This way we can set up a multivariate test in Google Website Optimizer with many variations of the color scheme section.

### Multivariate Ad Positioning<a name="positioning">&nbsp;</a>

With a little more effort you can also test different positions for your AdSense ads. Consider the following code.

{% highlight html %}
{% include gwo-adsense-test-section-code.html %}

{% include gwo-adsense-position-1-code.html %}

{% include gwo-adsense-position-2-code.html %}
{% endhighlight %}

The above code defines two ad positions (_top_ and _bottom_) which will only be filled when a variable (_ad_positions['top']_ or _ad_positions['bottom']_) is set. These variables are set in the first section which again is a Google Website Optimizer section.

This section can then be replaced by a variation like the following.

{% highlight html %}
<script>utmx_section("gwo_adsense_position")</script>
<script type="text/javascript"><!--
var ad_positions = new Array();
ad_positions['bottom'] = { slot: "0123456789", width: 200, height: 200 }
//-->
</script>
</noscript>
{% endhighlight %}

With this variation the same ad would be placed in the _bottom_ position instead of the _top_ one.

There are many ways to achieve the same thing so you might want to experiment to find a solution that is more suitable to your situation. Javascript skill are required!

### Demo<a name="demo">&nbsp;</a>

[Click here](/gwo-adsense-test-page.html) to see a demonstration of the above code.

### Tracking Ad Click Conversion<a name="tracking">&nbsp;</a>

The above was easy so far. Now things get a little more complicated.

Google Website Optimizer uses a hidden Google Analytics profile to track test and conversion pages. This works well for testing landing pages and with only small adjustments can easily work for other user interface tests.

However Google AdSense is a special case as we can not possibly add the _conversion script_ to the ad tarkets!

There are two possible ways to solve this.

The first and maybe obvious solution is to create a script that monitors if the ads were clicked and then use [Google Analytics Event Tracking](http://code.google.com/apis/analytics/docs/tracking/eventTrackerGuide.html "Google Analytics Event Tracking") to track conversions.

This approach has two drawbacks. First of all AdSense ad units are served inside iframes and therefor are inaccessible for your script so you can not actually track the ad clicks. The best thing you can do is to _guesstimate_ the clicks by monitoring the _mouse position_ and the current window loosing _focus_ and when the mouse was over an advert when the focu was lost you can guess that the user clicked on the ad. But unfortunately there are situations that will not trigger your script but should and others that will but shouldn't. You can read about such an approach [here](http://www.bennadel.com/blog/1752-Tracking-Google-AdSense-Clicks-With-jQuery-And-ColdFusion.htm "Blog post: Tracking Google AdSense Clicks With jQuery And ColdFusion").

The other drawback is that you can not be entirely sure if tracking ad clicks complies to the Google AdSense terms. I would think it's fine but it's a sort of grey area best to avoid.

When you're a premium publisher you probably don't face the iframe problem and you could easily attach javascript event to the ads which you can use for tracking the reral clicks. Still the legal situation remains uncertain.

This is not the recommended way to do it!

### Ignore all GWO reports<a name="analytics">&nbsp;</a>

The second approach takes a different route altogether. It acknowledges the fact that the GWO way of tracking conversions is not possible for AdSense ad clicks.

If you already used Google AdSense before you will probably know that it can be easily connected to your Google Analytics account. This allows you to see the AdSense Revenue for each content, referrer or other analytics segment.

So the idea is to instead of using the Google Website Optimizer reporting to build segments that represent the the current _test variation_ and then consult your Google Analytics account for a detailed report on AdSense Revenue per test variation.

Consider the default Google Analytics code.

{% highlight html %}
{% include google-analytics-code.html %}
{% endhighlight %}

