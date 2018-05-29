/*获取三个框元素*/
var olonely1 = document.getElementById("lonely1");
var olonely2 = document.getElementById("lonely2");
var olonely3 = document.getElementById("lonely3");


/*设置三个框滚动的初始位置*/
var speed1 = 0;
var speed2 = 0;
var speed3 = 0;

/*设置三个框滚动的初始速度*/
var step1 = 0;
var step2 = 0;
var step3 = 0;

/*最大数和最小数之间的随机数*/
function MaxMin(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

/*三个框开始滚动*/
var timer = null;
function move() {

    /*每次点击三个框都获取到不同的滚动速度*/
    step1 = MaxMin(6, 20);
    step2 = MaxMin(14, 20);
    step3 = MaxMin(8, 20);


    clearInterval(timer);
    timer = setInterval(function () {

        speed1 -= step1;
        speed2 -= step2;
        speed3 -= step3;

        if (speed1 < -600) {
            speed1 = 0;
        }
        if (speed2 < -600) {
            speed2 = 0;
        }
        if (speed3 < -600) {
            speed3 = 0;
        }

        olonely1.style.top = speed1 + "%";
        olonely2.style.top = speed2 + "%";
        olonely3.style.top = speed3 + "%";
        
    }, 33);
}

/*6个相应的事件*/
var who = ["马云", "周杰伦", "柯南", "村长", "蜘蛛侠", "陈脑西"];
var go = ["富士山", "K11", "迪士尼", "火星", "夏威夷", "贝克街"];
var how = ["看流星", "吃麻辣烫", "玩飞行棋", "坐热气球", "写代码", "放风筝"];


/*用来获取上面上个数组中元素，可以认为是索引值*/
var ImgNum1 = 0;
var ImgNum2 = 0;
var ImgNum3 = 0;


var oPro = document.getElementById("produce");
/*停止滚动*/
var oTodo = document.getElementById("todo");
oPro.onclick = function () {

    move();

    /*清空原有数据*/
    oTodo.innerHTML = "";


    setTimeout(function () {

        clearInterval(timer);

        speed1 = -integer(speed1);
        speed2 = -integer(speed2);
        speed3 = -integer(speed3);


        olonely1.style.top = speed1 + "%";
        olonely2.style.top = speed2 + "%";
        olonely3.style.top = speed3 + "%";


        ImgNum1 = ((-speed1) / 100);
        /*0-6*/
        ImgNum2 = ((-speed2) / 100);
        /*0-6*/
        ImgNum3 = ((-speed3) / 100);
        /*0-6*/


        /*判断这个值是否为6，因为数组最大的索引为（0-5）5.等于6时，就是0，根据HTML中图片的顺序，*/
        if (ImgNum1 == 6) {
            ImgNum1 = 0;
        }
        if (ImgNum2 == 6) {
            ImgNum2 = 0;
        }
        if (ImgNum3 == 6) {
            ImgNum3 = 0;
        }

        /*显示在文本框中的文字*/
        oTodo.innerHTML = " <p>和" + who[ImgNum1] + "在" + go[ImgNum2] + how[ImgNum3] + "</p>";

    }, 3000);
};


/*选择合适的位置(只要下一张图片冒头了，就显示下一张)*/
function integer(speed) {
    var num = -speed;
    /*z只要下一张图片往上移动了1%
     * 例如此时speed为-138%，则num = 138，parseInt((num/100))*100 = 100，将138-100=38 > 1，则此时将speed的值设为
     *
     *  (parseInt((num/100)+1)*100) = 200，就是显示下一张图片
     *
     * -138%   =====   -200%  显示下一张
     * */
    if (num - parseInt((num / 100)) * 100 > 1) {
        return (parseInt((num / 100) + 1) * 100)
    } else {
        return (parseInt((num / 100)) * 100)
    }
}




