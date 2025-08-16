// let text = document.getElementById('text');
// let leaf = document.getElementById('leaf');
// let hill1 = document.getElementById('hill1');
// let hill4 = document.getElementById('hill4');
// let hill5 = document.getElementById('hill5');

// window.addEventListener('scroll', ()=>{
//     let value = window.scrollY;

//     text.style.marginTop = value * 2.5 + 'px';
//     leaf.style.top = value * -1.5 + 'px'
//     leaf.style.left = value * 1.5 + 'px'
//     hill5.style.left = value * 1.5 + 'px'
//     hill4.style.left = value * -1.5 + 'px'
//     hill1.style.top = value * 1 + 'px'
// });

// new code
// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Parallax adjustments for mobile (disable on touchscreens if needed)
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
  let text = document.getElementById('text');
  let leaf = document.getElementById('leaf');
  let hill1 = document.getElementById('hill1');
  let hill4 = document.getElementById('hill4');
  let hill5 = document.getElementById('hill5');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
  });
}
