(function() {

var frames = document.getElementsByTagName('iframe');
var hasAdFrames=false;
for(var i=0;i<frames.length;i++) {
  var frame = frames[i];
  if (frame.id.indexOf('google_ads_') > -1 || frame.id.indexOf('aswift_') > -1) {
    hasAdFrames=true;
    frame.onmouseover=function(){console.log('over');};
    frame.onmouseout=function(){console.log('out');};
  }
}

var adsenseTrackerCheckClick = function()
{
  console.info('ad click!');
}

if(hasAdFrames) {
  if (typeof window.attachEvent != 'undefined') {
    window.attachEvent('onbeforeunload', adsenseTrackerCheckClick);
  } else if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('beforeunload', adsenseTrackerCheckClick, false);
  }
}

})();
