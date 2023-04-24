  window.onload = function(){
    var url_track = new URL(window.location.href);
    
    var tracking_atts = { 
        utm_source : url_track.searchParams.get("utm_source") ? url_track.searchParams.get("utm_source") : '',
        utm_medium : url_track.searchParams.get("utm_medium") ? url_track.searchParams.get("utm_medium") : '',
        utm_campaign : url_track.searchParams.get("utm_campaign") ? url_track.searchParams.get("utm_campaign") : '',
        utm_term : url_track.searchParams.get("utm_term") ? url_track.searchParams.get("utm_term") : '',
        utm_content : url_track.searchParams.get("utm_content") ? url_track.searchParams.get("utm_content") : '',
        src : url_track.searchParams.get("src") ? url_track.searchParams.get("src") : '',
    };
  
    var links = jQuery('a[href*="/"]');              
    
    links.each(function(){
        var link = jQuery(this);
        if(link.attr("href").indexOf('?') > 0)
                    var old_src = link.attr("href") + '&';
        else
            var old_src = link.attr("href") + '?';
        var part_string = "";
        jQuery.each(tracking_atts, function(index, element){
          if( element && element != ""){
            part_string += index + "=" + element + "&"
          }
        });      
        if( part_string != "" ){
            link.attr('href', old_src + part_string.substring(0, part_string.length - 1)); 
        }
      
    });  
    
  } 