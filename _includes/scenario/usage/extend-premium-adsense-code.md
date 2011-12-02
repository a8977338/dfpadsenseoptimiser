### 4. Extend AdSense Code

Copy the generated codes from the tool and paste them to your website code like the following.

Consider the following Ad Unit code.

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
<script type="text/javascript">
 function google_ad_request_done(google_ads) {
  var s = '';
  var i;

  if (google_ads.length == 0) {
   return;
  }

  s += '<div id="googleads">';
  s += '<div><br /><a target="_blank" href="'+google_info.feedback_url+'" class="label">Google-Anzeige</a></div>';
 
  for (i=0; i < google_ads.length; i++) {
   s += '<a class="ad_url" href="' + google_ads[i].url + '" target="_blank">' + google_ads[i].line1 + '</a>&nbsp;';
   s += '<span class="ad_text">'+google_ads[i].line2 +' '+ google_ads[i].line3 + '</span>&nbsp;';
   s += '<a class="ad_visible_url" href="' + google_ads[i].url + '" target="_blank">' + google_ads[i].visible_url + '</a><br /><table><tr><td height="2"></td></tr></table>';
  }
  
  s += '</div>';

  document.write(s);
  return;
 }
 </script>

<!-- 3. AdSense ad unit configuration -->
<script type="text/javascript">
 google_ad_client = 'pub-1234567890123456';
 google_ad_channel = '1234567890';
 google_ad_output = 'js';
 google_max_num_ads = '2';
 google_skip = '2';
 google_ad_type = 'text';
 google_feedback = 'on';
</script>

<!-- 4. AdSense ad call -->
<script language="JavaScript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
{% endhighlight %}

Lets analyze the above code.

1. **Default style information**, this CSS stylesheet contains the default style information of your ad unit as you defined it.
2. **Callback to generate HTML markup for ad units**, this javascript code is called in response to the ad call below and renders the ad unit HTML as you defined it.
3. **AdSense ad unit configuration**, this is the information needed by the AdSense server to know who you are and what kind of ad unit you expect.
4. **AdSense ad call**, this javascript include is fetching the final ad unit from the AdSense servers and passes it on to your callback for rendition.

#### 4.1 Add Section Codes

You have seen that a premium AdSense implementation is more complex than a default one. Thus adding section codes is a bit more complicated.

For **each ad unit** you need to **add the section code just before part 4** like this:

{% highlight html %}
...
 google_ad_type = 'text';
 google_feedback = 'on';
</script>

<!-- SECTION CODE -->
<script>utmx_section("optad_1_style")</script>
</noscript>

<!-- 4. AdSense ad call -->
<script language="JavaScript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
{% endhighlight %}

Repeat this step for each ad unit accordingly.

#### 4.2 Add Control and Tracking Code

Paste the generated *Control and Tracking Code* **in front of the first ad unit code!**.

This is what it should look like afterwards.

{% highlight html %}
{% assign ga_pro_id = 'UA-1234567-8' %}
{% assign gwo_exp_id = '12345678' %}
{% include gwo-control-script.html %}
{% include gwo-tracking-script.html %}

<!-- 1. Default style information -->
<style type="text/css">
#googleads { width:614px; border-bottom: 1px solid #d2d2d2; padding:4px; text-align:left; }
...
{% endhighlight %}
