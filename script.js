// Get navigation items
const allProjectsTab = document.getElementById('all-projects-tab');
const javascriptProjectsTab = document.getElementById('javascript-projects-tab');
const unityCsharpProjectsTab = document.getElementById('unity-csharp-projects-tab');

// Get project sections
const projects = document.getElementsByClassName('project');

// Add click event listeners
allProjectsTab.addEventListener('click', function(e) {
    e.preventDefault();
    for (let project of projects) {
        project.style.display = 'block';
    }
});

javascriptProjectsTab.addEventListener('click', function(e) {
    e.preventDefault();
    for (let project of projects) {
        if (project.getAttribute('data-type') === 'javascript') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    }
});

unityCsharpProjectsTab.addEventListener('click', function(e) {
    e.preventDefault();
    for (let project of projects) {
        if (project.getAttribute('data-type') === 'unity-csharp') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    }
});