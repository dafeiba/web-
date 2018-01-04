var curIndex = 0;

//定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
arr[0] = "images/banner/banner1.png";
arr[1] = "images/banner/banner2.png";
arr[2] = "images/banner/banner3.png";

$(document).ready(function(){
    // if (curIndex == arr.length - 1) {
    //     curIndex = 0;
    // } else {
    //     curIndex += 1;
    // }
    
    // $(function () {
    //     $("#image_1").click(function () {
    //         $("#image_2").css("background-image", "URL(" + arr[curIndex] + ")");
    //     })
    // });
    $("p#image_1").click(function(){
        $(this).hide();
      });
        
  });