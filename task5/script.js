var userText = document.querySelector('#inputText');
var textShow = document.querySelector('#duplicateField');
var Buttom = document.querySelector('#clearText');
userText.addEventListener('keyup',(event)=>{
    textShow.textContent=userText.value;
});
Buttom.addEventListener('click',(event)=>{
    console.log(userText.value);
    userText.value = "";
    textShow.textContent = "";
});
