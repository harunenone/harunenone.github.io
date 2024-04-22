$(function(){
    var pagetop = $('#page_top');
    // 普段はボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示（フェードインで） 
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       // そうじゃない場合は非表示（フェードアウトで）      
       } else {
            pagetop.fadeOut();
       }
    });
    // ボタンをクリックしたら500ミリ秒かけてページ上部（0pxの位置）までスクロールアップで移動
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });