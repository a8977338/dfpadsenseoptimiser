**Real World Example of Stylable Code**

The following ad unit code is copied from an existing DFP account.

{% highlight html %}
{% include premium-adsense-code-dirty.html %}
{% endhighlight %}

The above code will of course work but has a serious flaw that makes it unnecessarily complicated to multivariate.

**This code uses inline style definitions!**

Inline style definitions (i.e. `style="color:#666666;"`) can not be overridden and forces you to replace the whole markup. To further complicate things the markup is generated via javascript so markup and script can not be changed separately forcing you to put almost everything into your variations.

But you could simply clear up the above code and extract the style informations and get a much easier structure without changing the ad itself.

The result could look like this:

{% highlight html %}
{% include premium-adsense-code-clean.html %}
{% endhighlight %}

Lets analyze the above code.

1. **Default style information**, this CSS stylesheet contains the default style information of your ad unit as you defined it.
2. **Callback to generate HTML markup for ad units**, this javascript code is called in response to the ad call below and renders the ad unit HTML as you defined it.
3. **AdSense ad unit configuration**, this is the information needed by the AdSense server to know who you are and what kind of ad unit you expect.
4. **AdSense ad call**, this javascript include is fetching the final ad unit from the AdSense servers and passes it on to your callback for rendition.

The *default style information* (1.) was extracted into a separate block and the HTML markup while still wrapped in javascript is enhanced with `class` and `id` attributes so every single element can be selected by CSS and styles can be applied. 
