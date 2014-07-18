$(document).ready(
  function() {
	jQuery("select.image-picker.show-labels").imagepicker({
	    hide_select:  true,
	    show_label:   true,
	}).change(function(evt){
            var url = jQuery(evt.target).find("option:selected").data("video-url"); 
            window.location = jQuery("#launch_url") + '?' + 'return_type=url&url=' + encodeURIComponent(url);
	});
		
  });
