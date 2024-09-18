let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

 let currentSlide = 0;
        const itemsPerRow = 1; // Number of items to show per row
        const serviceItems = document.querySelectorAll('.service-item');
        const totalSlides = Math.ceil(serviceItems.length / itemsPerRow); // Total number of "slides" (pairs of images)
        const carousel = document.querySelector('.service-carousel');
        
        function moveSlide(direction) {
            currentSlide += direction;
        
            // Ensure currentSlide stays within bounds
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
        
            // Calculate width of a service item and translate the carousel
            const slideWidth = document.querySelector('.service-item').offsetWidth;
            carousel.style.transform = `translateX(-${currentSlide * slideWidth * itemsPerRow}px)`;
        }
        
        // Add window resize event listener to ensure proper carousel width on resize
        window.addEventListener('resize', () => {
            const slideWidth = document.querySelector('.service-item').offsetWidth;
            carousel.style.transform = `translateX(-${currentSlide * slideWidth * itemsPerRow}px)`;
        });


         // Get the button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show the button when the user scrolls down 300px from the top of the page
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // Scroll to the top of the page when the user clicks the button
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
