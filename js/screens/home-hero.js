window.Screens = window.Screens || {};

window.Screens.homeHero = function () {
  var slides = [
    {
      label: "Spice Origin",
      title: "Spices selected with the patience of a specialist buyer.",
      text: "From green cardamom to turmeric fingers, every lot is prepared with origin clarity, sampling discipline, and export-grade packing.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1900&q=86"
    },
    {
      label: "Port Movement",
      title: "Containers planned before the shipment reaches the port.",
      text: "Documentation, packing, freight windows, and buyer updates come together in one calm export workflow.",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1900&q=86"
    },
    {
      label: "B2B Catalog",
      title: "Products presented like a marketplace, handled like a trade desk.",
      text: "MOQ, origin, availability, certification notes, and quote paths help buyers move from browsing to real procurement.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1900&q=86"
    },
    {
      label: "Quality Dispatch",
      title: "Every dispatch leaves with proof, not guesswork.",
      text: "Quality checks, packaging photos, commercial documents, and shipment milestones keep international teams aligned.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1900&q=86"
    }
  ];
  var slideImages = slides
    .map(function (slide, index) {
      var active = index === 0 ? " active" : "";
      var zoom = index % 2 === 0 ? " zoom-out" : " zoom-in";
      return '<div class="hero-slide' + active + zoom + '" style="background-image:url(' + slide.image + ')"></div>';
    })
    .join("");
  var slideCopy = slides
    .map(function (slide, index) {
      var active = index === 0 ? " active" : "";
      return (
        '<article class="hero-copy' + active + '" data-hero-copy="' + index + '">' +
        '<p class="eyebrow">' + slide.label + "</p>" +
        "<h1>" + slide.title + "</h1>" +
        "<p>" + slide.text + "</p>" +
        "</article>"
      );
    })
    .join("");
  var dots = slides
    .map(function (slide, index) {
      var active = index === 0 ? " active" : "";
      return '<button class="hero-dot' + active + '" data-hero-dot="' + index + '" aria-label="Show ' + slide.label + ' slide"></button>';
    })
    .join("");

  return (
    '<section class="hero" id="homeHero">' +
    '<div class="hero-slides">' + slideImages + "</div>" +
    '<div class="product-motion" aria-hidden="true">' +
    '<span class="spice spice-one">Cardamom</span><span class="spice spice-two">Turmeric</span><span class="spice spice-three">Basmati</span><span class="spice spice-four">Coir</span>' +
    '<span class="grain grain-one"></span><span class="grain grain-two"></span><span class="grain grain-three"></span><span class="grain grain-four"></span>' +
    "</div>" +
    '<div class="shell hero-grid">' +
    '<div class="hero-story fade-in">' + slideCopy +
    '<div class="btn-row" style="margin-top:28px"><a class="btn" href="products.html">Explore Products</a><a class="btn secondary hero-outline" href="contact.html">Contact Us</a></div>' +
    '<div class="hero-dots" aria-label="Hero slides">' + dots + "</div></div>" +
    "</div></section>"
  );
};

window.Screens.initHomeHero = function () {
  var hero = document.getElementById("homeHero");
  if (!hero) return;
  var slides = hero.querySelectorAll(".hero-slide");
  var copy = hero.querySelectorAll(".hero-copy");
  var dots = hero.querySelectorAll(".hero-dot");
  var active = 0;
  var timer;

  function showSlide(index) {
    active = index;
    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("active", slideIndex === index);
    });
    copy.forEach(function (item, copyIndex) {
      item.classList.toggle("active", copyIndex === index);
    });
    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("active", dotIndex === index);
    });
  }

  function start() {
    timer = setInterval(function () {
      showSlide((active + 1) % slides.length);
    }, 5200);
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      clearInterval(timer);
      showSlide(Number(dot.dataset.heroDot));
      start();
    });
  });

  start();
};
