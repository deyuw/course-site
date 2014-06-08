var $line_left = $('#line_left');
$(document).scroll(function() {
  $line_left.css({display: $(this).scrollTop() > 20? "block":"none"});
});
var $line_right = $('#line_right');
$(document).scroll(function() {
  $line_right.css({display: $(this).scrollTop() > 20? "block":"none"});
});
var $line_left_long = $('#line_left_long');
$(document).scroll(function() {
  $line_left_long.css({display: $(this).scrollTop() > 20? "block":"none"});
});
var $line_right_long = $('#line_right_long');
$(document).scroll(function() {
  $line_right_long.css({display: $(this).scrollTop() > 20? "block":"none"});
}); 

// $('#discuss').tooltip();
// $('#submit').tooltip()