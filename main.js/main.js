// jQuery設定 --------------------

// 
$(".humburger-menu").click(function () {
  $('.humburger-menu, .slide-menu').toggleClass('active');
});

// ハンバーガーメニューのリンククリックでメニューを閉じる
$(".slide-menu a").click(function () {
  $('.humburger-menu, .slide-menu').removeClass('active');
});



// swiper設定 --------------------

// swiper1

const swiper = new Swiper('.swiper', {

    // 表示するスライド枚数
    slidesPerView: 1.5 ,

    //  1周したら最初に戻る
    loop: true , 

    spaceBetween: 15 ,


    // effect: 'fade' ,

    // アクティブなスライドを中央にする
    centeredSlides: true ,
  
    // ページネーション
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets' ,
      dynamicMainBullets: 1 ,
      clickable: true ,
    },
  
    // ナビゲーション矢印
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});


// swiper2
const swiper2 = new Swiper('.swiper2', {

    // 表示するスライド枚数
    slidesPerView: 1.5 ,

    //  1周したら最初に戻る
    loop: true , 

    spaceBetween: 50 ,


    // effect: 'fade' ,

    // アクティブなスライドを中央にする
    centeredSlides: true ,
  
    // ページネーション
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets' ,
      dynamicMainBullets: 1 ,
      clickable: true ,
    },
  
    // ナビゲーション矢印
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});



  