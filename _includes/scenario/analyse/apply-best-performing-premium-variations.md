### 4. Apply Best Performing Variations

You can now apply the best performing variation in the following way.

Go to your websites code and replace the current default style information (1.) with that of your variation:

{% highlight html %}
<!-- 1. Default style information -->
<style type="text/css">
#googleads { width:614px; border-bottom: 1px solid #d2d2d2; padding:4px; text-align:left; }
#googleads div { font-weight:bold; border-top: 1px solid #d2d2d2; padding:4px; padding: 0 0 2px; margin-bottom: 5px; color:#d2d2d2; }
#googleads a.label { color:#666666; }
#googleads a.ad_url { font-weight:bold; color: #CC0000; font-family: Georgia, Times New Roman, serif; font-size:15px; }
#googleads span.ad_text { font-weight:normal; font-size:12px; }
#googleads a.ad_visible_url { font-weight:bold; font-size:12px; color:#666666; }
</style>

<!-- 2. Callback to generate HTML markup for ad units -->
...
{% endhighlight %}
