document.addEventListener("DOMContentLoaded", function () {
  
  
    // Swiper setup
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      slidesPerView: 1,
      spaceBetween: 10
    });
  }

  // Nav hover effect
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const hoverImage = link.querySelector(".hover-image");

    link.addEventListener("mouseover", function () {
      if (hoverImage) hoverImage.classList.add("active");
    });

    link.addEventListener("mouseout", function () {
      if (hoverImage) hoverImage.classList.remove("active");
    });
  });
});

var logo = document.getElementById("logo");

var logoUrls = [
  "../Images/Logos/logo.png",
  "../Images/Logos/logo1.png"
]

var currentLogoIndex = 0;

function changeLogo() {
  logo.src = logoUrls[currentLogoIndex];
  currentLogoIndex = (currentLogoIndex + 1) % logoUrls.length;
}

changeLogo();
setInterval(changeLogo, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const sizeButtons = document.querySelectorAll(".size-btn");

  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove selected from all buttons
      sizeButtons.forEach(btn => btn.classList.remove("selected"));
      // Add selected to clicked one
      button.classList.add("selected");

      // You can access the selected size via:
      const selectedSize = button.dataset.size;
      console.log("Selected size:", selectedSize);
    });
  });
});

