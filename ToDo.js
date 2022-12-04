document.querySelector("form").addEventListener("submit",todo);
function todo(event){
    event.preventDefault();
    let task_name = document.querySelector("#task").value;
    let task_priority = document.querySelector("#priority").value;
    console.log(task_name,task_priority);
    let tRow = document.createElement("tr");
    // 1st col
    let td1 = document.createElement("td");
    td1.innerText=task_name;
    //2nd col 
    let td2 = document.createElement("td");
    td2.innerText=task_priority;
    if(task_priority == "High"){
        td2.style.backgroundColor="red";
    }else{
        td2.style.backgroundColor="green";
    }
    // 3rd col
    let td3 = document.createElement("td");
    td3.innerText="Delete";
    td3.style.backgroundColor="black";
    td3.style.color="white";
    td3.addEventListener("click",deleteTodo);
    tRow.append(td1,td2,td3);
    document.querySelector("tbody").append(tRow);
}
function deleteTodo(event){
    console.log(event.target.parentNode);
    event.target.parentNode.remove()
}