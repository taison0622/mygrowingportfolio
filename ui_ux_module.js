//setElmでloopSliderクラスを定義


/* var links = document.getElementById("links");
 var i = 1;

 links.href = "#" + i++;*/

/*
var position = 0;

$(window).scroll(function(e) {
    var $element = $('.header');
    var scrollTop = $(this).scrollTop();
    if( scrollTop <= 0 ) { 
        $element.removeClass('hide').removeClass('scrolling');
    } else if( scrollTop < position ) {
        $element.removeClass('hide');
    } else if( scrollTop > position ) {
        $element.addClass('scrolling');
        if( scrollTop + $(window).height() >=  $(document).height() - $element.height() ){
            $element.removeClass('hide');
        } else if(Math.abs($element.position().top) < $element.height()) {
            $element.addClass('hide');
        }
    }
    position = scrollTop;
}); */

$(function(){
    let setElm = $('.loopSlider'),
    moveInterval = 1,
            slideTimeBase = 6,
            //メディアクエリ
            spWidth = 768,
            spSpeed = 4;
        
            $(window).on('load', function(){     
                    
                setElm.each(function(){
                    //選択したやつ
                    let self = $(this),
                    //選択したやつのwidth値を取得
                    selfWidth = self.innerWidth(),
                    findUl = self.find('ul'),
                    findLi = findUl.find('li'),
                    findLink = findLi.find('a'),
                    //個数を取得
                    listCount = findLi.length;
                    //list全体のwidth値を取得
                    listWidth = findLi.outerWidth();

                    loopWidth = listWidth * listCount;
                    //<ul>を<div class="loopSliderWrap" />で囲う
                    findUl.wrapAll('<div class="loopSliderWrap" >');
                    //loopSliderWrapを選択する
                    let selfWrap = self.find('.loopSliderWrap');
                    //loopSliderクラスにcss追加
                    setElm.css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},500,'linear');
        
                    if(loopWidth > selfWidth){
                        //loopSliderWrapの前後にクローンを配置
                        findUl.css({width:loopWidth}).clone().appendTo(selfWrap).clone().prependTo(selfWrap);
        
                        selfWrap.css({left:'-' + loopWidth + 'px'});
        
                        setSlideTime();
                        timerLeft();
                        //ウィンドウサイズが変更されたらリセット
                        $(window).on('resize', function(){
                            clearInterval(setTimer);
                            setSlideTime();
                            timerLeft();
                        }).resize();
                        //slideTimeBaseを再設定
                        function setSlideTime() {
                            if(window.innerWidth > spWidth){
                                slideTime = slideTimeBase;
                            } else {
                                slideTime = slideTimeBase*spSpeed;
                            }
                        }
                        //slideTime秒ごとにloopPositionLeftを実行する
                       function timerLeft(){
                            setTimer = setInterval(function(){loopPositionLeft()},slideTime);
                        };
                        
                        function loopPositionLeft(){
                            listWidth = findLi.outerWidth();
                            loopWidth = listWidth * listCount;
        
                            self.find('ul').css({width:loopWidth});
                            selfWrap.css({width:loopWidth*3}).stop().animate({left:'-=' + (moveInterval) + 'px'},slideTime,'linear',
                            function(){
                                //-5310px
                                let posLeft = parseInt(selfWrap.css('left')),
                                //5310-15930=-10620
                                widthCal = (loopWidth)-((loopWidth)*3);
                                //左に要素を-10620px以上フリックした場合、left=0にする
                                //-5310 <= -10620 true!
                                if (posLeft <= widthCal) {
                                    //-5310- -10620=5310
                                    let calCat = posLeft - widthCal;
                                    //alert(calCat) - + 5310 - 5310
                      
                                    
                                    selfWrap.css({left:'-' + (loopWidth - calCat) + 'px'});
                                }
                                //右に要素を0pxまでフリックした場合、left=-5310pxにする
                                if (posLeft >= widthCal) {
                                  
                                    let calCat = posLeft - widthCal;
                                    //alert(calCat) - + 5310 - 5310
                   
                                    selfWrap.css({left:'-' + (loopWidth - calCat) + 'px'});
                                }
                            });
                            return false;
                        }; 
        
                        
                        function myHandler(e){
                            e.preventDefault();
                        }
        
                        let isTouch = ('ontouchstart' in window),
                        ua = navigator.userAgent;
        
                        selfWrap.on({
                            'touchstart mousedown': function(e){
                                if(!(ua.search(/iPhone/) != -1 || ua.search(/iPad/) != -1 || ua.search(/Macintosh/) != -1 && 'ontouchend' in document || ua.search(/iPod/) != -1 || ua.search(/Android/) != -1)){
                                    e.preventDefault();
                                    $(this).find('a').off('click', myHandler);
                                }
                                if(selfWrap.is(':animated')){
                                    clearInterval(setTimer);
                                }
                                this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
                                this.leftBegin = parseInt($(this).css('left'));
                                this.left = parseInt($(this).css('left'));
                                this.touched = true;
                            },
                            'touchmove mousemove': function(e){
                                if(!this.touched){return;}
                                if(!(ua.search(/iPhone/) != -1 || ua.search(/iPad/) != -1 || ua.search(/Macintosh/) != -1 && 'ontouchend' in document || ua.search(/iPod/) != -1 || ua.search(/Android/) != -1)){
                                    e.preventDefault();
                                    $(this).find('a').on('click', myHandler);
                                }
                                if(selfWrap.is(':animated')){
                                    clearInterval(setTimer);
                                }
                                this.left = this.left - (this.pageX - (isTouch ? event.changedTouches[0].pageX : e.pageX) );
                                this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
                                $(this).css({left:this.left});
                            },
                            'touchend mouseup mouseout': function(e){
                                if (!this.touched) {return;}
                                this.touched = false;
                                //5310
                                outLeft = parseInt($(this).css('left'));
                                //x<-10620･･･左にフリック一定距離で実行する処理
                                if(outLeft < (loopWidth)-((loopWidth)*3)){
                                    //x-(5310-10620)=+5310
                                    $(this).css({left:(outLeft - (loopWidth-(loopWidth*2))+ 'px')});
                               //    $(loopWidth).detach();
                                   // findUl.css({width:loopWidth}).clone().prependTo(selfWrap).fadeIn();;

                                }//x>-5310･･･右にフリック一定距離で実行する処理
                                if(outLeft > (loopWidth)-((loopWidth)*2)){
                                    //x-5310
                                    $(this).css({left: outLeft + (loopWidth-(loopWidth*2)) + 'px'}); 
                                  
                             //    $(loopWidth).detach();
                                //  findUl.css({width:loopWidth}).clone().prependTo(selfWrap);

                                }
                                if(outLeft=0){
                                    findUl.css({left:0})
                                };
                                timerLeft();
                                return false;
                            }
                        });
        
                        if(ua.search(/iPhone/) != -1 || ua.search(/iPad/) != -1 || ua.search(/Macintosh/) != -1 && 'ontouchend' in document || ua.search(/iPod/) != -1 || ua.search(/Android/) != -1){
                            selfWrap.find('a').on({
                                'touchstart': function(e){
                                    thisHref = $(this).attr('href');
                                    thisTarget = $(this).attr('target');
                                    touchFlag = true;
                                },
                                'touchmove': function(e){
                                    touchFlag = false;
                                    e.preventDefault();
                                },
                                'touchend': function(e){
                                    if(touchFlag == true){
                                        if(thisTarget == '_blank'){
                                            window.open(thisHref, '_blank');
                                        } else {
                                            location.href = thisHref;
                                        }
                                    }
                                }
                            });
                        }
                    }
                });
            });

            
        });
     

        
        
