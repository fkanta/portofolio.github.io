$(function(){





  $("#eyecatch p").hide().fadeIn(2000);

  $(".service-more").hide();
  $(".service-box-img").hover(function(){
    $(".service-more",this).stop().fadeToggle(600);
  });

  var header = $("#top-header");
  var news = $("#news");
  var headerHaight = header.outerHeight();
  var offset = news.offset();

  $(window).scroll(function(){
    if ($(this).scrollTop()+headerHaight >= offset.top) {
      header.addClass("top-header-scroll")
    }else {
      header.removeClass("top-header-scroll")
    }
  });

  var navLink = $("#menu a");
  var contentsArr = [];


  for (var i = 0; i < navLink.length; i++) {
    var targetContents = navLink.eq(i).attr('href');

    var targetContentsTop = $(targetContents).offset().top;

    var targetContentsBottom = targetContentsTop+$(targetContents).outerHeight();

    contentsArr[i]=[targetContentsTop,targetContentsBottom];
    console.log(contentsArr[i]);

  }

console.log(contentsArr[2]);
console.log(contentsArr[2][0]);


  $(window).scroll(function(){
    var windowScrollTop = $(this).scrollTop()+headerHaight;

    if (windowScrollTop < contentsArr[0][0]) {
      navLink.removeClass("marker");
    } else {
      for (var i = 0; i < navLink.length; i++) {
        if (windowScrollTop >= contentsArr[i][0] && windowScrollTop <= contentsArr[i][1] ) {
          navLink.removeClass("marker");
          navLink.eq(i).addClass("marker");
        };
      };
    };

  });





});
