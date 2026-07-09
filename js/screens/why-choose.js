window.Screens = window.Screens || {};

function whyChooseItems() {
  return [
    ["Are your shipments documentation-ready?", "Yes. We prepare buyer-friendly export records, invoice details, packing lists, origin support, and shipment references before dispatch."],
    ["How do you check product quality?", "We align product specifications early, arrange samples where needed, and support pre-dispatch checks with photos, grading notes, and batch clarity."],
    ["Can you manage faster delivery timelines?", "Our team compares air, sea, and multimodal routes, then recommends a practical shipment plan based on urgency, destination, and cargo size."],
    ["Do you support sustainable packaging?", "Yes. We can suggest recyclable, bulk, private-label, and responsible packaging options depending on the product and buyer requirement."],
    ["Can you source multiple products together?", "Yes. We coordinate mixed-product sourcing, consolidation, supplier follow-up, and dispatch planning for buyers who need multi-SKU export programs."],
    ["Will I get regular shipment updates?", "Yes. We share stage-wise updates from quotation and sample approval through packing, documentation, freight booking, and delivery movement."],
    ["Can you arrange samples before bulk order?", "Yes. We help confirm sample quantity, packaging, courier movement, and feedback before moving to production or bulk procurement."],
    ["Do you support custom branding?", "Yes. Private-label packaging, retail labels, carton marks, and buyer-specific packing formats can be coordinated before shipment."],
    ["Can you help with freight and customs?", "We coordinate with freight and customs partners so buyers get clearer route options, document flow, and shipment handling support."],
    ["Why should buyers choose Spicyva?", "Because our work is practical, responsive, and detail-led. We reduce uncertainty across product sourcing, quality checks, paperwork, and freight coordination."]
  ];
}

window.Screens.whyChoose = function () {
  var items = whyChooseItems();
  return (
    '<section class="section alt why-section"><div class="shell"><div class="section-intro"><p class="eyebrow">Buyer Questions</p><h2 class="section-title">Clear answers before your shipment moves.</h2><p class="section-lead">Open each question to see how our export desk handles product quality, documents, packing, samples, timelines, and delivery planning.</p></div><div class="why-layout fade-in" id="whyCarousel"><div class="why-questions">' +
    items.map(function (item, index) {
      var active = index === 0 ? " active" : "";
      return '<article class="why-faq' + active + '"><button class="why-question" type="button" data-why-dot="' + index + '" aria-expanded="' + (index === 0 ? "true" : "false") + '"><span>' + item[0] + '</span><strong>' + (index === 0 ? "-" : "+") + '</strong></button><div class="why-answer"><p>' + item[1] + "</p></div></article>";
    }).join("") +
    '</div><aside class="why-panel"><div class="why-panel-icon">SE</div><span>Buyer confidence</span><h3>Clear answers before the shipment moves.</h3><p>Every inquiry is handled with practical next steps, realistic timelines, and export-ready communication.</p><a class="btn" href="contact.html">Start Export Inquiry</a></aside></div></div></section>'
  );
};

window.Screens.initWhyChoose = function () {
  var carousel = document.getElementById("whyCarousel");
  if (!carousel) return;
  var cards = carousel.querySelectorAll(".why-faq");
  var questions = carousel.querySelectorAll(".why-question");

  function show(index) {
    cards.forEach(function (card, cardIndex) {
      var active = cardIndex === index;
      var button = card.querySelector(".why-question");
      var icon = button.querySelector("strong");
      card.classList.toggle("active", active);
      button.setAttribute("aria-expanded", active ? "true" : "false");
      icon.textContent = active ? "-" : "+";
    });
  }

  questions.forEach(function (question) {
    question.addEventListener("click", function () {
      show(Number(question.dataset.whyDot));
    });
  });
};
