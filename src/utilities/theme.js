const themeToggle = () => {
    // Selecting header__sun & mobile-nav__sun
    const themeBtn = document.querySelectorAll('#theme-btn');

    // state
    const theme = localStorage.getItem('theme'); 

    // condition
    theme && document.body.classList.add(theme);

    // Handler
    const handleToggleTheme = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } 
        else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class')
        }
    };

    // Event
    themeBtn.forEach (btn => {
        btn.addEventListener('click', () =>
            handleToggleTheme(),
        );
    });
};

// export function to main.js
export default themeToggle;