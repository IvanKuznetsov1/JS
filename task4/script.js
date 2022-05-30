const userText = document.querySelector('h3');
userText.addEventListener('click',(event)=>{
    userText.textContent = prompt('введите текст');
    event.preventDefault();
});