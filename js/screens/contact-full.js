window.Screens = window.Screens || {};

window.Screens.contactFull = function () {
  return (
    '<section class="section"><div class="shell detail-layout">' +
    '<form class="card pad quote-form fade-in"><h2>Contact Form</h2><input class="field" placeholder="Full name"><input class="field" placeholder="Email"><input class="field" placeholder="Phone"><select class="field"><option>Request quotation</option><option>Product sourcing</option><option>Documentation support</option><option>Partnership</option></select><textarea class="field" placeholder="Tell us about product, quantity, destination, and timeline"></textarea><button class="btn" type="button">Submit Inquiry</button></form>' +
    '<aside class="grid"><article class="card pad fade-in"><h3>Office Address</h3><p>Spicyva Exports, Chennai, Tamil Nadu, India</p><p><strong>Phone:</strong> +91 98765 43210</p><p><strong>Email:</strong> sales@spicyvaexports.com</p><p><strong>Working Hours:</strong> Mon-Sat, 9:30 AM - 6:30 PM</p><div class="btn-row"><a class="btn gold" href="https://wa.me/919876543210">WhatsApp</a><button class="btn secondary">Live Chat</button></div></article>' +
    '<article class="card pad fade-in"><h3>Interactive Map</h3><div class="map" style="min-height:260px"><button class="pin" style="left:54%;top:56%"><span>Chennai export desk</span></button></div></article></aside>' +
    '</div></section><section class="section alt"><div class="shell grid three">' +
    ["How soon do you quote?", "Can you arrange samples?", "Do you support custom packaging?"].map(function (q) { return '<article class="card pad fade-in"><h3>' + q + '</h3><p>Yes. Our team reviews destination, quantity, specs, and documents before confirming a practical next step.</p></article>'; }).join("") +
    "</div></section>"
  );
};
