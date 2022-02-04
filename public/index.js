(() => {
  // index.js
  var mount = document.querySelector(".js-aem-microfrontend-mount");
  var element = document.createElement("h1");
  element.textContent = "Hey mister!";
  mount.append(element);
})();
