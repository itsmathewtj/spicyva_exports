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
