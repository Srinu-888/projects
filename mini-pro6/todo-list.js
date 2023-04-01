const input=document.querySelector("#input-box input");
const button=document.querySelector("#input-box button");
const addtolist=document.getElementById("task-list");
const count=document.getElementById("count");
const clearAll=document.querySelector("#footer button");
let task_counter=0;
button.addEventListener("click",()=>{
    let input_text=input.value;
    if(input_text==""){
        alert("Please enter something");
    }else{
        let li=document.createElement("li");
        li.classList.add('remove-btn');
        li.innerHTML=`<span>${input_text}</span><i class="fa-solid fa-trash"></i>`
        let pos=addtolist.firstElementChild;
        if (pos==null) {
            addtolist.appendChild(li);
            task_counter++;
        } else {
            addtolist.insertBefore(li,pos);
            task_counter++;
        }
      input.value="";      
      //delting the required li element by dlte button
      let btn=document.querySelector("li i");
      btn.addEventListener("click",(e)=>{
        let remove_btn=e.target.parentNode;
        addtolist.removeChild(li);
        task_counter--;
      })    
    }
})
clearAll.addEventListener('click',()=>{
    while (addtolist.firstElementChild!=0) {
        addtolist.removeChild(addtolist.firstElementChild);
        task_counter=0;
    }
})
setInterval(()=>{
    count.innerHTML=task_counter
},100);