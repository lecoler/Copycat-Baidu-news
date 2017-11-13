// header-app s   头部弹出二维码
function header_app() {
    var app = document.getElementById('app_tool');
    var img = document.getElementById('header-app');
    app.onmouseover = function () {
        img.style.display = 'block';
    }
    app.onmouseout = function () {
        img.removeAttribute('style');
    }
}
header_app();
// end

// nav background 跟随鼠标 s
function backgroundMove() {
    var move = document.getElementById('move');
    var lis = document.getElementById('navContent').getElementsByTagName('li');
    for (var i in lis) {
        lis[i].onmouseover = function () {
            move.style.width = this.offsetWidth + 'px';
            move.style.left = this.offsetLeft + 'px';
        }
        lis[i].onmouseout = function () {
            move.style.width = lis[0].offsetWidth + 'px';
            move.style.left = '0';
        }
    }


}
backgroundMove();
// end

// nav 滚动固定 , gotopFixed s
window.onscroll = function () {
    var nav = document.getElementById('nav');
    if(document.body.scrollTop >= 135){
        nav.style.position = 'fixed';
        nav.style.top = 0;
    }else {
        nav.removeAttribute('style');
    }       //navFixed

    var top = document.getElementById('top');
    if(document.body.scrollTop >= 300){
        top.style.height = '48px';
    }else {
        top.style.height = 0;
    }       //topFixed

    var gotopLi = document.getElementById('gotop').getElementsByTagName('li');
    var liText = document.getElementById('gotop').getElementsByTagName('a');
    for(var i in gotopLi){
        gotopLi[i].index = i;
        gotopLi[i].onmouseenter = function () {
            liText[this.index].style.display = 'block';
            this.onmouseleave = function () {
                liText[this.index].style.display = 'none';
            }
        }

    }

}
// end

// headline-tabs onclick s
function tab() {
    var tab = document.getElementById('headline-tabs').getElementsByTagName('li');
    var news = document.getElementById('pane-news');
    var recommend = document.getElementById('pane-recommend');
    for(var i = 0; i < tab.length; i++){
        tab[i].index = i;
        tab[i].onclick = function () {
            for(var j = 0; j < tab.length; j++){
                tab[j].removeAttribute('class');
            }
            this.className = 'default';
            if(this.index == 0){
                news.style.display = 'block';
                recommend.style.display = 'none';
            }else {
                news.style.display = 'none';
                recommend.style.display = 'block';
            }
        }
    }
}
tab();
// end

// 轮播图 s
function imgPlayer() {
    var imgBox = document.getElementsByClassName('imgPlayer')[0];
    var imgView = document.getElementById('imgView').getElementsByTagName('img')[0];
    var controlLeft = document.getElementById('controlLeft');
    var controlRight = document.getElementById('controlRight');
    var imgTitle = document.getElementsByClassName('imgTitle')[0].getElementsByTagName('a')[0];
    var ydots = document.getElementsByClassName('imgTitle')[0].getElementsByTagName('span');
    var imgs = ['4afbfbedab64034f9f4af3cca5c379310b551d70.jpg','4ec2d5628535e5dd93589a157cc6a7efcf1b6287.jpg','14ce36d3d539b60018b5157de350352ac75cb784.jpg','43a7d933c895d14368fbcde979f082025baf076e.jpg','11385343fbf2b211c10ab884c08065380dd78ed7.jpg','a50f4bfbfbedab64e5a57c0afd36afc378311e20.jpg','a8773912b31bb05103d383e23c7adab44bede001.jpg','cb8065380cd79123cc0ea4bea7345982b3b78009.jpg'];
    var titles = ['西班牙上演精彩斗牛赛 帅气斗牛手被顶个“倒栽葱”','新人“七夕”扎堆领证 民政局前排长队','90后独臂独腿小伙骑行到西安：希望爬上华山','12岁大熊猫的生日宴','七夕卖花姑娘：40小时不休卖6千枝 日入10万','大妈为女儿求婚 网上晒出15套房产证','霍元甲玄孙全运会夺冠','大型挖掘机滚落山坡 砸中一列火车车头'];
    var num = 0;
    function autoPlayer() {
        var timer = setInterval(function () {
            imgView.src = "images/" + imgs[num];            //换图
            imgTitle.innerHTML = titles[num];               //换标题
            for(var i = 0; i < ydots.length; i++){
                ydots[i].className = 'ydot';                //圆点排他
            }
            ydots[num].className = 'changeydot';            //对应点亮
            num++;
            num == imgs.length && (num = 0);            //重置计数
            clickChange();                              //调用点击事件
        },1500)     //1s轮播
        imgBox.onmouseover = function () {
            clearInterval(timer);
        }       //当鼠标移入时停止自动轮播
        imgBox.onmouseout = function () {
            autoPlayer();
        }           //当鼠标移出时开始自动轮播

    }           //自动轮播图片
    autoPlayer();
    function clickChange() {
        for(var i = 0; i < ydots.length; i++){
            ydots[i].index = i;
            ydots[i].onmouseover = function () {
                for(var j = 0; j < ydots.length; j++){
                    ydots[j].className = 'ydot';
                }
                this.className = 'changeydot';
                imgView.src = "images/" + imgs[this.index];
                imgTitle.innerHTML = titles[this.index];
                num = this.index;
            }       //点击对应图片
        }
        controlLeft.onclick = function () {
            num -= 1;
            num < 0 && (num = imgs.length-1);
            imgView.src = "images/" + imgs[num];            //换上一张图
            imgTitle.innerHTML = titles[num];               //换上一个标题
            for(var i = 0; i < ydots.length; i++){
                ydots[i].className = 'ydot';                //圆点排他
            }
            ydots[num].className = 'changeydot';          //对应圆点
        }        //点击上一张图
        controlRight.onclick = function () {
            num += 1;
            num == imgs.length && (num = 0);
            imgView.src = "images/" + imgs[num];            //换下一张图
            imgTitle.innerHTML = titles[num];               //换下一个标题
            for(var i = 0; i < ydots.length; i++){
                ydots[i].className = 'ydot';                //圆点排他
            }
            ydots[num].className = 'changeydot';          //对应圆点
        }       //点击下一张图

    }                   //点击按钮事件
}
imgPlayer();
// end

// baijiaHot tab s
function baijiatab() {
    var list = document.getElementsByClassName('baijiaHlist')[0].getElementsByTagName('ul');
    var tab = document.getElementsByClassName('baijiaHtit')[0].getElementsByClassName('tab')[0].getElementsByTagName('span');
    for(var i = 0; i < tab.length; i++){
        tab[i].index = i;
        tab[i].onmouseover = function () {
            for(var j = 0; j < tab.length; j++){
                tab[j].removeAttribute('class');
            }
            this.className = 'default';
            if(this.index == 0){
                list[0].style.display = 'block';
                list[1].style.display = 'none';
            }else {
                list[0].style.display = 'none';
                list[1].style.display = 'block';
            }
        }
    }
}
baijiatab();
// end

//shade s
function shade() {
    var shade = document.getElementsByClassName('shade')[0];
    var close = document.getElementById('box_close');
    var login = document.getElementsByClassName('loginclick');
    for(var i in login){
        login[i].onclick = function () {
            shade.style.display = 'block';
            close.onclick = function () {
                shade.style.display = 'none';
            }
        }
    }
}
shade();


// end