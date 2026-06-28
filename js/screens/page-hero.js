window.Screens = window.Screens || {};

window.Screens.pageHero = function (options) {
  return (
    '<section class="page-hero" style="--hero-image:url(' + options.image + ')">' +
    '<div class="shell fade-in">' +
    '<p class="eyebrow">' + options.eyebrow + "</p>" +
    "<h1>" + options.title + "</h1>" +
    "<p>" + options.text + "</p>" +
    "</div></section>"
  );
};
