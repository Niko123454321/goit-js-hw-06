const inputFontSizeControlEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');
inputFontSizeControlEl.addEventListener('input', (event) => {    
    textEl.style.fontSize = event.currentTarget.value + "px";
});