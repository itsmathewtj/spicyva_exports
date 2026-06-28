window.Screens = window.Screens || {};

window.Screens.aboutFull = function () {
  var values = ["Integrity", "Quality", "Sustainability", "Responsiveness", "Partnership", "Precision"];
  var leaders = ["Ananya Rao - Managing Director", "Vikram Menon - Export Operations", "Sara Thomas - Quality and Compliance"];
  return (
    '<section class="section"><div class="shell grid two"><div><p class="eyebrow">Company Story</p><h2 class="section-title">From regional sourcing desk to global export partner.</h2><p class="section-lead">Spicyva Exports was designed around a simple belief: international buyers deserve beautiful communication, disciplined documentation, and consistent product quality.</p></div><div class="card image-card"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" alt="Leadership meeting"></div></div></section>' +
    '<section class="section alt"><div class="shell grid three">' +
    values.map(function (value) { return '<article class="card pad fade-in"><span class="pill">Value</span><h3>' + value + '</h3><p>Embedded into sourcing, inspection, communication, and delivery decisions.</p></article>'; }).join("") +
    '</div></section>' +
    '<section class="section"><div class="shell"><p class="eyebrow">Leadership Team</p><h2 class="section-title">Experienced people behind every shipment.</h2><div class="grid three" style="margin-top:34px">' +
    leaders.map(function (leader) { return '<article class="card pad fade-in"><h3>' + leader + '</h3><p>Focused on dependable buyer relationships and clean export execution.</p></article>'; }).join("") +
    '</div></div></section>' +
    '<section class="section alt"><div class="shell grid two"><div><p class="eyebrow">Manufacturing Process</p><h2 class="section-title">Sourcing, inspection, processing, packing, and dispatch.</h2><p class="section-lead">Every program follows clear checkpoints for supplier selection, sample approval, production tracking, quality review, and final shipment documents.</p></div><div class="card pad"><h3>Certificates</h3><p>FSSAI, APEDA, ISO-ready documentation, phytosanitary support, organic lots on request, and buyer-specific compliance folders.</p></div></div></section>' +
    '<section class="section"><div class="shell"><p class="eyebrow">Achievements Timeline</p><div class="timeline">' +
    ["2006 Founded", "2012 First GCC program", "2017 EU agriculture lanes", "2022 Private-label scale", "2026 Digital B2B catalog"].map(function (item, index) { return '<article class="timeline-step fade-in"><span>' + (index + 1) + '</span><h3>' + item + '</h3><p>Growth through better systems and buyer trust.</p></article>'; }).join("") +
    '</div></div></section>' +
    '<section class="section alt"><div class="shell"><p class="eyebrow">Photo Gallery</p><div class="grid three">' +
    ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80"].map(function (src) { return '<article class="card image-card fade-in"><img src="' + src + '" alt="Export company gallery"></article>'; }).join("") +
    '</div></div></section>'
  );
};
