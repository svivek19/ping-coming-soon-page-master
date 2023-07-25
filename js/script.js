const inputEl = document.querySelector('input');
const errMsg = document.querySelector('.err-msg');
const btnEl = document.querySelector('button');
const formEl = document.querySelector('form');

errMsg.style.display = "none";

formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    if(inputEl.value == ""){
        errMsg.style.display = "block";
        setTimeout(()=>{
            errMsg.style.display ="none";
        },1000)
    } else{
        alert("Email address added!");
    }
})

