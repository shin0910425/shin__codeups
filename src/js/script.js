
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
  const fadeswiper = new Swiper(".mv-swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  // カードスライダー
  const slideswiper = new Swiper(".campaign-swiper", {
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

  var EffectH = 100;
  $(window).on('scroll load', function () {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var effectPos = scBottom - EffectH;
    $('.js-scroll').each(function () {
      var thisPos = $(this).offset().top;
      if (thisPos < effectPos) {
        // .js-scrollという要素が可視範囲に入ったら
        $.when(
          // .js-scrollにshowというclassを付与
          $(this).addClass("show")
        ).done(function () {
          //  その後、0.5秒遅らせて.js-scrollにdoneというclassを付与
          $(this).delay(500).queue(function () {
            $(this).addClass("done")
          })
        });
      }
    });
  });

});
