let btn=document.querySelectorAll('.num');
let oper_btn=document.querySelectorAll('.operations');
let clear=document.getElementById('clr');
let ans=document.getElementById('ans');
let inp=document.getElementById('input');
for (let i = 0; i < btn.length; i++) {
       btn[i].addEventListener('click',()=>{
        inp.value+=btn[i].innerHTML;
       })
    }
    for (let i = 0; i < oper_btn.length; i++) {
       oper_btn[i].addEventListener('click',()=>{
            inp.value+=oper_btn[i].innerHTML;
       })
    }
    clear.addEventListener('click',()=>{
        inp.value=null;
    })
    
    
    ans.addEventListener('click',()=>{
        inp.value=eval(inp.value);
    })