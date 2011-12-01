**Real World Example of Stylable Code**

The following ad unit code is copied from an existing DFP account.

{% highlight html %}
<script type="text/javascript" language="javascript">
 function google_ad_request_done(google_ads) {
  var s = '';
  var i;
  
  if (google_ads.length == 0) {
   return;
  }
 
  s += '<div id="googleads" style="width:614px; border-bottom: 1px solid #d2d2d2; padding:4px; text-align:left;">';
  s += '<div style="font-weight:bold; border-top: 1px solid #d2d2d2; padding:4px; padding: 0 0 2px; margin-bottom: 5px; color:#d2d2d2;"><br /><a target="_blank" href="'+google_info.feedback_url+'" style="color:#666666;">Google-Anzeige</a></div>';
 
  for (i=0; i < google_ads.length; i++) {
   s += '<a style="font-weight:bold; color: #CC0000; font-family: Georgia, Times New Roman, serif; font-size:15px;" href="' + google_ads[i].url + '" target="_blank">' + google_ads[i].line1 + '</a>&nbsp;';
   s += '<span style="font-weight:normal; font-size:12px;">'+google_ads[i].line2 +' '+ google_ads[i].line3 + '</span>&nbsp;';
   s += '<a style="font-weight:bold; font-size:12px; color:#666666;" href="' + google_ads[i].url + '" target="_blank">' + google_ads[i].visible_url + '</a><br /><table><tr><td height="2"></td></tr></table>';
  }
  
  s += '</div>';
 
  document.write(s);
  return;
 }
 
 google_ad_client = 'pub-1234567890123456';
 google_ad_channel = '1234567890';
 google_ad_output = 'js';
 google_max_num_ads = '2';
        google_skip = '2';
 google_ad_type = 'text';
 google_feedback = 'on';
</script>
<script language="JavaScript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
{% endhighlight %}

The above code will of course work but has a serious flaw that makes it unnecessarily complicated to multivariate.

**This code uses inline style definitions!**

Inline style definitions (i.e. `style="color:#666666;"`) can not be overridden and forces you to replace the whole markup. To further complicate things the markup is generated via javascript so markup and script can not be changed separately forcing you to put almost everything into your variations.

But you could simply clear up the above code and extract the style informations and get a much easier structure without changing the ad itself.

The result could look like this:

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

The *default style information* (1.) was extracted into a separate block and the HTML markup while still wrapped in javascript is enhanced with `class` and `id` attributes so every single element can be selected by CSS and styles can be applied. 
