---
layout: default
title: Emulating AdSense
---
## Emulating AdSense

Google AdSense terms are quite strict so it is not wise to produce too many ad impressions and more important clicks.

So instead of running AdSense on all the steps of this tutorial we will emulate the basics of AdSense in order to not risk clicking real AdSense links by accident.

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

Here is an example.

<script type="text/javascript">
emulator_color_border = '0000FF';
emulator_color_bg     = 'DDDDFF';
emulator_color_link   = '0000FF';
emulator_color_url    = '00FF00';
emulator_color_text   = '000000';
</script>
<script type="text/javascript" src="js/adsense-emulator.js"><!-- nothing --></script>

So instead of displaying ads we display a dummy link that was loaded via javascript and styled according to some javascript varables.
