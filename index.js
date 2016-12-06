$(document).ready(function() {
  var curpos = 0;
  var containitem = document.getElementsByClassName('container-fluid')[0].children;
  $('#startbutton').click(function() {
    curpos -= 100;
    for (var i = 0; i < containitem.length; i++) {
      $(containitem[i]).animate({'top': curpos + '%'},1000);
    }
  });
});
