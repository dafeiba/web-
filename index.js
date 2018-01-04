function addList(){
    var oNum = document.getElementById('num').value;
    var oUser = document.getElementById('username').value;
    var oPwd = document.getElementById('pwd').value;
    var oBirth = document.getElementById('birth').value;
    var oAddre = document.getElementById('addre').value;
    var oYear = document.getElementById('year').value;
    var oAge = document.getElementById('age').value;

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
    olistTable.appendChild(oTr);
}

function openpage(htmlurl) 
{
    var newwin=window.open(htmlurl,"newWin");
    newWin.focus();
    return false;
}