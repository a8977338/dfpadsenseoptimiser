---
layout: "book"
title: "Chapter 4 - Using Google Website Optimizer"
permalink: "/book/chapter-4-using-google-website-optimizer.html"
abstract: "Google Website Optimizer is a tool designed to optimize conversion rates for landing pages and other parts of a website. In this chapter you will learn the basic principles of it and see how it can be applied to your website."
submenu:
  - { hook: "integration", title: "Integration" }
  - { hook: "tracking",    title: "Google Analytics Tracking" }
  - { hook: "demo",        title: "Demo" }
---

## Chapter 4 - Using Google Website Optimizer

{{ page.abstract }}

The best way to introduce you to Google Website Optimizer (GWO) is by doing it step by step on an example.

Lets assume you have a download button on your website and you want to use the best performing layout so that a maximum number of users ends up clicking it.

{% highlight html %}
<style>
.gwo_test_object { padding: 5px; background: #888888; border: 1px solid #000000;}
</style>
<a href="/gwo-conversion-page.html" class="gwo_test_object">Test Object</a>
{% endhighlight %}

<style>
.gwo_test_object { padding: 5px; background: #888888; border: 1px solid #000000;}
</style>
<a href="#gwo-conversion-page" class="gwo_test_object">Test Object</a>

&nbsp;

You want to define multiple layouts of this button and serve them to your users to see which layout gets the most clicks. GWO is developed just for this purpose.

### Integration<a name="integration">&nbsp;</a>

Before continuing with the example lets take a look at the GWO script components.

There are three components.

1. The _control and tracking script_ for the _test page_ (the page your test will be running on)
2. The _page section_ for your test page
3. The _conversion script_ for your _conversion page_ (the page the user jumps to when he clicks your link)

###### 1. Control and Tracking Script

On the so called _test page_ you need to install two scripts.

The first one is the control script. It identifies your GWO account id (_var k='0123456789'_) and loads the scripts that provide all that GWO functionality.

{% highlight html %}
<!-- Google Website Optimizer Control Script -->
<script>
function utmx_section(){}function utmx(){}
(function(){var k='0123456789',d=document,l=d.location,c=d.cookie;function f(n){
if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.indexOf(';',i);return escape(c.substring(i+n.
length+1,j<0?c.length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;
d.write('<sc'+'ript src="'+
'http'+(l.protocol=='https:'?'s://ssl':'://www')+'.google-analytics.com'
+'/siteopt.js?v=1&utmxkey='+k+'&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='
+new Date().valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
'" type="text/javascript" charset="utf-8"></sc'+'ript>')})();
</script>
<!-- End of Google Website Optimizer Control Script -->
{% endhighlight %}

This is directly followed by the second script which you will recognize as a Google Analytics tracking script.

{% highlight html %}
<!-- Google Website Optimizer Tracking Script -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['gwo._setAccount', 'UA-01234567-8']);
  _gaq.push(['gwo._trackPageview', '/0123456789/test']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- End of Google Website Optimizer Tracking Script -->
{% endhighlight %}

You will notice that GWO uses your existing Google Analytics account and creates a new profile for you which only knows about one page: _/0123456789/test_

This page doesn't exist but is used to track the number of tests being run. This new profile will not show up on your Google Analytics account.

###### 2. Page Section

The next part is also located on the _test page_. It consists of two tags that frame the bit of markup you want to create variations for.

{% highlight html %}
<script>utmx_section("Insert your section name here")</script>
// some markup you want to variate..
</noscript>
{% endhighlight %}

Following the above example the resulting code would look similar to this.

{% highlight html %}
<script>utmx_section("gwo_test_object")</script>
<style>
.gwo_test_object { padding: 5px; background: #888888; border: 1px solid #000000;}
</style>
</noscript>
<a href="/gwo-conversion-page.html" class="gwo_test_object">Test Object</a>
{% endhighlight %}

The section name (_gwo_test_object_) is used to identify your test in the GWO web interface. In this case we framed the _style_ bit of our markup in order to replace it with a variation.

A variation could look like this.

{% highlight html %}
<style>
.gwo_test_object { padding: 5px; background: #66FF66; border: 1px solid #008800;}
</style>
{% endhighlight %}

So if the user is served the variation he will see a green button instead of a grey one.

###### 3. Conversion Script

On the page your button links to you have to install the conversion script_. Again this is a simple Google Analytics tracking script that links to the same profile as the one on the _test page_ only this time the URL is: _/0123456789/goal_

{% highlight html %}
<!-- Google Website Optimizer Tracking Script -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['gwo._setAccount', 'UA-01234567-8']);
  _gaq.push(['gwo._trackPageview', '/0123456789/goal']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- End of Google Website Optimizer Tracking Script -->
{% endhighlight %}

### Google Analytics Tracking<a name="tracking">&nbsp;</a>

Google Website Optimizer will use that new Google Analytics profile to track each test page impression together with the variation that was served to the user. It will of course also use it to track the conversion page impressions and from the two it will know which variation resulted in how many conversions.

### Demo<a name="demo">&nbsp;</a>

At the bottom of this page you can see a simple example consisting of two pages. The first - the _test page_ - shows a button linking to the second - the _conversion page_. The _test page_ has the above control and testing scripts on it while the _conversion page_ has the conversion script.

Additionally the _test page_ holds the test section itself.

{% highlight html %}
<script>utmx_section("gwo_test_object")</script>
<style>
.gwo_test_object { padding: 5px; background: #888888; border: 1px solid #000000;}
</style>
</noscript>
<a href="/gwo-conversion-page.html" class="gwo_test_object">Test Object</a>
{% endhighlight %}

This test has three variations configured like the following.

{% highlight html %}
<!-- 1. variation "green" -->
<style>
.gwo_test_object { padding: 5px; background: #66FF66; border: 1px solid #008800;}
</style>

<!-- 2. variation "blue" -->
<style>
.gwo_test_object { padding: 5px; background: #6666FF; border: 1px solid #000088;}
</style>

<!-- 3. variation "red" -->
<style>
.gwo_test_object { padding: 5px; background: #FF6666; border: 1px solid #880000;}
</style>
{% endhighlight %}

Whenever a user visits this example he will get a variation or the original. These variations are "sticky" in that a user is served only one combination for a certain time in order to not confuse him.

Below this sentence the example is shown inside an iframe.

<iframe src="/gwo-test-page.html" width="580" height="60" frameborder="0"><p>Your browser does not support iframes.</p></iframe>

The above test then produces a report like the following. Based on which you can choose the optimal layout after you gathered enough data.

![Google Website Optimizer report](/img/google-website-optimizer-report.png "Google Website Optimizer report")

To find get an idea of how long you should run your tests you should take a look at the [Google Website Optimizer Duration Calculator](https://www.google.com/analytics/siteopt/siteopt/help/calculator.html "Google Website Optimizer Duration Calculator").