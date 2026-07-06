window.Screens = window.Screens || {};

window.Screens.contactFull = function () {
  return (
    '<section class="section contact-section"><div class="shell contact-layout">' +
    '<form class="contact-form-card fade-in" id="contactForm"><div><p class="eyebrow">Inquiry Form</p><h2 class="section-title">Tell us what you want to export or source.</h2><p class="section-lead">Clear details help our team respond with pricing, availability, documents, and timelines.</p></div><div class="form-grid"><input class="field" placeholder="Full name"><input class="field" placeholder="Company name"><input class="field" placeholder="Email address"><input class="field" placeholder="Phone / WhatsApp"><select class="field"><option>Request quotation</option><option>Product sourcing</option><option>Documentation support</option><option>Partnership</option></select><input class="field" placeholder="Destination country"></div><textarea class="field" placeholder="Product, quantity, packaging, certification, and expected timeline"></textarea><button class="btn" type="button">Submit Inquiry</button></form>' +
    '<aside class="contact-info-panel fade-in"><p class="eyebrow">Trade Desk</p><h3>Direct support for serious inquiries.</h3><p>Spicyva Exports, Chennai, Tamil Nadu, India</p><div class="contact-info-list"><span><strong>Phone</strong> +91 98765 43210</span><span><strong>Email</strong> sales@spicyvaexports.com</span><span><strong>Hours</strong> Mon-Sat, 9:30 AM - 6:30 PM</span></div><div class="btn-row"><a class="btn gold" href="https://wa.me/919876543210">WhatsApp</a><a class="btn secondary" href="mailto:sales@spicyvaexports.com">Email Us</a></div></aside>' +
    '</div></section><section class="section alt"><div class="shell grid three">' +
    ["How soon do you quote?", "Can you arrange samples?", "Do you support custom packaging?"].map(function (q) { return '<article class="card pad fade-in"><h3>' + q + '</h3><p>Yes. Our team reviews destination, quantity, specs, and documents before confirming a practical next step.</p></article>'; }).join("") +
    "</div></section>"
  );
};
