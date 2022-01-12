const defaultTheme = 'stars';

function themeSwitch(name) {
  document.body.setAttribute('data-theme', name);
}

const positionEl = document.querySelector('#position');
positionEl.addEventListener('mouseover', () => {
  themeSwitch('matrix');
});
positionEl.addEventListener('mouseleave', () => {
  themeSwitch(defaultTheme);
});
