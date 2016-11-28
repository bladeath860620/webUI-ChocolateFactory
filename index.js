$(document).ready(function() {
  var containitem = document.getElementsByClassName('container-fluid')[0].children;
  $('#startbutton').click(function() {
    for (var i = 0; i < containitem.length; i++) {
      $(containitem[i]).animate({'top': '-100%'},1000);
    }
  });
});
