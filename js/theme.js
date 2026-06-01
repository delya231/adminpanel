(function () {
    const htmlEl = document.documentElement;
    const themeToggle = document.querySelectorAll('.themeToggle');

    function setTheme(isDark) {
        if (isDark) {
            htmlEl.setAttribute('data-bs-theme', 'dark');
            themeToggle.forEach(toggle => {
                toggle.checked = true;
            });
        } else {
            htmlEl.setAttribute('data-bs-theme', 'light');
            themeToggle.forEach(toggle => {
                toggle.checked = false;
            });
        }
        localStorage.setItem('adminTheme', isDark ? 'dark' : 'light');
    }

    const savedTheme = localStorage.getItem('adminTheme');
    if (savedTheme === 'dark') {
        setTheme(true);
    } else if (savedTheme === 'light') {
        setTheme(false);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
    }

    themeToggle.forEach((toggle) => {
        toggle.addEventListener('change', (e) => {
            setTheme(e.target.checked);
        });
    });
})();