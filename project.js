const navToggle = document.querySelector('nav.fa-bars');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const links = document.querySelectorAll('nav .nav-links li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
const images = document.querySelectorAll('.trending div img, .stories div img');
const modal = document.createElement('div');
const modalImg = document.createElement('img');

modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '1000';

modal.appendChild(modalImg);
document.body.appendChild(modal);

images.forEach(image => {
    image.addEventListener('click', () => {
        modalImg.src = image.src;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
const elementsToShow = document.querySelectorAll('.fade-in');

const showElements = () => {
    const windowHeight = window.innerHeight;
    elementsToShow.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', showElements);
showElements(); // To check on page load
const form = document.querySelector('.search-bar form');
const locationInput = document.querySelector('.location-input');

form.addEventListener('submit', (e) => {
    if (locationInput.value.trim() === '') {
        e.preventDefault();
        alert('Please enter a location');
    }
});
