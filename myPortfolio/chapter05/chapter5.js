var item1;
var item2;
var item3;
    
document.getElementById("changeList").onclick = newList;//invokes newList();

function newList(){
    item1 = prompt("Enter fisrt item");
    item2 = prompt("Enter second item");
    item3 = prompt("Enter third item");
    updateList();//updatedList invoked by newList();
}
function updateList() {
    document.getElementById("o").innerHTML = item1;
    document.getElementById("d").innerHTML = item2;
    document.getElementById("g").innerHTML = item3;
}