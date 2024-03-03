/* ==========================================  stars background  ========================================== */
function stars() {
    let count = 30;
    const starsContainer = document.getElementById('stars');

    if (window.innerWidth <= 576) {
        count = 10; // Change the star count for mobile view
    }

    function createStar() {
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * (window.innerWidth - 20));
        const y = Math.floor(Math.random() * (window.innerHeight - 20));
        const size = 4; //Math.random() * 5;
        star.style.left = x + 'px'; //Math.random() * 100 + '%';
        star.style.top = y + 'px'; //Math.random() * 100 + '%';
        star.style.height = 1 + size + 'px';
        star.style.width = star.style.height;
        star.style.animationDuration = (Math.random() * 2) + 2 + 's';
        starsContainer.appendChild(star);
    }

    function updateStars() {
        const starContainers = document.querySelectorAll('#stars i');
        for (let i = 0; i < starContainers.length; i++) {
            starsContainer.removeChild(starContainers[i]);
        }
        for (let i = 0; i < count; i++) {
            createStar();
        }
    }

    // Initial creation of stars
    updateStars();

    // Add event listener for window resize
    window.addEventListener('resize', updateStars);

}
stars();

/* ==========================================  show more projects and less projects  ========================================== */
document.addEventListener("DOMContentLoaded", function () {
    const showHideButton = document.getElementById("showHideButton");
    const hiddenProjects = document.querySelectorAll(".projectBox.hidden");
    let projectsVisible = false;

    // Function to toggle the visibility of hidden projects
    function toggleHiddenProjects() {
        hiddenProjects.forEach((project) => {
            project.classList.toggle("hidden");
        });

        // Update button text based on visibility
        if (projectsVisible) {
            showHideButton.textContent = "Show More Projects";
        } else {
            showHideButton.textContent = "Show Less Projects";
        }

        projectsVisible = !projectsVisible;
    }

    // Add a click event listener to the "Show More" button
    showHideButton.addEventListener("click", toggleHiddenProjects);
});

/* ==========================================  navlist toggle button  ========================================== */
const toggleButton = document.querySelector(".toggleButton");
const navList = document.querySelector(".navList");
let navListOpen = false;

toggleButton.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        if(!navListOpen){
            navList.style.display = "flex";
            navListOpen = true;
            toggleButton.children[0].src = "Images/cross.png";
        } else{
            navList.style.display = "none";
            navListOpen = false;
            toggleButton.children[0].src = "Images/menuBar.svg";
        }
    }
});

// navList.addEventListener("click", () => {
//     if (window.innerWidth <= 768) {
//         if(navListOpen){
//             navList.style.display = "none";
//             navListOpen = false;
//         }
//     }
// });

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none";
        navListOpen = false;
    }
});


/* ==========================================  scroll-to-top button  ========================================== */
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    // Check if the URL has a fragment identifier
    if (window.location.hash) {
        // If it does, reset the URL without the fragment identifier
        history.replaceState(null, null, window.location.pathname + window.location.search);
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});


/* ========================================== header box shadow after scrolling past 100vh  ========================================== */
// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     if (window.scrollY >= 200) {
//         header.style.boxShadow = '0 10px 30px -10px #020c1bb3';
//     } else {
//         header.style.boxShadow = 'none';
//     }
// });