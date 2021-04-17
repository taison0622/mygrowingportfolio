

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
if(!_ua.Mobile&&!_ua.Tablet){
  luxy.init();
}


function scrollToTop() {
  scrollTo(0, 0);
}
