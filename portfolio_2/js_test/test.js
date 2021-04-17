window.onload=function(){
    const spinner=document.getElementById('loading');
    spinner.classList.add('loaded');
}

//ヘッダーの位置を取得
let navPos = jQuery('.dummy').offset().top;
//ヘッダーの高さを取得
let navHei = $('.dummy').outerHeight();
let conceptHei = jQuery('.swiper-container').outerHeight();
console.log(navHei);
//スクロールアクション実行でスクロールTopが850pxを超えたら
jQuery(window).on('scroll',function(){
    if(navHei<jQuery(this).scrollTop()){
        //jQuery( 'body' ).css( 'padding-top', navHei );
        jQuery('#head-act').addClass('m_fixed');}

    else{
        jQuery('body').css('padding-top',0);
        jQuery('#head-act').removeClass('m_fixed');}
	if(conceptHei-400<jQuery(this).scrollTop()){
		jQuery('.name').addClass('c_on');
		jQuery('.name_info').addClass('c_on');}
	});

const accTrigger =
document.querySelectorAll('.ac_trigger');

accTrigger.forEach(trigger =>
    trigger.addEventListener('click',toggleAcc));

function toggleAcc(){
    const items = document.querySelectorAll('.acc_item');
    const thisItem = this.parentNode;
    items.forEach(item =>{
        if(thisItem == item){
            thisItem.classList.toggle('is_open');
            return;
        }
        item.classList.remove('is_open');
    });
}

$(function() {

	/**
	 * 現在スクロール位置によるグローバルナビのアクティブ表示
	 */
	let scrollMenu = function() {
		// 配列宣言
		// ここにスクロールで点灯させる箇所のidを記述する
		// 数値は全て0でOK
		let array = {
			'#sec1': 0,
			'#sec2': 0,
			'#sec3': 0,
			'#sec4': 0,
			'#sec5': 0,
			'#sec6': 0
		}

		let $globalNavi = new Array();

		// 各要素のスクロール値を保存
		for (let key in array) {
			if ($(key).offset()) {
				array[key] = $(key).offset().top - 60; // 数値丁度だとずれるので10px余裕を作る
				$globalNavi[key] = $('#header ul li a[href="' + key + '"]');
			}
		}

		// スクロールイベントで判定
		$(window).scroll(function () {
			for (let key in array) {
				if ($(window).scrollTop() > array[key] -80) {
					$('#header ul li a').each(function() {
						$(this).removeClass('active');
					});
					$globalNavi[key].addClass('active');
                    
                    
				}
			}
		});
	}

	// 実行
	scrollMenu();
});
$(function() {
	/**
	 * ページ内スクロール
	 */
	$('a').click(function(){
		let speed = 500;
		let href= $(this).attr("href");
		let target = $(href == "#" || href == "" ? 'html' : href);
		let position = target.offset().top - 100;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if(touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
