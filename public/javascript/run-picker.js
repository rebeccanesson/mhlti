$(document).ready(
  function() {
	jQuery("select.image-picker.show-labels").imagepicker({
	    hide_select:  true,
	    show_label:   true,
	}).change(function(evt){
            console.log(evt); 
	});
		
  });
