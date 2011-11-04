---
layout: "book"
title: "Appendix A: Emulating AdSense"
category: book
_permalink: "/book/appendix-a-emulating-adsense"
---
## Appendix A: Emulating AdSense

Google AdSense terms are quite strict so it is not wise to produce too many ad impressions and more important clicks.

So instead of running AdSense on all the steps of this tutorial we will emulate the basics of AdSense in order to not risk clicking real AdSense links by accident.

This is especially useful as we will have to trigger events on ad clicks to notify Google Website Optimizer upon success. While developing such code you will have to click which is forbidden on real adverts.

{% highlight html %}
<script type="text/javascript"><!--
emulator_color_border = '000000';
emulator_color_bg     = 'DDDDDD';
emulator_color_link   = '000080';
emulator_color_url    = '008000';
emulator_color_text   = '000000';
//-->
</script>
<script type="text/javascript" src="js/adsense-emulator.js">
</script>
{% endhighlight %}

The loaded javascript emulates the Google AdSense structure by nesting two iframes and passing on the color variables.

{% highlight javascript %}
document.write('<ins style="display:inline-table;border:none;height:90px;margin:0;padding:0;position:relative;visibility:visible;width:728px">');
document.write('<ins id="aswift_0_anchor" style="display:block;border:none;height:90px;margin:0;padding:0;position:relative;visibility:visible;width:728px">');
document.write('<iframe id="aswift_0" width="728" scrolling="no" height="90" frameborder="0" style="left:0;position:absolute;top:0;" name="aswift_0" vspace="0" marginheight="0" marginwidth="0" hspace="0" allowtransparency="true" onload="if(!this.loaded) {' +
'var d=this.contentWindow.document;' +
'd.writeln(\'<html><head></head><body>\');' +
'd.writeln(\'<iframe id=&quot;emulator_frame1&quot; width=&quot;728&quot; scrolling=&quot;no&quot; height=&quot;90&quot; frameborder=&quot;0&quot; vspace=&quot;0&quot; style=&quot;left:0;position:absolute;top:0&quot; src=&quot;resources/emulated-superbanner.html?cbd='+emulator_color_border+'&cbg='+emulator_color_bg+'&clk='+emulator_color_link+'&ctx='+emulator_color_text+'&cul='+emulator_color_url+'&quot; name=&quot;emulator_frame1&quot; marginwidth=&quot;0&quot; marginheight=&quot;0&quot; hspace=&quot;0&quot; allowtransparency=&quot;true&quot;></iframe>\');' +
'd.writeln(\'</body></html>\');' +
'this.loaded=true;' +
'}"></iframe>');
document.write('</ins></ins>');
{% endhighlight %}

The final advert dummy looks like this.

{% highlight html %}
<html>
  <head>
    <script type="text/javascript">
    function getParameter(name) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == name) {
                return unescape(pair[1]);
            }
        }
    }
    document.writeln('<style>');
    document.writeln('div { background: #'+getParameter('cbg')+'; border: 1px solid #'+getParameter('cbd')+'; color: #'+getParameter('ctx')+' }');
    document.writeln('a { color: #'+getParameter('clk')+' }');
    document.writeln('a.url { color: #'+getParameter('cul')+' }');
    document.writeln('</style>');
    </script>
  </head>
  <body>
    <div style="height:88px;width:726px">
      <ul>
        <li><a href="javascript:alert('ad 1 got clicked!')">This is a dummy advert. Go click it!</a> It's just amazing! <a class="url" href="javascript:alert('ad 1 url got clicked!')">www.clickdummy.com</a></li>
        <li><a href="javascript:alert('ad 2 got clicked!')">This is a dummy advert. Go click it!</a> It's just amazing! <a class="url" href="javascript:alert('ad 2 url got clicked!')">www.clickdummy.com</a></li>
        <li><a href="javascript:alert('ad 3 got clicked!')">This is a dummy advert. Go click it!</a> It's just amazing! <a class="url" href="javascript:alert('ad 3 url got clicked!')">www.clickdummy.com</a></li>
      </ul>
    </div>
  </body>
</html>
{% endhighlight %}

Here is the final result.

<script type="text/javascript">
emulator_color_border = '000000';
emulator_color_bg     = 'DDDDDD';
emulator_color_link   = '000080';
emulator_color_url    = '008000';
emulator_color_text   = '000000';
</script>
<script type="text/javascript" src="js/adsense-emulator.js"><!-- nothing --></script>

So instead of displaying ads we display a dummy link that was loaded via javascript and styled according to some javascript varables.
