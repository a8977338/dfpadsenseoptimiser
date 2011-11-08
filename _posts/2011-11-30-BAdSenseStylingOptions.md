---
layout: "book"
title: "Appendix B: AdSense Styling Options"
category: book
permalink: "/book/appendix-b-adSense-styling-options.html"
abstract: "In this appendix you will find a list of all available styling options for Google AdSense ad units."
---
## Appendix B: AdSense Styling Options

{{ page.abstract }}

###### Border Color

Default AdSense ad units have a 1 pixel border of an one color ranging from values _#000000_ (black) to _#FFFFFF_ (white). Choose the same color as you pick for the background to make it "invisible".

{% highlight javascript %}
google_color_border = "FFFFFF";
{% endhighlight %}

###### Background Color

The color of the ad units background. Values range from  _#000000_ (black) to _#FFFFFF_ (white).

{% highlight javascript %}
google_color_bg = "0000FF";
{% endhighlight %}

###### Link Color

The color of the ad units top links. Values range from  _#000000_ (black) to _#FFFFFF_ (white).

{% highlight javascript %}
google_color_link = "FFFFFF";
{% endhighlight %}

###### Text Color

The color of the ad units texts. Values range from  _#000000_ (black) to _#FFFFFF_ (white).

{% highlight javascript %}
google_color_text = "000000";
{% endhighlight %}

###### URL Color

The color of the ad units bottom links. Values range from  _#000000_ (black) to _#FFFFFF_ (white).

{% highlight javascript %}
google_color_url = "008000";
{% endhighlight %}

###### Corner Style

The style of the ad units corners (only visible when border color is visible). Values range from  _rc:0_ (0 pixel radius / square) to _rc:10_ (10 pixel radius / very round).

{% highlight javascript %}
google_ui_features = "rc:3";
{% endhighlight %}

Consult the inofficial [AdSense Generator tool](http://www.adsense-generator.com/ "AdSense Generator tool") to easily create the code for your styles.
