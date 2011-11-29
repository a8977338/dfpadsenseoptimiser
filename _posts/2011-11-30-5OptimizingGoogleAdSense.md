---
layout: "book"
title: "Chapter 5 - Optimizing Google AdSense"
permalink: "/book/chapter-5-optimizing-google-adsense-with-google-website-optimizer.html"
abstract: "In the previous two chapters you have seen how to use both Google AdSense and Google Website Optimizer on their own. This chapter focusses on combining the two to optimize your AdSense revenue."
submenu:
  - { hook: "integration",  title: "Combining AdSense and Website Optimizer" }
  - { hook: "styling",      title: "Multivariate Ad Styling" }
  - { hook: "positioning",  title: "Multivariate Ad Positioning" }
  - { hook: "premium",  title: "Optimizing Premium AdSense" }
  - { hook: "demo",         title: "Demo" }
---
## Chapter 5 - Optimizing Google AdSense with Google Website Optimizer

<br/>
![Google AdSense](/img/google-adsense-logo.gif "Google AdSense logo") &nbsp;&nbsp;&nbsp; ![Google Website Optimizer](/img/google-website-optimizer-logo.gif "Google Website Optimizer logo")

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

The above code defines two ad positions (_top_ and _bottom_) which will only be filled when a variable (_ad_positions_) is set. These variables are set in the first section which again is a Google Website Optimizer section.

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

### Optimizing Premium AdSense<a name="premium">&nbsp;</a>

Testing style variations for premium AdSense is easier and more complex to do at the same time.

As you are entirely in control over the style of your ad units you can change whatever you want. But because you can do almost everything things can easily grow out of hand.

Consider [the example from chapter 5 - Using Google AdSense](/book/chapter-3-using-google-adsense.html#premium "the example from chapter 5 - Using Google AdSense"). The best way to provide style variations for this would be the use of stylesheets.

For this you would have to make sure that the markup you use for the apps contains no inline styles and that each element is selectable via CSS selectors so you can apply rules to them.

If all that is ensured you could define a variation like this.

{% highlight html %}
<style type="text/css">
#googleads { width:614px; border-bottom: 1px solid #d2d2d2; padding:4px; text-align:left; }
#googleads div { font-weight:bold; border-top: 1px solid #d2d2d2; padding:4px; padding: 0 0 2px; margin-bottom: 5px; color:#d2d2d2; }
#googleads a:not(:first-child):not(:last-child) { font-weight:bold; color: #CC0000; font-family: Georgia, Times New Roman, serif; font-size:15px; }
#googleads a:first-child { color:#666666; }
#googleads span { font-weight:normal; font-size:12px; }
#googleads a:last-child { font-weight:bold; font-size:12px; color:#666666; }
</style>
{% endhighlight %}

> The above example could be much easier concerning the CSS selectors when the example markup would make use of more IDs and classes.

### Demo<a name="demo">&nbsp;</a>

[Click here](/gwo-adsense-test-page.html) to see a demonstration of the above code.
