---
layout: "book"
title: "Chapter 3 - Using Google AdSense"
permalink: "/book/chapter-3-using-google-adsense.html"
abstract: "Learn everything you need to know about Google AdSense to optimize your ad revenue in this chapter. This covers the essentials necessary to apply this tutorial to your website."
submenu:
  - { hook: "integration", title: "Standard Integration" }
  - { hook: "styling",     title: "Dynamic Ad Styling" }
  - { hook: "premium",     title: "Premium AdSense" }
  - { hook: "sandbox",     title: "Sandbox Mode" }
  - { hook: "demo",        title: "Demo" }
---
## Chapter 3 - Using Google AdSense

{{ page.abstract }}

Google AdSense already provides numerous [helpful resources](http://adsense.google.com/support/ "Google AdSense Support homepage") so I am not going to go into detail here but briefly explain how to implement it on your site and then move on to describe the parts necessary for optimizing your ad revenue.

### Standard Integration<a name="integration">&nbsp;</a>

This is a default code example like you would get from Google AdSense when clicking on _My Ads_ / _Get Code_.

{% highlight html %}
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

In a nutshell the above code identifies you AdSense account (*google_ad_client*), the ad unit (*google_ad_slot*) and its dimensions (*google_ad_width_ and _google_ad_height*). Then a Google AdSense script is loaded which will eventually put an advert onto your website.

### Dynamic Ad Styling<a name="styling">&nbsp;</a>

When you create a new ad unit using the Google AdSense web interface you can modify certain layout parameters such as the dimensions and a color scheme. In this tutorial we want to find the optimal layout options to boost your click through rate. Doing this manually would be tedious so there has to be a more dynamic approach.

Before explaining the existing options please be aware of the following paragraph from the [Google AdSenseTM Online Standard Terms and Conditions](https://www.google.com/adsense/localized-terms?rc=GB "Google AdSenseTM Online Standard Terms and Conditions (localized for GB)").

> *16.2   Save as permitted by law, You will not modify, adapt, translate, prepare derivative works from, decompile, reverse engineer, disassemble or otherwise attempt to derive source code from any Google services, software, or documentation, or create or attempt to create a substitute or similar service or product through use of or access to the Programme or proprietary information related thereto.*

Modification and adaption are both very soft terms arguably might prohibit what is done in this tutorial. However I believe that the steps described in the following paragraphs and chapters __do not__ violate these terms as they a) do not change any Google code, b) realize in javascript what can be done using the Google AdSense web interface anyway.

Consider the following example.

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

Notice that the default code is not changed at all. Instead there is a new script block just before it in which some parameters are defined that the Google code will interpret.

This way you can set the color scheme for the ad border (*google_color_border*), background (*google_color_bg*), link (*google_color_link*), url (*google_color_url*) and text (*google_color_text*).

{% highlight javascript %}
google_color_border = '333333';
google_color_bg     = '222222';
google_color_link   = 'F0F0F0';
google_color_url    = '008000';
google_color_text   = '333333';
{% endhighlight %}

![ad style example "classic grey"](/img/ad-unit-style-classic-grey.png "ad style example 'classic grey'")

{% highlight javascript %}
google_color_border = 'CCCCCC';
google_color_bg     = '333333';
google_color_link   = 'FFFFFF';
google_color_url    = '0066CC';
google_color_text   = '666666';
{% endhighlight %}

![ad style example "modern white"](/img/ad-unit-style-modern-white.png "ad style example 'modern white'")

Notice that the above code is not doing anything that couldn't be done with the Google AdSense web interface. On the contrary it has to be in Googles own interest that the conversion of its adverts is as high as possible (of course excluding fake conversions).

### Premium AdSense<a name="premium">&nbsp;</a>

If you frequently generate 20 million ad impressions or more you will eventually get contacted by Google to become a premium publisher. There is no way to apply. Only if you generate some serious AdSense revenue will Google become interested in providing you with more support and options.

Being a premium publisher brings more options to influence the ad style than just the color scheme.

There are other options that let you influence the font sizes as well but the biggest difference is the ad itself.

Usually AdSense adverts are served in an _iframe_ (and another _iframe_ therein) which takes it deliberately and completely takes the ad out of your control. This also has an effect on the outcome of this tutorial as tracking ad conversions becomes quite difficult as you will see in the next chapters. Premium publishers though can get their adverts in _div_ elements which allows to easily apply custom CSS rules.

> Todo: give examples..

### Sandbox Mode<a name="sandbox">&nbsp;</a>

While applying this tutorial you might want to sandbox your ads in order to avoid self-inflicted links from being counted. Google seems to provide a switch for that (*google_test*).

{% highlight html %}
<script type="text/javascript"><!--
google_ad_client = "ca-pub-0123456789abcdef";
/* custom_ad_name */
google_ad_slot = "0123456789";
google_ad_width = 125;
google_ad_height = 125;

google_test = "on"; // <-- this is it!
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}

However there is no official documentation and the above code can not be guarantied to work. Please avoid self-inflicting ad clicks!

### Demo<a name="demo">&nbsp;</a>

> Todo: give examples..
