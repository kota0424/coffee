$(function(){
    /*===================
    スムーススクロール
    ===================*/
    //クリック動作
    $('a[href^="#"]').on('click', function(){
        //リンクの習得
        let href= $(this).attr("href");
        //ジャンプ先のidをセット
        let target= $(href == "#" || href == "" ? 'html' : href);
        //トップかジャンプ先までの距離の習得
        let position= target.offset().top;
        //animateでスムーススクロールを行う
        //ミリ秒の単位で記入
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
    });
});