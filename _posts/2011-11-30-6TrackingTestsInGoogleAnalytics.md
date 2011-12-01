---
layout: "book"
title: "Chapter 6 - Tracking Tests in Google Analytics"
permalink: "/book/chapter-6-tracking-tests-in-google-analytics.html"
abstract: "Google Website Optimizer doesn't track the experiments itself. Instead it utilizes Google Analytics. Read this chapter to learn about the principles of tracking experiments and what has to be done to track AdSense conversions."
submenu:
  - { hook: "default",      title: "The Default Setup" }
  - { hook: "adsense",      title: "Why Optimizing AdSense has Different Requirements" }
  - { hook: "guestimation", title: "&nbsp;&nbsp;1. Guestimation" }
  - { hook: "ignore",       title: "&nbsp;&nbsp;2. Ignore all GWO Reports" }
  - { hook: "recommended",  title: "Recommended Setup" }
---
## Chapter 6 - Tracking Tests in Google Analytics

<br/>
![Google Analytics](/img/google-analytics-logo.gif "Google Analytics logo")

{{ page.abstract }}

### The Default Setup<a name="default">&nbsp;</a>

When you start your first experiment with Google Website Optimizer (GWO) it will automatically use an existing Google Analytics account asociated with your Google account or if you don't use Analytics so far will create one for you.

On this account GWO will create a new hidden profile. An Analytics profile usually represents a website or similar and provides you with a user interface to its data.

A GWO profile is different as it will never show up in the list of your profiles so you will not be able to see its data within Google Analytics. Instead you access that information via the Website Optimizer reports.

In this hidden account GWO stores mainly two informations for each experiment. First how often the experiment was shown to a user along with the combination of variations and second how often an experiment let to a conversion.

### Why Optimizing AdSense has Different Requirements<a name="adsense">&nbsp;</a>

An AdSense conversion is a click that leads to a target defined by the advertiser. We have no way to install a tracking code there.

Because of this we need to find another way to track an ad conversion. There are two possible ways to solve this.

#### 1. Guestimation<a name="guestimation">&nbsp;</a>

The first and maybe obvious solution is to create a script that monitors if the ads were clicked and then use [Google Analytics Event Tracking](http://code.google.com/apis/analytics/docs/tracking/eventTrackerGuide.html "Google Analytics Event Tracking") to track conversions.

This approach has two drawbacks. First of all AdSense ad units are served inside iframes and therefor are inaccessible for your script so you can not actually track the ad clicks. The best thing you can do is to _guesstimate_ the clicks by monitoring the _mouse position_ and the current window loosing _focus_ and when the mouse was over an advert when the focu was lost you can guess that the user clicked on the ad. But unfortunately there are situations that will not trigger your script but should and others that will but shouldn't. You can read about such an approach [here](http://www.bennadel.com/blog/1752-Tracking-Google-AdSense-Clicks-With-jQuery-And-ColdFusion.htm "Blog post: Tracking Google AdSense Clicks With jQuery And ColdFusion") and [here](http://supriyadisw.net/2006/07/adsense-clicks-tracker "Blog post: Adsense Clicks Tracker").

The other drawback is that you can not be entirely sure if tracking ad clicks complies to the Google AdSense terms. I would think it's fine but it's a sort of grey area best to avoid.

When you're a premium publisher you probably don't face the iframe problem and you could easily attach javascript event to the ads which you can use for tracking the reral clicks. Still the legal situation remains uncertain.

**This is not the recommended way to do it!**

#### 2. Ignore all GWO Reports<a name="ignore">&nbsp;</a>

The second approach takes a different route altogether. It acknowledges the fact that the GWO way of tracking conversions is not possible for AdSense ad clicks.

If you already used Google AdSense before you will probably know that it can be easily connected to your Google Analytics account. This allows you to see the AdSense Revenue for each content, referrer or other analytics segment.

So the idea is to instead of using the Google Website Optimizer reporting to build segments in Google Analytics that represent the the current _test variation_ and then consult your Google Analytics web interface for a detailed report on AdSense Revenue per test variation.

> The drawback of this method is that GWO wil not be able to automatically select the best performaing variation so you have to do that manually after you terminated the experiment.
> However in Analytics you will have the AdSense revenue information which would not be available in the GWO reporting so your judgements will be based on much more relevant data.

### Recommended Setup<a name="recommended">&nbsp;</a>

Lets recap the key requirements.

* Monitor AdSense CTR for each combination
* Distinguish combinations for different parts of the website
* Don't interfere with the site tracking (i.e. no additional pageviews)

After experimenting with Custom Variables (which might clash with site settings) and Event Tracking (which can not be combined with AdSense metrics) the only reasonable way to track GWO data to Google Analytics is to use so called ***Social Interaction Analytics***.

Consider the following code.

{% highlight javascript %}
{% assign ga_pro_id = 'UA-1234567-8' %}
{% assign gwo_exp_id = '12345678' %}
{% include gwo-tracking-script.html %}
{% endhighlight %}

This code will send a new pixel to your Google Analytics account that only tracks a "social activity" as soon as the document is fully loaded. It saves the current path and combination.

You will be able to see the results like this.

![Google Analytics Social Interaction view](/img/scenarios/ga-adsense-per-experiment-combination-and-path.png)

