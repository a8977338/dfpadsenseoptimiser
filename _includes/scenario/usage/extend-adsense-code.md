### 4. Extend AdSense Code

Copy the generated codes from the tool and paste them to your website code like the following.

#### 4.1 Add Section Codes

Consider the following Ad Unit code.

{% highlight html %}
<script type="text/javascript"><!--
google_ad_client = "ca-pub-5296440426067087";
/* test_small_square */
google_ad_slot = "3016468276";
google_ad_width = 200;
google_ad_height = 200;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}

Add the appropriate section codes in front of it. Following the Recommendations it should then look like this:

{% highlight html %}
<script>utmx_section("optad_1_col")</script>
</noscript>
<script>utmx_section("optad_1_crn")</script>
</noscript>
<script type="text/javascript"><!--
google_ad_client = "ca-pub-5296440426067087";
/* test_small_square */
google_ad_slot = "3016468276";
google_ad_width = 200;
google_ad_height = 200;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}

> You can stack multiple section codes in from of an ad unit like two in the above example.

Repeat this step for each ad unit accordingly.

#### 4.2 Add Control and Tracking Code

Paste the generated *Control and Tracking Code* **in front of the first ad unit code!**.

This is what it looked like before.

{% highlight html %}
<script>utmx_section("optad_1_col")</script>
</noscript>
<script>utmx_section("optad_1_crn")</script>
</noscript>
<script type="text/javascript"><!--
google_ad_client = "ca-pub-5296440426067087";
/* test_small_square */
google_ad_slot = "3016468276";
google_ad_width = 200;
google_ad_height = 200;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}

And this is what it should look like afterwards.

{% highlight html %}
<!-- Google Website Optimizer Control Script -->
<script>
function utmx_section(){}function utmx(){}
(function(){var k='0039476117',d=document,l=d.location,c=d.cookie;function f(n){
if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.indexOf(';',i);return escape(c.substring(i+n.
length+1,j<0?c.length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;
d.write('<sc'+'ript src="'+
'http'+(l.protocol=='https:'?'s://ssl':'://www')+'.google-analytics.com'
+'/siteopt.js?v=1&utmxkey='+k+'&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='
+new Date().valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
'" type="text/javascript" charset="utf-8"></sc'+'ript>')})();
</script>
<!-- End of Google Website Optimizer Control Script -->
<!-- Alternative Google Website Optimizer Tracking Script -->
<script type="text/javascript">
var _gaq = _gaq || [];
(function(_gaq){
  var ga  = 'UA-123456-1',
      gwo = '0039476117',
      e   = 'www.optimization-adsense.eu';
  (function(fn) {
    var d = document;
    if(d.addEventListener) d.addEventListener('DOMContentLoaded', function(){ d.removeEventListener('DOMContentLoaded', arguments.callee, false); fn(); }, false);
    else if(d.attachEvent) d.attachEvent('onreadystatechange', function(){ if(d.readyState === "complete"){ d.detachEvent('onreadystatechange', arguments.callee); fn(); }});
  })(function(){
    if (typeof(utmx) == "function" && typeof(utmx_global_vd) == "object") {
      var c = (function(s,l){while(s.length<l) s='0'+s; return s;})(utmx('combination').toString(), 4);
      var v = []; for (s in utmx_global_vd) { v.push( utmx("variation_number", s) ); }
      var v = v.join(','), n = e+' '+gwo+'#'+c+' '+location.pathname.replace(/[^\/]+$/, '');
      if(!(window._gaq instanceof Array)){
        try{ _gat._getTracker(ga)._trackSocial(n, v); } catch(err) { }
      }else{
        _gaq.push(['_trackSocial', n, v]);
      }
    }
  });
})(_gaq);
</script>
<!-- End of Google Website Optimizer Tracking Script -->
<script>utmx_section("optad_1_col")</script>
</noscript>
<script>utmx_section("optad_1_crn")</script>
</noscript>
<script type="text/javascript"><!--
google_ad_client = "ca-pub-5296440426067087";
/* test_small_square */
google_ad_slot = "3016468276";
google_ad_width = 200;
google_ad_height = 200;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
{% endhighlight %}
