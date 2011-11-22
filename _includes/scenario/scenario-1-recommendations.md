<div class="alert-message block-message info">
<h3>Recommendations</h3>
<p>In a default AdSense account you can change only two attribute families.</p>
<br />
<ol>
  <li><strong>Color Scheme</strong>, you can change the colors of all texts, links, border and background</li>
  <li><strong>Corner Style</strong>, you can change the radius of the corners to make them edgy or rounded</li>
</ol>
<p>See also <a href="/book/appendix-b-adSense-styling-options.html">The Book - Appendix B: AdSense Styling Options</a> for details.</p>
<br />
<p>I recommend to create <em>one Blueprint Experiment per attribute family</em> by following the Setup guide to allow easy combination.</p>
</div>

### 1. Create Blueprint Experiment for Color Variations

Follow the Setup guide to create a Blueprint Experiment with a descriptive name like *Blueprint Color Variations*.

Add the maximum number of sections and give them descriptive names like *colorscheme_section_1* to  *colorscheme_section_X*.

For *each section* add as many color scheme variations as you want. You can use the [GWO Duration Calculator](https://www.google.com/analytics/siteopt/siteopt/help/calculator.html "Google Website Optimizer Duration Calculator") to get an idea of how many variations are suitable for you.

Each variation should look like this.

{% highlight html %}
<script type="text/javascript"><!--
google_color_border = '000000';
google_color_bg     = 'DDDDDD';
google_color_link   = '000080';
google_color_url    = '008000';
google_color_text   = '000000';
//-->
</script>
{% endhighlight %}

You can use the [Google Adsense Generator](http://www.adsense-generator.com/ "Google Adsense Generator") to create some color schemes.

### 2. Create Blueprint Experiment for Corner Variations

Follow the Setup guide to create a Blueprint Experiment with a descriptive name like *Blueprint Corner Variations*.

Add the maximum number of sections and give them descriptive names like *cornerstyle_section_1* to  *cornerstyle_section_X*.

For *each section* add up to 11 variations as you want. You can use the [GWO Duration Calculator](https://www.google.com/analytics/siteopt/siteopt/help/calculator.html "Google Website Optimizer Duration Calculator") to get an idea of how many variations are suitable for you.

Each variation should look like this.

{% highlight html %}
<script type="text/javascript"><!--
google_ui_features = "rc:0";
//-->
</script>
{% endhighlight %}

You can choose any value from `rc:0` (square corners) to `rc:10` (very round corners).