
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

//トップへ戻る------------------------------------------
  let topBtn = $('.to-top');
  topBtn.hide();

  // // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // フッターの位置を計算する関数
  function updateToTopButtonPosition() {
    let footer = $('#footer');
    let footerTop = footer.offset().top;
    let windowHeight = $(window).height();
    let scrollTop = $(window).scrollTop();
    let windowWidth = $(window).width();

    let buttonOffset; // ボタンの位置を保持する変数

    if (windowWidth <= 767) {
      // 767px以下の場合
      buttonOffset = -14; // -30pxのオフセット
    } else {
      // 767pxより大きい場合
      buttonOffset = -20; // 20pxのオフセット
    }

    if (scrollTop + windowHeight >= footerTop + buttonOffset) {
      // ウィンドウの下部がフッターの上部よりオフセット値以上下にある場合
      let diff = (scrollTop + windowHeight) - (footerTop + buttonOffset);
      topBtn.css('bottom', diff + 'px');
    } else {
      // ウィンドウの下部がフッターの上部よりオフセット値より上にある場合
      topBtn.css('bottom', buttonOffset + 'px');
    }
  }


  // ページ読み込み時とウィンドウのリサイズ時に関数を呼び出す
  $(window).on('load resize', function () {
    updateToTopButtonPosition();
  });

  // スクロール時にも関数を呼び出す
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
    updateToTopButtonPosition(); // スクロール時にボタンの位置を更新
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

  // ドロワーメニュー ------------------------------------------
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass('is-active')) {
      $('.js-hamburger').removeClass("is-active");
      $(".header__inner").removeClass("clicked"); // ヘッダーの背景色を元に戻すためにクラスを削除
      $(".js-sp-nav").fadeOut(300);
      $("body").removeClass("active"); // 背景固定を解除する
    } else {
      $('.js-hamburger').addClass("is-active");
      $(".js-sp-nav").fadeIn(300);
      $(".header__inner").addClass("clicked"); // ヘッダーの背景色を変更するためにクラスを追加
      $("body").addClass("active"); // 背景固定を適用する
    }
  });

  // ドロワーメニュー内の <a> タグをクリックする際の処理
  $(".js-sp-nav a").click(function () {
    $(".js-hamburger").removeClass("is-active"); // ハンバーガーアイコンの状態を元に戻す
    $(".js-sp-nav").fadeOut(300, function () {
      $(".header__inner").removeClass("clicked"); // ヘッダーの背景色を元に戻すためにクラスを削除
      $("body").removeClass("active"); // 背景固定を解除する
    });
  });

  // ドロワーメニュー時背景固定
  $(".js-hamburger").click(function () {
    $(this).toggleClass("active");
    $(".js-sp-nav").toggleClass("active");
    $("body").toggleClass("active");
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
  const slideswiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    // slidesPerView: getSlidesPerView(),
    slidesPerView: "auto",
    spaceBetween: 40,
    // centeredSlides: true,
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
