var curIndex = 0;

//定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
arr[0] = "images/banner/banner1.png";
arr[1] = "images/banner/banner2.png";
arr[2] = "images/banner/banner3.png";
// setInterval(changeImg, timeInterval);
function changeImg() {
    //获得id名为d1的对象
    var obj = document.getElementById("image_1");
    if (curIndex == arr.length - 1) {
        curIndex = 0;
    } else {
        curIndex += 1;
    }
    //设置d1的背景图片
    obj.style.backgroundImage = "URL(" + arr[curIndex] + ")";       //显示对应的图片
}
function changeImg1() {
    //获得id名为d1的对象
    var obj = document.getElementById("image_1");
    if (curIndex == 0) {
        curIndex = 2;
    } else {
        curIndex -= 1;
    }
    //设置d1的背景图片
    obj.style.backgroundImage = "URL(" + arr[curIndex] + ")";       //显示对应的图片
}
