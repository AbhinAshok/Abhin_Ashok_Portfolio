'use strict';

/**
 * element toggle function
 */
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});


/*
*
*/

/**
 * Profile Picture Modal Functionality
 */

/*
function openProfileModal() {
  const modal = document.getElementById('profileModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProfileModal() {
  const modal = document.getElementById('profileModal');
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeProfileModal();
  }
});

// Initialize profile picture functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add click event to profile picture if not already in HTML
  const profileContainer = document.querySelector('.profile-picture-container');
  if (profileContainer && !profileContainer.hasAttribute('onclick')) {
    profileContainer.addEventListener('click', openProfileModal);
  }
});
*/




/**
 * skills toggle
 */
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);
  });
}

/**
 * dark & light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */
if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * Set background video to slow motion (0.25x speed)
 */
const setVideoSlowMotion = function () {
  const video = document.getElementById("backgroundVideo");
  
  // Check if video element exists
  if (!video) {
    console.error("Video element with ID 'backgroundVideo' not found");
    return;
  }
  
  // Set video to play at 0.25x speed (slow motion)
  video.playbackRate = 0.25;
  console.log("Video playback rate set to 0.25x slow motion");
  
  // Ensure video keeps playing in slow motion if it reloads
  video.addEventListener('loadstart', function() {
    this.playbackRate = 0.25;
  });
};

/**
 * Initialize everything when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  // Set video to slow motion
  setVideoSlowMotion();
  
  // Animate progress bars if they exist
  const progressFills = document.querySelectorAll(".progress-fill");
  if (progressFills.length > 0) {
    progressFills.forEach(fill => {
      const width = fill.style.width;
      fill.style.width = "0";
      setTimeout(() => {
        fill.style.width = width;
      }, 300);
    });
  }
});