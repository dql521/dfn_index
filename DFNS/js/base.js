// 创建头部公共区域骨架
$(".queen-header").append($("<div></div>").addClass("top"));
$(".top").append($("<div></div>").addClass("logo"));
// 创建logo区域
$(".logo").append($('<a href="javascript:;vold(0)"></a>'));
$(".logo a").append($('<img src="picture/logo.png" alt="">'));
$(".queen-header").append($("<nav></nav>").addClass("nav"));
var wm = false;
$(".logo a").click(function() {
  if (!wm) {
    $("#audio").pause();
    wm = true;
  } else {
    $("#audio").play();
    wm = false;
  }
});
// 创建动态导航区域
$(".nav").append($("<ul></ul>"));
var navArr = [
  "首页",
  "大片",
  "客片",
  "MV&抖音",
  "奢爱旅拍",
  "星範肖像",
  "女王婚纱",
  "最新活动",
  "真實點評",
  "品牌故事"
];
var hrefArr = [
  "dfn-index.html",
  "s-cute.html",
  "clientshow.html",
  "mvtirko.html",
  "s-cute.html",
  "s-cute.html",
  "s-cute.html",
  "activity.html",
  "comment.html",
  "brand-tale.html"
];
for (var i = 0; i < navArr.length; i++) {
  $(".nav ul").append($("<li></li>").addClass("nav-" + (i + 1)));
}
$(".nav li").append($("<div></div>").addClass("inner"));
$(".nav .inner").append($('<a href=""><span></span><span></span></a>'));
$(".nav .inner").append($("<i></i>"));
for (var i = 0; i < hrefArr.length; i++) {
  $(".nav .inner a")
    .eq(i)
    .attr("href", hrefArr[i]);

  $(".nav .inner a")
    .eq(i)
    .children("span")
    .text(navArr[i]);
}

// 公共轮播图区域
// $('.queen-header').append($('<div></div>').addClass('swiper-container swiper-container-1 .queen-banner'))
// $('.swiper-container-1').append($('<div></div>').addClass('swiper-wrapper')).append($('<div></div>').addClass('bottom-nav')).append($('<div></div>').addClass('swiper-button-next')).append($('<div></div>').addClass('swiper-button-prev'))
// var imgArr = ["picture/5dad56e5590cc.jpg","picture/5d8b155abab4d.jpg"]
// for(var i = 0; i <= imgArr.length; i++){
// $('.swiper-wrapper').append($('<div></div>').addClass('swiper-slide slide-1'))
// }
// $('.slide-1').append($('<a href="#"><img src=""></a>'))
// // $('.slide-1').clone(true).appendTo('.swiper-wrapper')

// for(var i = 0; i < imgArr.length; i++){
//     $('.slide-1 img').eq(i).attr('src',imgArr[i])
// }
// $('.bottom-nav').append($('<div></div>').addClass('swiper-pagination'))

// queen-banner功能

var mySwiper = new Swiper(".banner .swiper-container", {
  direction: "horizontal", // 垂直切换选项
  // 循环模式选项
  loop: true,
  autoplay: {
    delay: 3000,
    autoplay: true,
    disableOnInteraction: false
  },

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var swiper = new Swiper(".swiper-container-4", {
  slidesPerView: 4,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  mousewheel: true
});

// 底部公共区域
$(".queen-footer")
  .append(
    $(
      '<div><a href="javascript:;vold(0)"><img src="picture/logo.png"></a></div>'
    ).addClass("footer-logo")
  )
  .append($("<p>4000-352-188</p>").addClass("phoneall"))
  .append($("<p></p>").addClass("linkall"))
  .append(
    $(
      '<div>2019版权所有 (C) 上海女王驾到婚纱摄影有限公司&nbsp;&nbsp;<a href="index.html" target="_blank">沪ICP备16043846号</a><i>ShangHai Queen Arrival CTo.</i></div>'
    ).addClass("copyright")
  );
$(".footer-logo").append("<p>官方网站</p>");
var txtArr = ["关于蒂凡尼斯", "新娘课堂资讯", "全球旅拍资讯", "官方门店地图"];
for (var i = 0; i < txtArr.length; i++) {
  $(".linkall").append('<a href="javascript:layerMap()"></a>');
  $(".linkall a")
    .eq(i)
    .text(txtArr[i]);
}

// 返回顶部按钮
$(".queen-footer").after($("<div></div>").addClass("go-to-top"));
$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 800) {
    //淡入火箭
    $(".go-to-top").fadeIn();
  } else {
    $(".go-to-top").fadeOut();
  }
});
// 回顶部
$(".go-to-top").click(function() {
  $("html,body").animate(
    {
      scrollTop: 0
    },
    1000,
    "linear"
  );
});
