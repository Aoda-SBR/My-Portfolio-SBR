const lazyLoading = () => {
    //  Selecting lazyimages
    const lazyImages = document.querySelectorAll ('.lazy');
    
    // function of Observe the view port
    const observer = new IntersectionObserver((entries, observer) => {  // Syntax of Observation method
        entries.forEach(entry => {
            if (entry.isIntersecting) {     // Condition of isIntersecting
                var reloadBtn = document.querySelector('.reload-btn');
                reloadBtn.style.display = "flex";
                let img = entry.target;     // Store the observing image to img-variable
                img.src = img.dataset.src;  // Change the image, placeholder to OriginalImage
                img.classList.remove('loading');  // Remove the loading class, it is used for remove blur and grayscale
                img.classList.add('loaded');    // Add the loaded class, it is used for add the blur and grayscale
                observer.unobserve(img);   // Remove Observe
            }
        });
    });

    lazyImages.forEach(img => {
        observer.observe(img);  // Take Observe
    });
};

// EXPORT LAZYLOADING FUNCTION TO MAIN.JS
export default lazyLoading;