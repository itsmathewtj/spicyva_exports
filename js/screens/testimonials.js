window.Screens = window.Screens || {};

window.Screens.testimonials = function () {
  var cards = window.SiteData.testimonials
    .map(function (item) {
      return '<article class="testimonial-card card pad"><p>"' + item[0] + '"</p><h3>' + item[1] + "</h3></article>";
    })
    .join("");
  return (
    '<section class="section testimonials-section"><div class="shell"><p class="eyebrow">Testimonials</p><h2 class="section-title">What international buyers say.</h2></div><div class="testimonial-marquee" id="testimonialGrid"><div class="testimonial-track">' +
    cards +
    cards +
    "</div></div></section>"
  );
};

window.Screens.initTestimonials = function () {
  var marquee = document.getElementById("testimonialGrid");
  if (!marquee) return;

  var paused = false;
  var resumeTimer = null;
  var lastTime = null;
  var speed = 18;

  function pauseTemporarily() {
    paused = true;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(function () {
      paused = false;
    }, 1800);
  }

  function normalizeScroll() {
    var half = marquee.scrollWidth / 2;
    if (marquee.scrollLeft >= half) {
      marquee.scrollLeft -= half;
    } else if (marquee.scrollLeft <= 0) {
      marquee.scrollLeft += half;
    }
  }

  function tick(time) {
    if (lastTime === null) lastTime = time;
    var delta = (time - lastTime) / 1000;
    lastTime = time;

    if (!paused) {
      marquee.scrollLeft += speed * delta;
      normalizeScroll();
    }

    requestAnimationFrame(tick);
  }

  marquee.addEventListener("mouseenter", function () { paused = true; });
  marquee.addEventListener("mouseleave", function () { paused = false; });
  marquee.addEventListener("wheel", pauseTemporarily, { passive: true });
  marquee.addEventListener("touchstart", pauseTemporarily, { passive: true });
  marquee.addEventListener("pointerdown", pauseTemporarily);
  marquee.addEventListener("scroll", normalizeScroll, { passive: true });

  requestAnimationFrame(tick);
};
