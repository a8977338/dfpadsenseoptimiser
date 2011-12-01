---
layout: "book"
title: "Chapter 7 - Using DoubleClick For Publishers"
permalink: "/book/chapter-7-using-doubleclick-for-publishers.html"
abstract: "If you are running more than one website and use multiple advertizers chances are you're using DoubleClick For Publishers (DFP) to manage your campaigns. In this chapter you will learn about the differences in optimizing AdSense when using DFP."
submenu:
  - { hook: "nutshell",     title: "How DFP works in a nutshell" }
  - { hook: "experiment",   title: "How to install a Google Website Optimizer experiment?" }
  - { hook: "premium",      title: "Multivariate Premium AdSense over DFP" }
  - { hook: "professional", title: "Differences between DFP Small Business and Professional Edition" }
---
## Chapter 7 - Using DoubleClick For Publishers

<br/>
![DoubleClick For Publishers](/img/doubleclick-for-publishers-logo.png "DoubleClick For Publishers logo")

{{ page.abstract }}

### How DFP works in a nutshell<a name="nutshell">&nbsp;</a>

Instead of implementing AdSense code directly in your websites HTML code you install so called *ad tags*: simple HTML elements that use javascript to pull an ad from the DFP ad server.

![DFP in a nutshell](/img/doubleclick-for-publishers-in-a-nutshell.png)

This way you can define fixed positions on your website so called "ad slots" and you can fill them with your current campaigns (not only AdSense).

### How to install a Google Website Optimizer experiment?<a name="experiment">&nbsp;</a>

The installation for a Google Website Optimizer experiment is exactly the same as described in [Chapter 5 - Optimizing Google AdSense](/book/chapter-5-optimizing-google-adsense-with-google-website-optimizer.html "Chapter 5 - Optimizing Google AdSense") with one important difference:

**You do not have to touch your websites code!**

When using DFP your AdSense code is maintained in the DFP tool which is exactly where you need to make the changes necessary for your experiment.

### Multivariate Premium AdSense over DFP<a name="premium">&nbsp;</a>

Becasue you can control the markup structure of your premium AdSense ad units and make them appear in whatever style you like your AdSense code can get more complicated and so will the GWO changes. See the [Premium AdSense](http://127.0.0.1:4000/book/chapter-3-using-google-adsense.html#premium) part of Chapter 3 for details.

To ease the process to a minimum it is recommended to obey the following rule:

**Use no inline styles but `<style>..</style>` blocks to style your ad units!**

This way you separate styling information from markup structure in order to easily replace the former with a variation from Google Website Optimizer.

### Differences between DFP Small Business and Professional Edition<a name="professional">&nbsp;</a>

For the research of this book I used DFP Small Business. However I also ran a few tests with the professional edition of DoubleClick for Publishers and there are a few differences that should be mentioned.

1. At the time of writing the professional does not yet have the *new* web interface of the small business edition. Therefor some things I might mention might not be found easily.

2. The DFP instance I was testing was constantly *escaping* the code I provided for an ad unit. So the code that I pasted into DFP was not exactly the one that got pulled from an ad tag. As a result there have been a few runtime issues of several javascript codes clashing. The code in the scenarios is working though.

> Be aware of escaping and always test and verify the ad code that actually gets served to your ad tags!

