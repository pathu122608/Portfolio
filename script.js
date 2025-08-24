
const words = ["Cybersecurity Learner", "AI Enthusiast", "Web Developer", "Tech Problem-Solver"];
const el = document.getElementById('typed');

let wIndex = 0, charIndex = 0;
let typing = true;

function tick() {
  const word = words[wIndex];
  if (typing) {
    charIndex++;
    el.textContent = word.slice(0, charIndex);
    if (charIndex === word.length) {
      typing = false;
      setTimeout(tick, 1100); // pause on full word
      return;
    }
  } else {
    charIndex--;
    el.textContent = word.slice(0, charIndex);
    if (charIndex === 0) {
      typing = true;
      wIndex = (wIndex + 1) % words.length;
    }
  }
  setTimeout(tick, typing ? 100 : 60);
}

tick();










let menuIcon= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document .querySelectorAll('header nav a');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}