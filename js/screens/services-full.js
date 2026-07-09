window.Screens = window.Screens || {};

window.Screens.servicesFull = function () {
  return (
    '<section class="section services-full-section"><div class="shell"><div class="catalog-heading"><p class="eyebrow">Services</p><h1 class="section-title">Simple export support, clearly packaged.</h1><p class="section-lead">Lean service cards for sourcing, paperwork, packing, freight, and delivery.</p></div><div class="grid three services-full-grid">' +
    window.SiteData.services
      .map(function (service) {
        return (
          '<article class="card service-card service-detail-card fade-in" id="' + service.slug + '"><img src="' + service.image + '" alt="' + service.title + '"><div class="body"><h2>' + service.title + "</h2><p>" + service.text + "</p>" +
          '<p class="card-extra">Our team aligns requirements, timelines, and buyer communication so each export step stays practical and traceable.</p>' +
          '<div class="meta">' + service.benefits.slice(0, 2).map(function (item) { return '<span class="pill">' + item + "</span>"; }).join("") + "</div>" +
          '<div class="btn-row service-card-actions"><a class="btn secondary" href="contact.html">Contact</a><a class="btn secondary" href="service-detail.html?slug=' + service.slug + '">View Details</a></div></div></article>'
        );
      })
      .join("") +
    "</div></div></section>"
  );
};
