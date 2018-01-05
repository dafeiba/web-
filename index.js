//学生信息类
function Studtent(student_id, name, college, major, grade, clazz, age) {
    this.student_id = student_id;
    this.name = name;
    this.college = college;
    this.major = major;
    this.grade = grade;
    this.clazz = clazz;
    this.age = age;
    this.toWatchString = function () {
        return student_id + name + college + major + major + grade + clazz + age;
    }
}


var students = [new Studtent("1", "Mike", "Computer", "CS", '2016', '2', '20'), 
    new Studtent("2", "Tom", "Computer", "CS", 2015, 2, 20), 
    new Studtent("3", "James", "Sport", "NBA", 2003, 2, 33), 
    new Studtent("4", "Curry", "Sport", "NBA", 2007, 2, 29), 
    new Studtent("5", "Leonard", "Sport", "NBA", 2007, 2, 29),
    new Studtent("6", "Westbrook", "Sport", "NBA", 2007, 2, 29),
    new Studtent("7", "Davis", "Sport", "NBA", 2007, 2, 29)
        ];
// var myArray = new Array();
// for(var i = 0; i < 25; i++){
//     myArray[i] = i;
// }
// var col = 7;

function display(){
    for(var i = 0; i < students.length; i++){
        var oNum = students[i].student_id;
        var oUser = students[i].name;
        var oPwd = students[i].college;
        var oBirth = students[i].major;
        var oAddre = students[i].grade+'';
        var oYear = students[i].clazz+'';
        var oAge = students[i].age + "";
        addList(oNum,oUser,oPwd,oBirth,oAddre,oYear,oAge)
    }
    // var lines=Math.ceil(arr.length/col);//很关键的一步，这里为生成表格的行数  
    // var str="<table><tbody>";//表头  
    // for (var j=0;j<lines;j++){//遍历表格行  
    // str+="<tr>";  
    // for (var k=0;k<col;k++){//遍历表格列  
    // str+="<td>";  
    // if(typeof arr[k+j*col]=="undefined"){str+="&nbsp";}  
    // else{str+=arr[k+j*col];}  
    // str+="</td>";  
    // };//表格行结束  
    // str+="</tr>";  
    // };  
    // str+="</tbody></table>";  
    


}
function addListFromModal(){
    var oNum = document.getElementById('num').value;
    var oUser = document.getElementById('username').value;
    var oPwd = document.getElementById('pwd').value;
    var oBirth = document.getElementById('birth').value;
    var oAddre = document.getElementById('addre').value;
    var oYear = document.getElementById('year').value;
    var oAge = document.getElementById('age').value;
    console.log(typeof oNum);
    addList(oNum,oUser,oPwd,oBirth,oAddre,oYear,oAge);
    students.push(new Studtent(oNum,oUser,oPwd,oBirth,oAddre,oYear,oAge));
    console.log(students);
}


function addList(oNum,oUser,oPwd,oBirth,oAddre,oYear,oAge){
   
    
    // var oNum = document.getElementById('num').value;
    // var oUser = document.getElementById('username').value;
    // var oPwd = document.getElementById('pwd').value;
    // var oBirth = document.getElementById('birth').value;
    // var oAddre = document.getElementById('addre').value;
    // var oYear = document.getElementById('year').value;
    // var oAge = document.getElementById('age').value;
    console.log(oNum,oUser,oPwd,oBirth,oAddre,oYear,oAge)

    var oTr = document.createElement('tr');
    var oTd1 = document.createElement('td');
    var oInput = document.createElement('input');
    oTd1.appendChild(oInput);
    oInput.setAttribute('type','checkbox');
    oInput.setAttribute('name','item');
    var oTd2 = document.createElement('td');
    oTd2.innerHTML = oNum;
    var oTd3 = document.createElement('td');
    oTd3.innerHTML = oUser;
    var oTd4 = document.createElement('td');
    oTd4.innerHTML = oPwd;
    var oTd5 = document.createElement('td');
    oTd5.innerHTML = oBirth;
    var oTd6 = document.createElement('td');
    oTd6.innerHTML = oAddre;
    var oTd8 = document.createElement('td');
    oTd8.innerHTML = oYear;
    var oTd9 = document.createElement('td');
    oTd9.innerHTML = oAge;
    var oTd7 = document.createElement('td');
    var oInput2 = document.createElement('input');
    var oInput3 = document.createElement('input');
    oInput2.setAttribute('type','button');
    oInput2.setAttribute('value','删除');
    oInput2.setAttribute('onclick','del(this)');
    oInput2.className = 'btn btn-danger';
    oInput3.setAttribute('type','button');
    oInput3.setAttribute('value','修改');
    oInput3.setAttribute('onclick','modify(this)');
    oInput3.setAttribute('data-toggle','modal');
    oInput3.setAttribute('data-target','#myModal');
    oInput3.className = 'btn btn-info';
    oTd7.appendChild(oInput2);
    oTd7.appendChild(oInput3);
    oTr.appendChild(oTd1);
    oTr.appendChild(oTd2);
    oTr.appendChild(oTd3);
    oTr.appendChild(oTd4);
    oTr.appendChild(oTd5);
    oTr.appendChild(oTd6);
    oTr.appendChild(oTd8);
    oTr.appendChild(oTd9);
    oTr.appendChild(oTd7);
    
    var olistTable = document.getElementById('listTable');
    console.log(oTr)
    olistTable.appendChild(oTr);
}

