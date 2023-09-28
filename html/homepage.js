// Function to handle slide visibility and apply active class
function slideObserverCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

// Intersection Observer for slides
const slideObserverOptions = {
  threshold: 0.1 
};

const slideObserver = new IntersectionObserver(slideObserverCallback, slideObserverOptions);
const slides = document.querySelectorAll('.slide');
slides.forEach(slide => slideObserver.observe(slide));

// Smooth scroll event listener for the social navigation
let socialNavVisible = false;

function smoothScroll() {
  var socialNav = document.querySelector(".social");
  var socialNavHeight = socialNav.offsetHeight;

  if (window.scrollY > socialNavHeight) {
    if (!socialNavVisible) {
      socialNavVisible = true;
      socialNav.classList.add("sticky");
    }
  } else {
    if (socialNavVisible) {
      socialNavVisible = false;
      socialNav.classList.remove("sticky");
    }
  }

  requestAnimationFrame(smoothScroll); // Call the function again on the next frame
}

smoothScroll(); // Start the smooth scroll function
