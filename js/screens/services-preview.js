window.Screens = window.Screens || {};

window.Screens.servicesPreview = function () {
  var cards = window.SiteData.services
    .slice(0, 4)
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
    '<section class="section alt services-preview-section"><div class="shell"><div class="section-intro"><p class="eyebrow">Our Services</p><h2 class="section-title">Export support for every order stage.</h2><p class="section-lead">From consultation and sourcing to documentation and packing, our services keep buyer communication clear and shipment movement dependable.</p></div><div class="grid four">' +
    cards +
    "</div></div></section>"
  );
};
