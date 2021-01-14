
// var deleteAll=document.getElementById('deleteAllto');
// deleteAll.onclick=deleteAllToDo;


// var list=document.getElementById('list');

// function addTo(){
//     var todoText=document.getElementById('todoText');
//     if(todoText.value.trim()){
//         var listItem=document.createElement('li');
// var listItemId=listItem.childNodes.length;
// listItem.setAttribute('id',listItemId);
// var editBtn=document.createElement('button');
// var deleteBtn=document.createElement('button');
// editBtn.innerText="Edit";
// deleteBtn.innerText="delete"
// editBtn.onclick=function(){
//     return editListItem(listItemId);
// };
// deleteBtn.onclick=function(){
//     return deleteListItem(listItemId);
// };

//     }
//   listItem.innerText=todoText.value;
//     list.appendChild(listItem)
// listItem.appendChild(editBtn);
// listItem.appendChild(deleteBtn);
// todoText.value="";

// }


var list=document.getElementById('list');


function add(){
    var todoItem=document.getElementById('todoText');
  
    var li=document.createElement('li');
    var toDoText=document.createTextNode(todoItem.value);
     
    li.appendChild(toDoText);
list.appendChild(li)

var editBtn=document.createElement('button');
var editBtnText=document.createTextNode('EditBtn');
editBtn.appendChild(editBtnText)
li.appendChild(editBtn);

    
 editBtn.setAttribute("class","len")
editBtn.setAttribute("onclick","editItem(this)") 


console.log(li)


var deleteBtn=document.createElement('button');
deleteBtn.innerText="Delete"
li.appendChild(deleteBtn)
deleteBtn.setAttribute("class","len1")
deleteBtn.setAttribute("onclick","deleteItem(this)");

console.log(li)

todoItem.value=""
    
}

function deleteItem(parameter){
    parameter.parentNode.remove();
}

function editItem(editPara){

    var value=editPara.parentNode.firstChild.nodeValue;
    var update=prompt("Edit a text",value);
    editPara.parentNode.firstChild.nodeValue=update;
}

function deleteAll(){
    list.innerHTML=""
}















