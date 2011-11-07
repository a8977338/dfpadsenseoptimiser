---
layout: "book"
title: "Chapter 4 - Using Google Website Optimizer"
category: book
permalink: "/book/chapter-4-using-google-website-optimizer.html"
submenu:
  - { hook: "integration", title: "Integration" }
  - { hook: "tracking",    title: "Google Analytics Tracking" }
  - { hook: "demo",        title: "Demo" }
---

## Chapter 4 - Using Google Website Optimizer

The best way to introduce you to Google Website Optimizer (GWO) is by doing it step by step on an example.

Lets assume you have a download button on your website and you want to use the best performing layout so that a maximum number of users ends up clicking it.

{% highlight html %}
<style>
.siteopt_test_object { padding: 5px; background: #888888; border: 1px solid #000000;}
</style>
<button class="siteopt_test_object">Test Object</button>
{% endhighlight %}

<iframe src="/dfpadsenseoptimiser/gwo-test-page.html" width="400" height="60"></iframe>

You want to define multiple layouts of this button and serve them to your users to see which layout gets the most clicks. GWO is developed just for this purpose.

### Integration<a name="integration">&nbsp;</a>

Before continuing with the example lets take a look at the GWO script components.

There are three components.

1. The _control and tracking script_ for the _test page_ (the page your test will be running on)
2. The _page section_ for your test page
3. The _conversion script_ for your _conversion page_ (the page the user jumps to when he clicks your link)

#### Control and Tracking Script

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

This is directly followed by the second script which you will recognize as 

{% highlight html %}
<!-- Google Website Optimizer Tracking Script -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['gwo._setAccount', 'UA-26812449-2']);
  _gaq.push(['gwo._trackPageview', '/1055643972/test']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- End of Google Website Optimizer Tracking Script -->
{% endhighlight %}

...

#### Page Section

...

{% highlight html %}
<script>utmx_section("Insert your section name here")</script>
{% endhighlight %}

...

{% highlight html %}
</noscript>
{% endhighlight %}

...

#### Conversion Script

...

{% highlight html %}
<!-- Google Website Optimizer Tracking Script -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['gwo._setAccount', 'UA-26812449-2']);
  _gaq.push(['gwo._trackPageview', '/1055643972/goal']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- End of Google Website Optimizer Tracking Script -->
{% endhighlight %}

...

the code, the segments, ..

### Google Analytics Tracking<a name="tracking">&nbsp;</a>

...

### Demo<a name="demo">&nbsp;</a>

<style>
.siteopt_test_object { padding: 5px; background: #66FF66; border: 2px solid #006600;}
</style>
<button class="siteopt_test_object">Test Object</button>