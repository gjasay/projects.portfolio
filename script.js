// Get navigation items
const allProjectsTab = document.getElementById('all-projects-tab');
const javascriptProjectsTab = document.getElementById('javascript-projects-tab');
const unityCsharpProjectsTab = document.getElementById('unity-csharp-projects-tab');

// Get project sections
const projects = Array.from(document.getElementsByClassName('project'));

let currentImageIndex = 0;

// Function to display projects based on type
function displayProjects(type) {
    for (let project of projects) {
        if (project.getAttribute('data-type') === type || type === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    }
}

// Add click event listeners
allProjectsTab.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.hash = 'all';
    displayProjects('all');
});

javascriptProjectsTab.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.hash = 'javascript';
    displayProjects('javascript');
});

unityCsharpProjectsTab.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.hash = 'unity-csharp';
    displayProjects('unity-csharp');
});

// Display projects based on current hash when page loads
window.onload = function() {
    const hash = window.location.hash;
    if (hash === '#javascript') {
        displayProjects('javascript');
    } else if (hash === '#unity-csharp') {
        displayProjects('unity-csharp');
    } else {
        displayProjects('all');
    }
};

projects.forEach(project => {
    const images = project.querySelectorAll('.project-image');
    if (images.length > 1) {
        setInterval(() => {
            currentImageIndex++;
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            const amountToMove = currentImageIndex * images[0].clientWidth;
            images.forEach(image => {
                image.style.transform = `translateX(-${amountToMove}px)`;
            });
        }, 3000); // Change image every 3 seconds
    }
});