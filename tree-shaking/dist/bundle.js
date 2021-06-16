function cube(x) {
  return x * x * x;
}

function mainModule() {
  const element = document.createElement('div');

  element.innerHTML = `The final results is: ${cube(5)}`;

  return element;
}

function neverCallMe() {
  return 'no, really, never!';
}

document.body.appendChild(mainModule(), neverCallMe());
