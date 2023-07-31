function main() {
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

  const ufo1 = document.querySelector("#ufo1");
  const pageContentWidth = document.body.offsetWidth - 300;
  const pageContentHeight = document.body.offsetHeight;
  ufo1.style.position = 'absolute';

  console.log(pageContentWidth);

  let ufo1State = {
    pos: {
      x: 0,
      y: 0
    },
    vel: {
      x: 1,
      y: 1
    },
    speed: 20
  }
  const interval = setInterval(() => {
    ufo1State.pos.x += 1 * ufo1State.vel.x;
    ufo1State.pos.y += 0.5 * ufo1State.vel.y;

    if (ufo1State.pos.x > pageContentWidth) {
      ufo1State.vel.x = -1;
    }
    if (ufo1State.pos.x < 0) {
      ufo1State.vel.x = 1;
    }

    if (ufo1State.pos.y > pageContentHeight) {
      ufo1State.vel.y = -1;
    }
    if (ufo1State.pos.y < 0) {
      ufo1State.vel.y = 1;
    }

    ufo1.style.left = `${ufo1State.pos.x}px`
    ufo1.style.top = `${ufo1State.pos.y}px`
  }, 50 / ufo1State.speed)
}

main();
