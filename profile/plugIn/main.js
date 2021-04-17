
window.onload=function(){
  const spinner=document.getElementById('loading');
  spinner.classList.add('loaded');
}

let i =1;
var state ={count:i};
var links = document.getElementById("links");
var top = document.getElementById("top");
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
      var posi = target.offset().top;
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
links.onclick = function(){
if(state.count < 5){

  links.href = "#a" + ++state.count;
}else{
  state.count = 0;
  }
};
/*
じっくり解決しよう
top.onclick = function(){
 if(state.count = i){
   links.href = "";
 }
  
}; */

$('.form').click(function(){
$('.toForm').css('display','block');

});
$('.delete').click(function(){
  $('.toForm').css('display','none');
});