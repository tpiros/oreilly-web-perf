const pageLoadTime = {
  duration: 'Measuring...',
};

const pageLoadTimeProxy = new Proxy(pageLoadTime, {
  get: function (value) {
    console.log('proxy get', value);
    return value;
  },
  set: function (target, key, value) {
    target[key] = value;
    this.updateDom(value);
    return true;
  },
  updateDom: function (value) {
    document.getElementById('duration').innerHTML = `${value} ms`;
  },
});

const observer = new PerformanceObserver(function (list, obj) {
  const entries = list.getEntries();
  pageLoadTimeProxy.duration = `${Math.ceil(entries[0].duration)}`;
});
observer.observe({ entryTypes: ['navigation'] });
