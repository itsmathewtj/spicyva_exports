window.Screens = window.Screens || {};

window.Screens.pageHero = function (options) {
  var actions = (options.actions || [])
    .map(function (action, index) {
      var className = index === 0 ? "btn" : "btn secondary hero-outline";
      return '<a class="' + className + '" href="' + action.href + '">' + action.label + "</a>";
    })
    .join("");
  return (
    '<section class="page-hero" style="--hero-image:url(' + options.image + ')">' +
    '<div class="shell fade-in">' +
    '<p class="eyebrow">' + options.eyebrow + "</p>" +
    "<h1>" + options.title + "</h1>" +
    "<p>" + options.text + "</p>" +
    (actions ? '<div class="btn-row page-hero-actions">' + actions + "</div>" : "") +
    "</div></section>"
  );
};
