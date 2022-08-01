const renderImage = () => {
  let maxParts = 1;
  let renderString = '';
  do {
    renderString += `<img style="padding: 1px 2px 1px 2px; width: 53px; height: 40px" src='imgs/image_part_${String(
      maxParts
    ).padStart(3, '0')}.jpg' />`;
    maxParts++;
  } while (maxParts <= 225);
  return renderString;
};

document.querySelector('#app').innerHTML = `
<h1>Requested via ${
  performance.getEntriesByName(window.location)[0].nextHopProtocol
}</h1>
<h1 id="done"></h1>
<h2>Duration: <span id="duration">Measuring ...</span></h2>
<div style="width: 860px;">${renderImage()}</div>`;
