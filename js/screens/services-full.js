window.Screens = window.Screens || {};

window.Screens.servicesFull = function () {
  return (
    '<section class="section"><div class="shell grid two">' +
    window.SiteData.services
      .map(function (service) {
        return (
          '<article class="card service-card service-detail-card fade-in" id="' + service.slug + '"><img src="' + service.image + '" alt="' + service.title + '"><div class="body"><span class="pill">Service Detail</span><h2>' + service.title + "</h2><p>" + service.text + "</p>" +
          '<h3>Benefits</h3><div class="meta">' + service.benefits.map(function (item) { return '<span class="pill">' + item + "</span>"; }).join("") + "</div>" +
          '<h3>Process</h3><ol>' + service.process.map(function (step) { return "<li>" + step + "</li>"; }).join("") + "</ol>" +
          '<h3>FAQ</h3><p><strong>Can this be customized?</strong> Yes, every service can be adjusted by destination, category, quantity, and buyer documentation needs.</p>' +
          '<div class="btn-row"><a class="btn" href="contact.html">Contact CTA</a><a class="btn secondary" href="products.html">Match Products</a></div></div></article>'
        );
      })
      .join("") +
    "</div></section>"
  );
};
