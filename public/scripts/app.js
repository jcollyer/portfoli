pagePlace = function() {
  var pagePosition;
  pagePosition = $("body").scrollTop() || pageYOffset;
  if (pagePosition > 150) {
    $("#navigation").addClass("plus");
    $("#logo").attr("src","img/logo2.png");
  } else {
    $("#navigation").removeClass("plus");
    $("#logo").attr("src","img/logo.png");
  }
};


if ($(window).width() > 767) {
  $(window).scroll(function() {
    return pagePlace();
  });
};
