// final.js
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileOverlay = document.getElementById('mobile-overlay');

// Function to close the menu
const closeMenu = () => {
  mobileNav.classList.remove('open');
  hamburgerBtn.classList.remove('is-active');
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = ''; // Re-enable scrolling
}

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileNav.classList.contains('open');
  
  if (isOpen) {
    closeMenu();
  } else {
    mobileNav.classList.add('open');
    hamburgerBtn.classList.add('is-active');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Disable scrolling
  }
});

// Close menu when a link is clicked
document.querySelectorAll('.mobile-links a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close menu when overlay is clicked
mobileOverlay.addEventListener('click', closeMenu);

// Close menu if window is resized above tablet breakpoint while open
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
    closeMenu();
  }
});



 document.addEventListener('DOMContentLoaded', () => {
            const playButton = document.getElementById('playButton');
            const videoOverlay = document.getElementById('videoOverlay');
            const videoIframe = document.getElementById('videoIframe');
            const videoSource = "https://www.youtube.com/embed/cpoXLj24BDY?autoplay=1&mute=0&controls=1";


            if (playButton) {
                playButton.addEventListener('click', () => {
                    videoIframe.src = videoSource;
                    videoOverlay.style.opacity = '0';
                    setTimeout(() => {
                        videoOverlay.style.display = 'none'; 
                        videoIframe.style.display = 'block'; 
                    }, 500); 
                });
            }
        });

document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.getElementById('accordion');
  const items = accordion.querySelectorAll('.accordion-item');

  function toggleContent(item, open) {
    const content = item.querySelector('.accordion-item__content');
    const iconSpan = item.querySelector('.header__icon');

    if (open) {
      item.classList.add('is-open');
      content.style.maxHeight = content.scrollHeight + 44 + 'px';
      iconSpan.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 13H5v-2h14v2z"/>
                            </svg>`; // minus
    } else {
      item.classList.remove('is-open');
      content.style.maxHeight = '0';
      iconSpan.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            </svg>`; // plus
    }
  }

  items.forEach(item => {
    const header = item.querySelector('.accordion-item__header');
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all items
      items.forEach(other => toggleContent(other, false));

      // Open clicked item if it was closed
      if (!isOpen) toggleContent(item, true);
    });
  });

  // Open first item by default with correct minus SVG
  toggleContent(items[0], true);
});
