// Mobile Navigation Bar Open & Close Function
const mobileNav = () => {
    const headerBar = document.querySelector ('.header__bars');
    const mobileNav = document.querySelector ('.mobile-nav');
    const xMark = document.querySelector ('.dis-xmark');
    const bars = document.querySelector ('.dis-bars');
    const mobilelinks = document.querySelectorAll ('.mobile-nav__link');
    // slot
    let isMobileNavOpen = false;
    
    // bars click event
    headerBar.addEventListener ('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNav.style.display = "flex"; 
            document.body.style.overflowY = "hidden";
            bars.style.display = "none";
            xMark.style.display = "block";
        }
        else {
            mobileNav.style.display = "none"; 
            document.body.style.overflowY = "auto";
            bars.style.display = "block";
            xMark.style.display = "none";
        }
    });

    // mobile Navigation links click event
    mobilelinks.forEach (link => {
        link.addEventListener ('click', () => {
            isMobileNavOpen = false;

            mobileNav.style.display = "none";
            document.body.style.overflowY = "auto";
            bars.style.display = "block";
            xMark.style.display = "none";
        });
    });

};

//export function to main.js 
export default mobileNav;