window.Screens = window.Screens || {};

window.Screens.aboutFull = function () {
  var values = ["Integrity", "Quality", "Sustainability", "Responsiveness", "Partnership", "Precision"];
  var leaders = ["Ananya Rao - Managing Director", "Vikram Menon - Export Operations", "Sara Thomas - Quality and Compliance"];
  var milestones = [
    ["2006", "Founded", "Started as a focused sourcing desk with reliable regional supplier relationships."],
    ["2012", "First GCC Program", "Built repeat export lanes with cleaner documentation and predictable buyer updates."],
    ["2017", "EU Agriculture Lanes", "Expanded compliance support for agricultural products and inspection workflows."],
    ["2022", "Private-Label Scale", "Added packaging review, label coordination, and dispatch proof for growing brands."],
    ["2026", "Digital B2B Catalog", "Launched structured product browsing with quote paths and buyer-ready details."]
  ];
  return (
    '<section class="section"><div class="shell grid two"><div><p class="eyebrow">Company Story</p><h2 class="section-title">From regional sourcing desk to global export partner.</h2><p class="section-lead">Spicyva Exports was designed around a simple belief: international buyers deserve beautiful communication, disciplined documentation, and consistent product quality.</p></div><div class="card image-card"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" alt="Leadership meeting"></div></div></section>' +
    '<section class="section alt"><div class="shell grid three">' +
    values.map(function (value) { return '<article class="card pad fade-in"><span class="pill">Value</span><h3>' + value + '</h3><p>Embedded into sourcing, inspection, communication, and delivery decisions.</p></article>'; }).join("") +
    '</div></section>' +
    '<section class="section"><div class="shell"><p class="eyebrow">Leadership Team</p><h2 class="section-title">Experienced people behind every shipment.</h2><div class="grid three" style="margin-top:34px">' +
    leaders.map(function (leader) { return '<article class="card pad fade-in"><h3>' + leader + '</h3><p>Focused on dependable buyer relationships and clean export execution.</p></article>'; }).join("") +
    '</div></div></section>' +
    '<section class="section alt"><div class="shell grid two"><div><p class="eyebrow">Manufacturing Process</p><h2 class="section-title">Sourcing, inspection, processing, packing, and dispatch.</h2><p class="section-lead">Every program follows clear checkpoints for supplier selection, sample approval, production tracking, quality review, and final shipment documents.</p></div><div class="card pad"><h3>Certificates</h3><p>FSSAI, APEDA, ISO-ready documentation, phytosanitary support, organic lots on request, and buyer-specific compliance folders.</p></div></div></section>' +
    '<section class="section achievement-section"><div class="shell"><div class="section-head"><div><p class="eyebrow">Achievements Timeline</p><h2 class="section-title">Milestones shaped by buyer trust.</h2></div></div><div class="achievement-timeline">' +
    milestones.map(function (item, index) { return '<article class="achievement-card fade-in"><span class="achievement-index">0' + (index + 1) + '</span><strong>' + item[0] + '</strong><h3>' + item[1] + '</h3><p>' + item[2] + '</p></article>'; }).join("") +
    '</div></div></section>' +
    '<section class="section alt"><div class="shell"><p class="eyebrow">Photo Gallery</p><div class="grid three">' +
    ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80"].map(function (src) { return '<article class="card image-card fade-in"><img src="' + src + '" alt="Export company gallery"></article>'; }).join("") +
    '</div></div></section>'
  );
};
