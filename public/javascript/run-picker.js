$(document).ready(
  function() {
	jQuery("select.image-picker.show-labels").imagepicker({
	    hide_select:  true,
	    show_label:   true,
	}).change(function(evt){
            var url = jQuery(evt.target).find("option:selected").data("video-url"); 
            var title = jQuery(evt.target).find("option:selected").data("img-label"); 
            window.location = jQuery("#launch_url").html() + '?' + 'return_type=url&url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);
	});
		
  });
