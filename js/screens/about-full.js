window.Screens = window.Screens || {};

window.Screens.aboutFull = function () {
  var values = ["Integrity", "Quality", "Sustainability", "Responsiveness", "Partnership", "Precision"];
  return (
    '<section class="section about-simple-section"><div class="shell"><div class="catalog-heading"><p class="eyebrow">About Spicyva</p><h1 class="section-title">Quality-focused exports from India to global buyers.</h1><p class="section-lead">Simple sourcing, inspection, packing, paperwork, and shipment coordination for international food buyers.</p></div><div class="grid two about-simple-intro"><div><p class="eyebrow">Company Story</p><h2 class="section-title">Built for clear export relationships.</h2><p class="section-lead">Spicyva Exports supports international buyers with dependable Indian sourcing, practical product checks, buyer-friendly documentation, and responsive shipment coordination. Our work is built around clear specifications, honest availability, careful packing choices, and steady communication from inquiry to dispatch, so importers can plan orders with confidence and fewer surprises.</p></div><div class="card image-card"><img src="assets/888.png" alt="Spicyva export quality"></div></div></div></section>' +
    '<section class="section alt about-simple-section"><div class="shell"><div class="grid three about-simple-cards">' +
    values.map(function (value) { return '<article class="card pad fade-in"><h3>' + value + '</h3><p>Clear standards across sourcing, quality, documents, and delivery.</p></article>'; }).join("") +
    '</div></div></section>' +
    '<section class="section about-simple-section"><div class="shell grid two"><div><p class="eyebrow">Process</p><h2 class="section-title">Source, check, pack, document, dispatch.</h2><p class="section-lead">Each order follows simple checkpoints so buyers know what is ready, what is approved, and what moves next.</p></div><div class="card pad"><h3>Certificates</h3><p>FSSAI, APEDA, phytosanitary, COA, and buyer-requested documents supported.</p></div></div></section>' +
    '<section class="section alt about-simple-section"><div class="shell"><p class="eyebrow">Photo Gallery</p><h2 class="section-title">Export work in motion.</h2><div class="grid three about-gallery">' +
    ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80"].map(function (src) { return '<article class="card image-card fade-in"><img src="' + src + '" alt="Export company gallery"></article>'; }).join("") +
    '</div></div></section>'
  );
};
