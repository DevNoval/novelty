const navbarId = document.getElementById('navbarId');
const menuBar = document.getElementById('menuBar');
const headerLogo = document.getElementById('headerLogo');
const scrollBtn = document.getElementById('scrollBtn');

function toggleNavbar() {
  navbarId.classList.toggle('show');
  headerLogo.style.opacity = navbarId.classList.contains('show') ? 0 : 1;
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}`;

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = now.getDate();
  const months = now.getMonth()+1;
  const years = now.getFullYear();
  const days = now.getDay();
  const dayName = daysOfWeek[days];
  const dateString = `${dayName} ${date}/${months}/${years}`

  document.getElementById('clock').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

menuBar.addEventListener('click', toggleNavbar);
scrollBtn.addEventListener('click', topFunction);