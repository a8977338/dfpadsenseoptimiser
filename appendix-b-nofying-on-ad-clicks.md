---
layout: "book"
title: "Appendix B: Notifying on ad clicks"
---
## Appendix B: Notifying on ad  clicks

As the targets of ad links are beyond our control we can not install Google Analytics code on them to count clicks. This means that in Google Website Optimizer we will not get any feedback about the performance of our variations.

In order to measure their performance we have to use Google Analytics event tracking whenever an advert is clicked.

To avoid real (and illegal) ad clicks while testing this script we use the AdSense emulator from [appendix A](appendix-a-emulating-adsense "Appendix A: Emulating AdSense").

<script type="text/javascript">
emulator_color_border = '000000';
emulator_color_bg     = 'DDDDDD';
emulator_color_link   = '000080';
emulator_color_url    = '008000';
emulator_color_text   = '000000';
</script>
<script type="text/javascript" src="js/adsense-emulator.js"><!-- nothing --></script>

...
<script type="text/javascript" src="js/clickevent.js"><!-- nothing --></script>
