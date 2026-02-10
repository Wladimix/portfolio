document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('current-year').innerHTML = new Date().getFullYear();

    const projects = document.querySelectorAll('.project');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');
    const dots = document.querySelectorAll('.dot');
    const currentProjectSpan = document.getElementById('current-project');
    const totalProjectsSpan = document.getElementById('total-projects');

    let currentProjectIndex = 0;
    totalProjectsSpan.textContent = projects.length;

    // Показ проекта по индексу
    function showProject(index) {
        // Проверка границы
        if (index < 0) index = projects.length - 1;
        if (index >= projects.length) index = 0;

        // Убрать все классы у проектов
        projects.forEach(project => {
            project.classList.remove('active');
            project.style.opacity = '0';
            project.style.visibility = 'hidden';
            project.style.transform = 'translateX(30px)';
        });

        // Убрать активный класс со всех точек
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Показать новый проект
        projects[index].classList.add('active');
        projects[index].style.opacity = '1';
        projects[index].style.visibility = 'visible';
        projects[index].style.transform = 'translateX(0)';

        dots[index].classList.add('active');

        // Обновить счетчик
        currentProjectSpan.textContent = index + 1;
        currentProjectIndex = index;
    }

    // Следующий проект
    nextBtn.addEventListener('click', function() {
        showProject(currentProjectIndex + 1);
    });

    // Предыдущий проект
    prevBtn.addEventListener('click', function() {
        showProject(currentProjectIndex - 1);
    });

    // Навигация по точкам
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showProject(index);
        });
    });

    // Инициализация первого проекта
    showProject(0);

    // Добавить проверку нажатия клавиш для навигации
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            showProject(currentProjectIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showProject(currentProjectIndex + 1);
        }
    });

    // Анимация для текста профиля
    gsap.from('.hero-content', {
        duration: 1.5,
        opacity: 0,
        x: -50,
        ease: 'power3.out',
        delay: 0.7
    });

    // Анимация для фото
    gsap.from('.profile-image', {
        duration: 1.8,
        opacity: 0,
        x: 100,
        scale: 0.9,
        ease: 'power3.out',
        delay: 0.5
    });
});
