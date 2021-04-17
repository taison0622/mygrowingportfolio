
$('.menuicon').click(function(){
$('.menuicon').css('display','none');
$('.head-cent').slideDown(500);
$('.head-cent').css('display','flex');
$('.heading').css('border-top','none');
$('.heading').css('border-left','none');
$('.heading').css('border-right','none');
$('.back').css('display','block');

});
$('.back').click(function(){
    $('.back').css('display','none');
    $('.menuicon').fadeIn(500)
    $('.head-cent').css('display','none');
    $('.menuicon').css('display','block');

});

window.onload=function(){
    const spinner=document.getElementById('loading');
    spinner.classList.add('loaded');
}

var _ua = (function(u){
    return {
      Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
        || u.indexOf("ipad") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
        || u.indexOf("kindle") != -1
        || u.indexOf("silk") != -1
        || u.indexOf("playbook") != -1,
      Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
        || u.indexOf("iphone") != -1
        || u.indexOf("ipod") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
        || u.indexOf("blackberry") != -1
    }
  })(window.navigator.userAgent.toLowerCase());

  

function scrollToTop() {
  scrollTo(0, 0);
}




var top = document.getElementById("top");
var headerHigh = 70;
//JavaScript（jQuery含む）JavaScript
$(function() {
  $('a').on('click', function(e) { //イベントオブジェクトを使うのでeを入れる
    e.preventDefault(); //aタグが持つ元々の挙動をキャンセルして移動させなくする
    var href = $(this).attr('href');
    if (href.match(/^#/) || href=='') { //href属性の中身が#から始まる形か空だったら
      var target; //移動先を入れるための変数を作り
      if (href == '#' || href=='' ) { //取得したhrefの中身が「#だけ」か空だったときの処理
        target = $('html'); //移動先はページ上部にするためhtmlをjQueryオブジェクトにし変数へ
      } else { //それ以外の場合は
        target = $(href); //取得したhref属性の中身をjQueryオブジェクトにし変数へ
      }
      var posi = target.offset().top-headerHigh;
      //取得したhrefの上からの距離を取得して変数に入れる
      
   
      
      $('html,body').animate({
        'scrollTop': posi
      }, 500); //animateメソッドで移動
    } else {//#から始まるものと空以外なら
      if ($(this).attr('target')) {//target属性が取得できたら別タブで飛ばしたい
        window.open(href, '_blank');//リンクを別タブで開く
      } else {//target属性が取得できなかったら
        $('html').animate({
          opacity: 0
        }, 1000, function() {
          location.href = href;//アニメーション後にページ移動
        });
      }
    }
  });
});


