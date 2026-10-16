const carVideo = document.getElementById("carVideo");

// Play the car video once.
carVideo.loop = false;

// Keep the final video frame when playback ends.
carVideo.addEventListener("ended", function () {
    carVideo.pause();
});

// Start video playback.
carVideo.play().catch(function () {
    console.log("Video playback needs user interaction.");
});

// ABOUT SECTION SCROLL ANIMATION

const aboutSection = document.querySelector(".about-section");

if (aboutSection) {
    const aboutElements = aboutSection.querySelectorAll(
        ".about-image-wrapper, .about-content"
    );

    aboutElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
    });

    const aboutObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    aboutElements.forEach((element) => {
        aboutObserver.observe(element);
    });
}


/* =========================
   SKILLS CARD INTERACTION
========================= */

document.querySelectorAll(".skill-toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".skill-card");
        const details = card.querySelector(".skill-details");
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isExpanded));
        details.hidden = isExpanded;

        button.querySelector("span").textContent =
            isExpanded ? "＋" : "−";

        button.firstChild.textContent =
            isExpanded ? "EXPLORE SKILLS " : "SHOW LESS ";
    });
});
