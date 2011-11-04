---
layout: default
title: "Manual AdSense style configuration in javascript"
category: blog
---
## Manual AdSense style configuration in javascript

Time to add a simple style configuration. Look the following code.

{% highlight html %}
<script type="text/javascript"><!--
google_color_border = '000000';
google_color_bg     = 'DDDDDD';
google_color_link   = '000080';
google_color_url    = '008000';
google_color_text   = '000000';
//-->
</script>

<script type="text/javascript"><!--
google_ad_client = "ca-pub-4766859902889277";
/* first_ad */
google_ad_slot = "5248223455";
google_ad_width = 728;
google_ad_height = 90;
google_adtest = 'on';
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}

This also explains why we don't violate the AdSense terms of not to change the AdSense code.

Instead of changing it we only declare some variables before it and the code then reacts on their values.

