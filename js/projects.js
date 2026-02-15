document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');
    const currentSpan = document.getElementById('current-project');
    const totalSpan = document.getElementById('total-projects');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalProjects = projects.length;

    if (totalSpan) {
        totalSpan.textContent = totalProjects;
    }

    function showProject(index) {
        if (index < 0) index = 0;
        if (index >= totalProjects) index = totalProjects - 1;

        projects.forEach(project => {
            project.classList.remove('active');
        });

        projects[index].classList.add('active');

        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        if (currentSpan) {
            currentSpan.textContent = index + 1;
        }

        currentIndex = index;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            showProject(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            showProject(currentIndex + 1);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showProject(index);
        });
    });

    showProject(0);
});
