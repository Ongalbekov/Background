changeBackground=(r)=>{
    let red=document.querySelector('#red').value;
    let green=document.querySelector('#green').value;
    let blue=document.querySelector('#blue').value;
        
    document.body.style.backgroundColor= "rgb("+red+", "+green+", "+blue+")";
    document.querySelector('#rgb').textContent="rgb("+red+", "+green+", "+blue+")";
    }