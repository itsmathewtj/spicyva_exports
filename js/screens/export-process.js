window.Screens = window.Screens || {};

window.Screens.exportProcess = function () {
  var steps = [
    ["Inquiry", "Share product, quantity, destination, and packing needs.", "Buyer brief"],
    ["Quotation", "Receive landed-cost guidance with MOQ and freight options.", "Clear pricing"],
    ["Order Confirmation", "Lock specs, labels, timeline, and payment milestones.", "Aligned scope"],
    ["Production", "Prepare lots with sourcing and processing updates.", "Live progress"],
    ["Quality Check", "Approve samples, inspection notes, and dispatch photos.", "Proof before ship"],
    ["Packaging", "Seal goods in export-grade cartons, liners, or pallets.", "Transit ready"],
    ["Shipping", "Move by sea, air, or multimodal freight with tracking.", "Route control"],
    ["Delivery", "Confirm documents, arrival status, and reorder planning.", "Long-term flow"]
  ];
  return (
    '<section class="section export-section"><div class="shell"><div class="section-head"><div><p class="eyebrow">Export Process</p><h2 class="section-title">A clear path from inquiry to delivery.</h2><p class="section-lead">Each stage shows what the buyer can expect, what our desk is handling, and where approvals happen.</p></div><a class="btn secondary" href="contact.html">Start an Inquiry</a></div><div class="timeline export-timeline">' +
    steps
      .map(function (step, index) {
        return '<article class="timeline-step export-step fade-in"><span>' + (index + 1) + '</span><small>' + step[2] + "</small><h3>" + step[0] + "</h3><p>" + step[1] + "</p></article>";
      })
      .join("") +
    "</div></div></section>"
  );
};
