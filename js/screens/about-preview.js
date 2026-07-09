window.Screens = window.Screens || {};

window.Screens.aboutPreview = function () {
  return (
    '<section class="section about-preview-section"><div class="shell about-preview-grid">' +
    '<div class="about-media fade-in"><img src="assets/666.png" alt="Spicyva export sourcing"><div class="about-media-note"><strong>Lot-led sourcing</strong><span>Samples, origin notes, packing details, and dispatch proof aligned before movement.</span></div></div>' +
    '<div class="fade-in"><p class="eyebrow">About Spicyva</p><h2 class="section-title">Built for premium B2B export relationships.</h2>' +
    '<p class="section-lead">We combine supplier verification, consistent quality checks, documentation discipline, and international shipment coordination so buyers can scale procurement with confidence.</p>' +
    '<div class="btn-row" style="margin-top:24px"><a class="btn" href="about.html">Learn More</a></div></div>' +
    "</div></section>"
  );
};

window.Screens.aboutEssence = function () {
  var points = [
    ["Clear Sourcing", "Verified lots, practical specifications, and buyer-led packing choices."],
    ["Export Discipline", "Documents, samples, timelines, and dispatch proof kept aligned."],
    ["Quality Checks", "Clean grading, sensible packing, and order-ready shipment reviews."],
    ["Packing Guidance", "Bulk, retail, and private-label formats planned around destination needs."],
    ["Shipment Clarity", "Freight options, document flow, and dispatch updates kept easy to track."],
    ["Long-Term Trust", "Responsive communication for importers, distributors, and food brands."]
  ];
  return (
    '<section class="section about-essence-section"><div class="shell"><div class="section-head"><div><p class="eyebrow">What We\'re All About</p><h2 class="section-title">Simple, dependable export execution.</h2><p class="section-lead">We keep every order focused on quality, clarity, timing, and practical buyer support.</p></div></div><div class="grid three about-essence-grid">' +
    points.map(function (point) {
      return '<article class="card pad"><h3>' + point[0] + '</h3><p>' + point[1] + '</p></article>';
    }).join("") +
    '</div></div></section><section class="highlight-image-band"><img src="assets/1010-transparent.png" alt="Spicyva export highlights"></section>'
  );
};
