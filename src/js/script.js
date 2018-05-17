
$(function() {
  enable_cb();
  $("#group1").click(enable_cb);
});

function enable_cb() {
  if (this.checked) {
    $("input.group1").removeAttr("disabled");
  } else {
    $("input.group1").attr("disabled", true);
  }
}


	$(function(){
    var $select = $(".1-100");
    for (i=0;i<=10000;i=i+2500){
        $select.append($('<option></option>').val(i).html(i))
    }
});



	$(document).ready(function() {
	  $('.button').on('click', function() {
	    $('.content-wrapper').toggleClass('isOpen');
	  });
	});
