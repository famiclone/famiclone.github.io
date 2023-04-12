const defaultTheme = 'stars';
const cDate = document.querySelector('#cDate');

cDate.innerText = `2022 - ${new Date().getFullYear()}`;
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
