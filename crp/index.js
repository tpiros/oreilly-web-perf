const timer = document.createElement('div');
timer.innerText = `Page was loaded at ${new Date().toISOString()}`;
timer.style.color = 'green';
document.body.appendChild(timer);
