/* 
 * Author:  Michal Fojtik <mi@mifo,sk>
*/

var stop_slides = false;

$(document).ready(function(){
  $('#slideshow form#join-us').hide(); 
  $('#notice').hide()
  $('#slideshow div.slideshow article').hide(); 
  $('#slideshow div.slideshow article').css({'opacity':'0'});
  $('#slideshow div.slideshow article:first').show(); 
  $('#slideshow div.slideshow article:first').css({'opacity':'1'});
  $('#slideshow div.slideshow article:first').addClass('active'); 

  $("#toolbar button").click(function(){
    stop_slides = true;
    $("#slideshow div.slideshow").hide();
    $(this).hide();
    $("#slideshow form#join-us").addClass('active').fadeIn();
  })

  $("#slideshow form#join-us").submit(function(){
    $.post("/stories", $(this).serialize(), function(data){
      $("#slideshow form#join-us").removeClass('active').hide();
      $("#notice").html(data)
    });
    $("#slideshow div.slideshow").show();
    $("#toolbar button").show();
    return false;
  })

  $("div#slideshow").hover(function(){
      stop_slides = true;
      }, function(){
        stop_slides = false;  
        changeSlide();
  });
});

function changeSlide() {
  if (stop_slides && ($("#slideshow form#join-us").is('.active') == false)) {
    return true
  }
  var active_slide = $('#slideshow div.slideshow article.active');
  active_slide.animate({
      opacity : '0',
    }, 500, function(){
      active_slide.hide().removeClass('active').next().addClass('active')
      if (active_slide.next().length>0) {
        active_slide.next().show();
        active_slide.next().animate({
          opacity : '1'
        }, 500)
      } else {
        active_slide.hide()
        active_slide.removeClass('active')
        $('#slideshow div.slideshow article:first').show().addClass('active').animate({
          opacity : '1'
        }, 500); 
      }       
    });
}
$(document).everyTime(5010, function(i) { 
    changeSlide();
}, 0);






















