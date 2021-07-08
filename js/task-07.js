const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputRateChange = (event) =>{
  textEl.style.fontSize = event.target.value * 0.32 + 'px';
};

inputRangeEl.addEventListener('input', onInputRateChange);

const fontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
