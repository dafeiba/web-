
function addRow(){
    var rs = $("#mytable").rows;  //table取到所有的行
    var insertR = $("#mytable").insertRow(rs.length-1); //给表格添加一行(不包单元格)
    //insertR.innerHTML = rs[1].innerHTML;    
    var c1 = insertR.insertCell(3);       
    c1.innerHTML = "yc" +Math.round(Math.random() * 101);
    var c2 = insertR.insertCell(1);
    c2.innerHTML = Math.round(Math.random() * 101);
    var c3 = insertR.insertCell(2);
    c3.innerHTML ='<input type="button" value="删除" class="del"/><input type="button" value="修改" class="update"/>';
    
    doOperator();

    var cs = rs[1].cells; //取到当前行的所有单元格
    //alert(cs[1].innerHTML);
}
