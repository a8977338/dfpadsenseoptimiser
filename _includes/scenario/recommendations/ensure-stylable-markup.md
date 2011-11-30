### 3. Ensure Stylable Markup

With an AdSense premium account you will have defined the markup of any ad unit yourself. You can do this several ways i.e. you can use so called inline style definitions so that the style information is included in the markup.

{% highlight html %}
<a href="#" style="color:red;font-site:12px;text-decoration:none">click me</a>
{% endhighlight %}

This has a serious drawbacks as those style definitions can not be overwritten without the user noticing a flicker.

Instead you should use *id* and *class* attributes.

{% highlight html %}
<a href="#" color="mystyle">click me</a>
{% endhighlight %}

That way you can define your style separately.

{% highlight html %}
<style type="text/css">
a.mystyle { color:red; font-site:12px; text-decoration:none; }
</style>
{% endhighlight %}

Such a separate style definition can then easily be replaced by a variation.
