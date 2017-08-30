(function() {

var items = document.querySelectorAll(".topDescItems h1 a"),
        topNav = document.querySelectorAll("ul.topNav li span");

function clear(nodeList) {
    for(let i=0; i<nodeList.length; i++) {
        nodeList[i].className = "";
    }
}

function makeArr(nodeList) {
    var arr = [];
    for(let i=0; i<nodeList.length; i++) {
        arr.push(nodeList[i]);
    }
    return arr;
}

function active(e) {
    clear(topNav);

    var itemsArr = makeArr(items),
        index = itemsArr.indexOf(e.target);

   topNav[index].className = "active";
}

for(item of items) {
    item.addEventListener("click", active, false);
}
})();