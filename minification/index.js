/* get buttons */
const firstDiv = document.querySelector('.first');
const btnHide = document.getElementById('hideFirst');
const btnShow = document.getElementById('showFirst');

/* add event handler, handler is specified later */
btnHide.addEventListener('click', () => {
  firstDiv.remove();
});
/* click event handler */
btnShow.addEventListener('click', () => {
  if (!document.querySelector('.first')) {
    const div = document.createElement('div');
    div.classList.add('first');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'First <code>div</code> element';
    div.appendChild(paragraph);
    const main = document.getElementById('main');
    main.insertBefore(div, main.firstChild);
  }
});
