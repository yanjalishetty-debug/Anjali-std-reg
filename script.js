function addstudent() {
    let input = document.querySelector("#input");
    let name = input.value.trim();

    let li = document.createElement("li");   //Creating the list of elements for viewing the student list
    
    let span = document.createElement("span");
    span.innerText = name;

    let del = document.createElement("button");
    del.innerText = "DEL";

    let edit = document.createElement("button");
    edit.innerText = "edit";

    del.onclick = function(){
        li.remove();

    edit.onclick = function(){
        li.edit();
    }
    }

    li.appendChild(span);
    li.appendChild(del);

    document.querySelector("#list").appendChild(li);

    input.value='';
}