function del(obj){
    rowIndex = obj.parentNode.parentNode.rowIndex;  
    console.log("rrrrowIndex",rowIndex)
    students.splice(rowIndex - 2, 1);
    console.log(students);
    var oParentnode = obj.parentNode.parentNode;
    var olistTable = document.getElementById('listTable');
    olistTable.removeChild(oParentnode);
    
}

function checkAll(c){
    var status = c.checked;
    var oItems = document.getElementsByName('item');
    for(var i=0;i<oItems.length;i++){
        oItems[i].checked=status;
    }
}
//delAll功能
function delAll(){
    var olistTable = document.getElementById('listTable');
    var items = document.getElementsByName("item");
    for(var j=0;j<items.length;j++){    
        if(items[j].checked)//如果item被选中
        {
            var oParentnode = items[j].parentNode.parentNode;console.log("oParentnode:"+oParentnode.rowIndex);
            students.splice(oParentnode.rowIndex - 2, 1);
            olistTable.removeChild(oParentnode);
            j--;
        }
    }
    console.log(students);
}
function modify(obj){
    console.log("obj", obj)
    var oNum = document.getElementById('num');
        var oUser = document.getElementById('username');
        var oPwd = document.getElementById('pwd');
        var oBirth = document.getElementById('birth');
        var oAddre = document.getElementById('addre');
        var oYear = document.getElementById('year');
        var oAge = document.getElementById('age');

        var oTr = obj.parentNode.parentNode;
        var aTd = oTr.getElementsByTagName('td');
        rowIndex = obj.parentNode.parentNode.rowIndex;  
        oNum.value = aTd[1].innerHTML;
        oUser.value = aTd[2].innerHTML;
        oPwd.value = aTd[3].innerHTML;
        oBirth.value = aTd[4].innerHTML;
        oAddre.value = aTd[5].innerHTML;
        oYear.value =  aTd[6].innerHTML;
        oAge.value = aTd[7].innerHTML;
        console.log(aTd[4].innerHTML);
     
        console.log("rrrrowIndex",rowIndex)
    // var table = document.getElementById("listTable");
    // var child = table.getElementsByTagName("tr")[this.index + 1];
    // var oNum = document.getElementById('num').value;
    // var oUser = document.getElementById('username').value;
    // var oPwd = document.getElementById('pwd').value;
    // var oBirth = document.getElementById('birth').value;
    // var oAddre = document.getElementById('addre').value;
    // var oYear = document.getElementById('year').value;
    // var oAge = document.getElementById('age').value;

    // var oTr = document.createElement('tr');
    // var oTd1 = document.createElement('td');
    // var oInput = document.createElement('input');
    // console.log(oAge);

    
    
    //alert(i);

}
//更新功能
function update(){
    var oNum = document.getElementById('num');
    var oUser = document.getElementById('username');
    var oPwd = document.getElementById('pwd');
    var oBirth = document.getElementById('birth');
    var oAddre = document.getElementById('addre');
    var oYear = document.getElementById('year');
    var oAge = document.getElementById('age');
    var oMytable = document.getElementById('mytable');
    //alert(rowIndex);
    //var aTd = rowIndex.cells;
    console.log(oMytable.rows[rowIndex].cells)
    oMytable.rows[rowIndex].cells[1].innerHTML = oNum.value;
    oMytable.rows[rowIndex].cells[2].innerHTML = oUser.value;
    oMytable.rows[rowIndex].cells[3].innerHTML = oPwd.value;
    oMytable.rows[rowIndex].cells[4].innerHTML = oBirth.value;
    oMytable.rows[rowIndex].cells[5].innerHTML = oAddre.value;
    oMytable.rows[rowIndex].cells[6].innerHTML = oYear.value;
    oMytable.rows[rowIndex].cells[7].innerHTML = oAge.value;
}

display();
//搜索功能
function search() {
    // 声明变量 
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    tr = document.getElementsByTagName('tr');

    // 循环所有列表，查找匹配项 
    for (i = 0; i < students.length; i++) {
        
        if (students[i].toWatchString().toUpperCase().indexOf(filter) > -1) {
            tr[i+2].style.display = "";
        } else {
            tr[i+2].style.display = "none";
        }
    }
}