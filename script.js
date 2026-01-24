const scrollBtn = document.getElementById('scrollBtn');
const menuBtn = document.getElementById('menuBars');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const themeBtn = document.getElementById('themeBtn');

// Local Storage
function userPreferences() {
    localStorage.setItem("user_prefs", JSON.stringify({
	theme: document.body.classList.contains("theme-light")? "light" : "dark"
    }));
}

function loadPreferences() {
    try {
	const preferences = JSON.parse(localStorage.getItem("user_prefs"));
	if (!preferences) return;
	document.body.classList.toggle("theme-light", preferences.theme === "light");
    themeBtn.textContent = preferences.theme === "light" ? "🌙 Dark" : "☀️ Light";
    } catch (error) {console.error("Gagal load prefs:", error); }
}

// Hamburger button
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("active");
});

//closeBtn.addEventListener("click", (e) => {
//    sidebar.classList.remove("active");
//})

document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
    }
});

// Clock program
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

// Scroll button
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

scrollBtn.addEventListener('click', topFunction);

// Theme Switcher
function toggleTheme() {
    document.body.classList.toggle('theme-light');
    themeBtn.textContent = document.body.classList.contains('theme-light') ? '🌙 Dark' : '☀️ Light';
    userPreferences();
}

themeBtn.addEventListener('click', toggleTheme);
window.addEventListener("DOMContentLoaded", async () => {
    loadPreferences();
});
