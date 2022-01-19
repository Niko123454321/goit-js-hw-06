const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', symbolCheck);
function symbolCheck() {
    const correctLength = this.dataset.length;
    const inputDataLength = this.value.length;
      if (correctLength == inputDataLength) {
    this.style.borderColor = "#4caf50";
  } else {
    this.style.borderColor = "#f44336";
  }
}