
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

  // スライダー
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  // スライダー
  // const swiper = new Swiper(".card-swiper", {
  //   loop: true,
  //   effect: "fade",
  //   speed: 3000,
  //   autoplay: {
  //     delay: 3000,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next', // 次へボタンのセレクタ
  //     prevEl: '.swiper-button-prev', // 戻るボタンのセレクタ
  //   },
  // });


  const mySwiper = new Swiper('.card-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
      el: '.card02 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.card02 .swiper-button-next',
      prevEl: '.card02 .swiper-button-prev',
    },
    breakpoints: {
      1025: {
        spaceBetween: 32,
      }
    },
  });
});
