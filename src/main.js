import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/reload.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

// javascript import files
import mobileNav from './utilities/mobile-nav';
import themeToggle from './utilities/theme';
import lazyLoading from './utilities/lazy-loading';

// function call
mobileNav();
themeToggle();
lazyLoading();