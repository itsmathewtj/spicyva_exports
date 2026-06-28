window.Screens = window.Screens || {};

window.Screens.servicesPreview = function () {
  var cards = window.SiteData.services
    .slice(0, 8)
    .map(function (service, index) {
      return (
        '<article class="card service-card fade-in"><img src="' + service.image + '" alt="' + service.title + '"><div class="body"><span class="pill">0' + (index + 1) + "</span><h3>" +
        service.title +
        "</h3><p>" +
        service.text +
        '</p><div style="margin-top:18px"><a class="btn secondary" href="services.html#' +
        service.slug +
        '">View Service</a></div></div></article>'
      );
    })
    .join("");

  return (
    '<section class="section alt"><div class="shell"><div class="section-head"><div><p class="eyebrow">Services</p><h2 class="section-title">A complete export operating layer.</h2><p class="section-lead">Premium service cards with focused support from consultation through delivery.</p></div><a class="btn" href="services.html">All Services</a></div><div class="grid four">' +
    cards +
    "</div></div></section>"
  );
};
