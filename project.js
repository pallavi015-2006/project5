document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.fa-bars');
    const navLinks = document.querySelector('nav .nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('hidemenu');
    });
});


document.querySelectorAll('nav .nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.search-bar form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.querySelector('.location-input').value.toLowerCase();
    // Implement your search logic here, e.g., filter displayed items based on the query
    console.log('Searching for:', query);
});
let currentIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.trending div img');
    images[currentIndex].style.display = 'none'; // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Update index
    images[currentIndex].style.display = 'block'; // Show next image
}

// Automatically change images every 3 seconds
setInterval(showNextImage, 3000);
async function loadStories() {
    const response = await fetch('https://api.example.com/stories'); // Replace with your API
    const stories = await response.json();
    const storiesContainer = document.querySelector('.stories');

    stories.forEach(story => {
        const storyDiv = document.createElement('div');
        storyDiv.innerHTML = `<img src="${story.image}" alt="${story.title}"><p>${story.description}</p>`;
        storiesContainer.appendChild(storyDiv);
    });
}

loadStories();