let input=document.getElementById("input");
let showmsg=document.querySelector(".showinp");
const btn=document.getElementById("button");
const errormsg=document.querySelector(".error");

btn.addEventListener('click',()=>{
    if(input.value==""){
        errormsg.classList.add('show');
        
        setTimeout(() => {
            errormsg.classList.remove('show');
        }, 3000);
    }else{
        showmsg.innerHTML=input.value;
        input.value="";
    }

})