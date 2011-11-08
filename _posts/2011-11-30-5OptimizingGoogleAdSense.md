---
layout: "book"
title: "Chapter 5 - Optimizing Google AdSense"
category: book
permalink: "/book/chapter-5-optimizing-google-adsense-with-google-website-optimizer.html"
abstract: "In the previous two chapters you have seen how to use both Google AdSense and Google Website Optimizer on their own. This chapter focusses on combining the two to optimize your AdSense revenue."
submenu:
  - { hook: "integration",  title: "Combining AdSense and Website Optimizer" }
  - { hook: "styling",      title: "Multivariate Ad Styling" }
  - { hook: "positioning",  title: "Multivariate Ad Positioning" }
  - { hook: "analytics",    title: "Google Analytics" }
  - { hook: "tracking",     title: "Tracking Ad Conversion" }
  - { hook: "guestimation", title: "Guestimation" }
  - { hook: "demo",         title: "Demo" }
---
## Chapter 5 - Optimizing Google AdSense with Google Website Optimizer

{{ page.abstract }}

### Combining AdSense and Website Optimizer<a name="integration">&nbsp;</a>

In the previous two chapters you will have noticed the obvious similarity between [styling an AdSense advert](/dfpadsenseoptimiser/book/chapter-3-using-google-adsense.html#styling "Using Google AdSense - Dynamic Ad Styling") and the Website Optimizer example of [the colored button](http://a8977338.github.com/dfpadsenseoptimiser/book/chapter-4-using-google-website-optimizer.html#demo "Using Google Website Optimizer - Demo"). This is of course a deliberate choice which should make it easy to understand how a combination of both tools can look like.

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

Notice that the dynamic styling part is simply wrapped in a _page section_ bounded by a section start tag (_<script>utmx_section("gwo_adsense_section")</script>_) and end tag (_</noscript>_).

This way we can set up a multivariate test in Google Website Optimizer with many variations of the color scheme section.

### Multivariate Ad Positioning<a name="positioning">&nbsp;</a>

With a little more effort you can also test different positions for your AdSense ads. Consider the following code.

{% highlight html %}
<script>utmx_section("gwo_adsense_position")</script>
<script type="text/javascript"><!--
var ad_positions = new Array();
ad_positions['top'] = { slot: "0123456789", width: 200, height: 200 }
//-->
</script>
</noscript>

<!-- somewhere at the top of your page -->
<script type="text/javascript"><!--
google_ad_client = "ca-pub-0123456789abcdef";
if (ad_positions['top']) {
  google_ad_slot =   ad_positions['top'].slot;
  google_ad_width =  ad_positions['top'].width;
  google_ad_height = ad_positions['top'].height;
  document.write('<scr'+'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>');
} else { google_ad_slot = false; }
//-->
</script>

<!-- somewhere at the bottom of your page -->
<script type="text/javascript"><!--
google_ad_client = "ca-pub-0123456789abcdef";
if (ad_positions['bottom']) {
  google_ad_slot =   ad_positions['bottom'].slot;
  google_ad_width =  ad_positions['bottom'].width;
  google_ad_height = ad_positions['bottom'].height;
  document.write('<scr'+'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>');
} else { google_ad_slot = false; }
//-->
</script>
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

### Google Analytics<a name="analytics">&nbsp;</a>

default integration vs optimizer setup

### Tracking Ad Conversion<a name="tracking">&nbsp;</a>

...

### Guestimation<a name="guestimation">&nbsp;</a>

...

### Demo<a name="demo">&nbsp;</a>

code, example, ..
