<?php

if (!$_GET['exp_id'] || !$_GET['exp_id'] || !$_GET['sections']) {
  header('Location: /code-generator.html');
  exit();
}

$eid = $_GET['exp_id'];
$aid = $_GET['ana_id'];
$sections = $_GET['sections'];

$page = <<<EOF
<html>
<head>

<!-- Google Website Optimizer Control Script -->
<script>
function utmx_section(){}function utmx(){}
(function(){var k='$eid',d=document,l=d.location,c=d.cookie;function f(n){
if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.indexOf(';',i);return escape(c.substring(i+n.
length+1,j<0?c.length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;
d.write('<sc'+'ript src="'+
'http'+(l.protocol=='https:'?'s://ssl':'://www')+'.google-analytics.com'
+'/siteopt.js?v=1&utmxkey='+k+'&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='
+new Date().valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
'" type="text/javascript" charset="utf-8"></sc'+'ript>')})();
</script>
<!-- End of Google Website Optimizer Control Script -->
<!-- Google Website Optimizer Tracking Script -->
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['gwo._setAccount', '$aid']);
_gaq.push(['gwo._trackPageview', '/$eid/test']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
<!-- End of Google Website Optimizer Tracking Script -->
<!-- Google Website Optimizer Tracking Script -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['gwo._setAccount', '$aid']);
  _gaq.push(['gwo._trackPageview', '/$eid/goal']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- End of Google Website Optimier Tracking Script -->  	

<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>GWO Validation Page</title>
</head>

<body>
<h3>GWO Validation Page</h3>
<p>This page is used to validate your GWO experiment. It won't be needed for anything else.'</p>
EOF;

foreach($sections as $section) {
  $page .= <<<EOF

<script>utmx_section("$section")</script>
</noscript>

EOF;
}

$page .= <<<EOF
</body>
</html>
EOF;

header('Pragma: public');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Cache-Control: private',false);
header('Content-Type: application/force-download');
header('Content-Disposition: attachment; filename="validation_page_'.$eid.'.html"');
header('Content-Transfer-Encoding: binary');
header('Content-Length: '.strlen($page));

echo $page;