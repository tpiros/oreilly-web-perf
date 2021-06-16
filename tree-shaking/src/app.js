import { cube } from './math.js';

function mainModule() {
  const element = document.createElement('div');

  element.innerHTML = `The final results is: ${cube(5)}`;

  return element;
}

function neverCallMe() {
  console.log('why?');
  return 'no, really, never!';
}

const resp = neverCallMe();
console.log(resp);

document.body.appendChild(mainModule());
