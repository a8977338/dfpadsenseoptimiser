/* This script has to be referenced somewhere in your web page. I recomend 
   placing this script snippet just after Google Analytics tracking code.

  </script src="astracker.js" type="text/javascript"></script>  
*/
var analyticsTag = '/asclick';

// init adsense click tracking after docuement load...
attachOnloadEvent(adsenseTrackerInit);

// helper global variables
var adsenseTrackerActive = false;
var adsenseTrackerUnit = '';

function adsenseTrackerInit() {
  var pageHasAdsense = false;
  var el = document.getElementsByTagName("iframe");
  for (var i=0; i<el.length; i++) {
    //if (el[i].src.indexOf('googlesyndication.com') > -1) {
      pageHasAdsense = true;

      el[i].onmouseover = adsenseTrackerActivate;
      el[i].onmouseout = adsenseTrackerDeActivate;
    //}
  }

  if (pageHasAdsense) {
    if (typeof window.attachEvent != 'undefined') {
      // this works for IE
      window.attachEvent('onbeforeunload', adsenseTrackerCheckClick);
    } else if (typeof window.addEventListener != 'undefined') {
      // this works for firefox
      window.addEventListener('beforeunload', adsenseTrackerCheckClick, false);
    }
  }
}

function adsenseTrackerCheckClick() {
  if (adsenseTrackerActive) {
    var reportedUrl = analyticsTag;

    if (adsenseTrackerUnit != '') {
      reportedUrl += '/'+ escape(adsenseTrackerUnit);
    }

    // check for ad Url/AsLinks text (is disabled in Firefox by default)
    if (window.status) {
      var adsenseClickedAd = '';

      if (window.status.substring(0, 6) == 'go to ') {
        adsenseClickedAd = window.status.substring(6);
      } else if (window.status.substring(0, 15) == 'View ads about ') {
        adsenseClickedAd = window.status.substring(15);
      } else if (window.status != '') {
        // universal window.status reporting
        // ad support for your language here...
        adsenseClickedAd = window.status;
      }
      if (adsenseClickedAd != '') {
        reportedUrl += '/'+ escape(adsenseClickedAd);
      }
    }

    // this could be replaced with other tracking sw...
    reportToGoogleAnalytics(reportedUrl)
  }
}

// when moving mouse to adsense frame, activate click tracking for current ad unit...
function adsenseTrackerActivate() {
  adsenseTrackerUnit = '';

  if (this.parentNode) {
    // check for custom asc_ adsense element id
    if (this.parentNode.id.substring(0, 4) == 'asc_') {
      adsenseTrackerUnit = this.parentNode.id.substring(4);
    }
  }
  if (adsenseTrackerUnit == '') {
    // decode format parameter from adsense ads url
    var url = this.src;
    var startIndex = url.indexOf('format=');
    if (startIndex >= 0) {
      var lastIndex = url.indexOf('&', startIndex);
      adsenseTrackerUnit = lastIndex >= 0 ? url.substring(startIndex + 7, lastIndex) : url.substring(startIndex + 7);
    }
  }
  adsenseTrackerActive = true;
}

// when moving mouse out of adsense frame, deactivate click tracking...
function adsenseTrackerDeActivate() {
  adsenseTrackerUnit = '';
  adsenseTrackerActive = false;
}

// report click to google Analytics
function reportToGoogleAnalytics(reportedUrl) {
  console.info(reportedUrl);
  if (typeof urchinTracker == 'function') {
    urchinTracker(reportedUrl);
  }
}

// attach func function to window onload event (crossbrowser compatible)
function attachOnloadEvent(func) {
  if(typeof window.addEventListener != 'undefined') {
    // moz, saf1.2, ow5b6.1
    window.addEventListener('load', func, false);
  } else if (typeof document.addEventListener != 'undefined') {
    // MSN/OSX, op7.50, saf1.2, ow5b6.1
    document.addEventListener('load', func, false);
  } else if (typeof window.attachEvent != 'undefined') {
    // ie5.0w, ie5.5w, ie6w
    window.attachEvent('onload', func);
  } else {
    // all other browsers
    if (typeof window.onload == 'function') {
      var oldonload = onload;
      window.onload = function() {
        oldonload();
        func();
      };
    } else {
        window.onload = func;
    }
  }
}
