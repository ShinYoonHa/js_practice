var itemList= [];

var addBtn = document.querySelector('#add');
addBtn.addEventListener("click", addList);

function addList() {
    var item = document.querySelector('#item').value;
    if (item != null) {
        itemList.push(item);
        document.querySelector('#item').value = "";
        document.querySelector('#item').focus();
        showList();
    }
}

function showList() {
    var list = "<ul>";
    for(var i=0; i<itemList.length; i++) {
        list += "<li>" + itemList[i] +
        "<span class='close' id=" + i + ">X</span></li>";
    }
    document.querySelector('#itemList').innerHTML = list+"</ul>"

    var remove = document.querySelectorAll(".close");
    for(var i=0; i<remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    var id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList(); //새로고침 하기위해 한 번더 showList 실행
}