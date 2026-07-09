window.Screens = window.Screens || {};

window.Screens.serviceDetail = function (service) {
  var quickFacts = [
    ["Primary Focus", service.benefits[0]],
    ["Workflow", service.process.join(" -> ")],
    ["Output", service.deliverables[0]],
    ["Next Step", "Share product, destination, quantity, and packing needs"]
  ];
  var outcomes = [
    "Clear requirement capture before quote",
    "Practical packing and documentation plan",
    "Buyer-friendly updates from approval to dispatch"
  ];
  var related = window.SiteData.services
    .filter(function (item) { return item.slug !== service.slug; })
    .slice(0, 3)
    .map(function (item) {
      return (
        '<article class="card service-card service-detail-card fade-in"><img src="' + item.image + '" alt="' + item.title + '"><div class="body"><h2>' +
        item.title +
        "</h2><p>" +
        item.text +
        '</p><div class="btn-row"><a class="btn secondary" href="service-detail.html?slug=' +
        item.slug +
        '">View Details</a></div></div></article>'
      );
    })
    .join("");

  return (
    '<section class="section service-detail-section" style="padding-top:120px"><div class="shell detail-layout">' +
    '<div class="gallery fade-in"><img class="gallery-main" src="' + service.image + '" alt="' + service.title + '">' +
    '<div class="thumbs"><img src="' + service.image + '" alt="' + service.title + '"><img src="assets/555.png" alt="Export planning"><img src="assets/777.png" alt="Global shipping"></div>' +
    '<div class="service-facts card pad"><h3>Service Snapshot</h3><div class="service-fact-grid">' +
    quickFacts.map(function (item) { return '<div><span>' + item[0] + '</span><strong>' + item[1] + '</strong></div>'; }).join("") +
    '</div><p>Every enquiry is reviewed around destination rules, buyer expectations, packing safety, document readiness, and dispatch timing so the plan is clear before execution begins.</p></div></div>' +
    '<div class="fade-in"><p class="eyebrow">Export Service</p><h1 class="section-title">' + service.title + '</h1><p class="section-lead">' + service.text + '</p>' +
    '<div class="meta">' + service.benefits.map(function (item) { return '<span class="pill">' + item + "</span>"; }).join("") + '</div>' +
    '<div class="card pad service-detail-copy"><h3>Complete Overview</h3><p>' + service.overview + '</p>' +
    '<h3>What We Cover</h3><ul>' + service.scope.map(function (item) { return "<li>" + item + "</li>"; }).join("") + '</ul>' +
    '<h3>Step-by-Step Process</h3><ol>' + service.process.map(function (item) { return "<li>" + item + "</li>"; }).join("") + '</ol>' +
    '<h3>Deliverables</h3><ul>' + service.deliverables.map(function (item) { return "<li>" + item + "</li>"; }).join("") + '</ul>' +
    '<p><strong>Best for:</strong> ' + service.bestFor + '</p><p><strong>Buyer support:</strong> Requirement discussion, clear updates, document coordination, packing guidance, and quotation support are available through the enquiry stage.</p></div>' +
    '<div class="service-outcomes"><h3>Buyer Outcomes</h3>' + outcomes.map(function (item) { return '<span>' + item + '</span>'; }).join("") + '</div>' +
    '<div class="btn-row" style="margin-top:18px"><a class="btn" href="contact.html">Request This Service</a><a class="btn secondary" href="services.html#' + service.slug + '">Back to Services</a></div></div>' +
    '</div></section>' +
    '<section class="section alt service-related-section"><div class="shell"><p class="eyebrow">Related Services</p><div class="grid three services-full-grid">' + related + '</div></div></section>'
  );
};
