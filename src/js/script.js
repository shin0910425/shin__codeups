
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  let topBtn = $('.to-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass('is-active')) {
      $('.js-hamburger').removeClass("is-active");
      // $("html").toggleClass("is-fixed");
      $(".js-sp-nav").fadeOut(300);
    } else {
      $('.js-hamburger').addClass("is-active");
      // $("html").toggleClass("is-fixed");
      $(".js-sp-nav").fadeIn(300);
    }
  });

  // mvスライダー
  const fadeswiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  // カードスライダー
  const slideswiper = new Swiper(".card-swiper", {
    loop: true,
    slidesPerView: '3.2',
    spaceBetween: 40,
    centeredSlides : true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 3000,
    effect: "slide",
    navigation: {
      nextEl: '.swiper-button-next', // 次へボタンのセレクタ
      prevEl: '.swiper-button-prev', // 戻るボタンのセレクタ
    },
  });

});
