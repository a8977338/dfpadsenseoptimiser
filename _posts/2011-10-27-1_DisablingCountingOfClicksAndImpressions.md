---
layout: default
title: "Disabling counting of clicks and impressions"
---
## Disabling counting of clicks and impressions

As in this experiment I will deal with live adverts I have to make sure that I do not violate the terms of Google AdSense which are quite explicit when it comes to self inflicted clicks.

To respect that I was looking for a way to "sandbox" my adverts. After all I want to generate experience with this experiment rather than money (which will eventually happen later).

So this was originally one of my adverts.

{% highlight html %}
<script type="text/javascript"><!--
google_ad_client = "ca-pub-4766859902889277";
/* first_ad */
google_ad_slot = "5248223455";
google_ad_width = 728;
google_ad_height = 90;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}

By adding the following line of javascript I do not violate the terms of not changing the AdSense code but legally mark these adverts as tests.

{% highlight javascript %}
google_adtest = 'on';
{% endhighlight %}

The resulting advert code looks like this.

{% highlight javascript %}
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

With this in place I should be safe not to be banned for fraud if I accidentally click on the ads or generate too many impressions.

