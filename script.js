const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


window.onload = function() {
  Particles.init({
    selector: '.background',
    maxParticles: '85',
    color: '#0e3d69',
    connectParticles: true,
  });
};
