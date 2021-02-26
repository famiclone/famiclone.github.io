const themeSwitcher = document.querySelector('#themeSwitch')

let isDarkTheme = JSON.parse(window.localStorage.getItem('dark-theme'))

if (isDarkTheme === null) {
  isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
}

console.log(isDarkTheme)

if (isDarkTheme) {
  console.log('SWITCH TO DARK')
  document.querySelector('html').setAttribute('data-theme', 'dark')
} else {
  console.log('SWITCH TO LIGHT')
  document.querySelector('html').setAttribute('data-theme', 'light')
}


themeSwitcher.onchange = ({target: {checked}}) => {
  document.querySelector('html').setAttribute('data-theme', checked ? 'dark' : 'light')
  window.localStorage.setItem('dark-theme', checked)
}

themeSwitcher.checked = isDarkTheme