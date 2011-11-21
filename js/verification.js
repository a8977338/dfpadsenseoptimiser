$(document).ready(function(){
  $('textarea#controlandtrackingscript').change(extract);
});

function extract()
{
  var script = $('textarea#controlandtrackingscript').val();
  var eid = script.match(/var k='(\d+)'/) || ['',''];
  var aid = script.match(/UA-\d+-\d+/) || ['',''];
  var eid = eid[1];
  var aid = aid[0];
  $('span#exp_id_span').html(eid);
  $('input#exp_id').val(eid);
  $('span#ana_id_span').html(aid);
  $('input#ana_id').val(aid);
}

function generate()
{
  extract();
  
  var snippets = $('#snippets');
  snippets.empty();
  $('input.sections').each(function(i,e){
    var snippetname = $(e).val();
    var snippet = '<h6>'+snippetname+'</h6><textarea rows="2" class="copy xlarge"><script>utmx_section("'+snippetname+'")<\/script>\n<\/noscript>\n<\/textarea>';
    snippets.append(snippet);
  });

  var eid = $('input#exp_id').val();
  var aid = $('input#ana_id').val();
  var sec = $('input.sections').map(function(i,e){return $(e).attr('name')+'='+$(e).val();}).get().join('&');
  var url = (eid && aid) ? '/verification.php?exp_id='+eid+'&ana_id='+aid+'&'+sec : '#';
  $('#verification_page').attr('href', url);

  $('#control_script').val(
    $('#controltrackingcodetemp').val()
      .replace(/%GWO_EXP_ID%/g, $('#exp_id').val())
      .replace(/%GA_CUSVAR_IDX%/g, $('#cusvar_idx').val())
  );

  return false;
}

function add_section(element)
{
  element = $(element);
  section = element.parent().parent().prev();
  new_section = section.clone();
  new_section.find('input').val("");
  new_section.find('input').attr("class", "sections large");
  new_section.find('label').remove();
  section.after(new_section);
  new_section.find('button').show();
  new_section.find('input').focus();
  return false;
}

function remove_section(element)
{
  $(element).parent().parent().remove();
  return false;
}

var urlParams = {};
(function () {
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.search.substring(1);

    while (e = r.exec(q)) {
       v = d(e[2]);
       k = d(e[1]);
       if (m = k.match(/(^.*)\[\]$/)) {
         urlParams[m[1]] = urlParams[m[1]] || [];
         urlParams[m[1]].push(v);
       } else {
         urlParams[k] = v;
       }
    }
})();

