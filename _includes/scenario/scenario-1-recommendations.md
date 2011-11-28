**Technical skill required:** <span class="label">none</span>

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
<p>I recommend to create a <em>Blueprint Experiment with separate sections per attribute family</em> by following the Setup guide to allow easy combination.</p>
</div>

### 1. Create a Blueprint Experiment

Follow the Setup guide to create a Blueprint Experiment with a descriptive name like *"Blueprint Color and Corner"*.

#### 1.1. Create the Maximum Number of Sections

> The maximum number of sections is defined by the maximum number of AdSense ad units on a single page which is *usually three or less* (see also the appropriate entry in the [AdSense FAQ](http://www.google.com/adsense/support/bin/answer.py?answer=9735 "Google AdSense FAQ - How many Google ads can I display per page?")).
> For the following a maximum ad unit count of three is assumed.

Apply the following naming scheme to your variations: `optad_[1-3]_[col|crn]`

You should end up with the following 6 variations:

* **optad_1_col**, color variation of the first ad unit
* **optad_1_crn**, corner variation of the first ad unit
* **optad_2_col**, color variation of the second ad unit
* **optad_2_crn**, corner variation of the second ad unit
* **optad_3_col**, color variation of the third ad unit
* **optad_3_crn**, corner variation of the third ad unit

#### 1.2. Create the Variations

For *each color section* add as many color scheme variations as you want. You can use the [GWO Duration Calculator](https://www.google.com/analytics/siteopt/siteopt/help/calculator.html "Google Website Optimizer Duration Calculator") to get an idea of how many variations are suitable for you.

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

For *each corner section* add up to 11 variations as you want.

Each variation should look like this.

{% highlight html %}
<script type="text/javascript"><!--
google_ui_features = "rc:0";
//-->
</script>
{% endhighlight %}

You can choose any value from `rc:0` (square corners) to `rc:10` (very round corners).