(function () {
  const style = document.createElement("style");
  style.textContent = `
    #blacklisted-sidebar {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
    }
  `;
  document.documentElement.appendChild(style);
})();
