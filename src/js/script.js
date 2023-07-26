
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

//トップへ戻る------------------------------------------
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

  // ヘッダークラス名付与-------------------------------------
  let header = $('.header');
  let headerHeight = $('.header').height();
  let height = $('.mv').height();
  $(window).scroll(function () {
    if ($(this).scrollTop() > height - (headerHeight)) {
      header.addClass('is-color');
    } else {
      header.removeClass('is-color');
    }
  });

  //ドロワーメニュー ------------------------------------------
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

  // mvスライダー ------------------------------------------
  const fadeswiper = new Swiper(".mv-swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  // カードスライダー ------------------------------------------
  const slideswiper = new Swiper(".campaign-swiper", {
    loop: true,
    slidesPerView: getSlidesPerView(),
    spaceBetween: 40,
    centeredSlides: true,
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

  function getSlidesPerView() {
    if (window.innerWidth <= 767) {
      return 1.2;
    } else {
      return 3;
    }
  }

  window.addEventListener('resize', function () {
    slideswiper.params.slidesPerView = getSlidesPerView();
    slideswiper.update();
  });


  // 背景から画像が出る-------------------------------------------
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
