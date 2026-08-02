// scatter map pins
const map = document.getElementById('map');
if (map) {
  const pins = [[20,30],[35,20],[50,15],[65,25],[78,35],[30,45],[48,40],[62,48],[75,55],[25,60],[40,68],[55,62],[68,70]];
  pins.forEach(([x,y])=>{
    const p = document.createElement('div');
    p.className='map-pin';
    p.style.left = x+'%';
    p.style.top = y+'%';
    map.appendChild(p);
  });
}

// mobile burger toggle
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', ()=>{
    document.querySelector('nav').classList.toggle('mobile-open');
  });
}

// active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', ()=>{
  let current = '';
  sections.forEach(sec=>{
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#'+current);
  });
});