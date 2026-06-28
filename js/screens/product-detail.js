window.Screens = window.Screens || {};

window.Screens.productDetail = function (product) {
  var related = window.SiteData.products
    .filter(function (item) { return item.slug !== product.slug; })
    .slice(0, 3)
    .map(window.Screens.productCard)
    .join("");

  return (
    '<section class="section" style="padding-top:120px"><div class="shell detail-layout">' +
    '<div class="gallery fade-in"><img class="gallery-main" id="mainImage" src="' + product.image + '" alt="' + product.name + '">' +
    '<div class="thumbs"><img src="' + product.image + '" alt="' + product.name + '"><img src="https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=900&q=80" alt="Packaging"><img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80" alt="Shipping"></div></div>' +
    '<div class="fade-in"><p class="eyebrow">' + product.category + '</p><h1 class="section-title">' + product.name + '</h1><p class="section-lead">' + product.description + '</p>' +
    '<div class="meta"><span class="pill">' + product.country + '</span><span class="pill">' + product.availability + '</span><span class="pill">MOQ ' + product.moq + '</span></div>' +
    '<div class="card pad"><h3>Specifications</h3><ul>' + product.specs.map(function (item) { return "<li>" + item + "</li>"; }).join("") + '</ul><p><strong>Packaging:</strong> ' + product.packaging + '</p><p><strong>Shipping:</strong> ' + product.shipping + '</p><p><strong>Certifications:</strong> ' + product.certifications + '</p><p><strong>Applications:</strong> Foodservice, retail, manufacturing, and distribution programs.</p></div>' +
    '<div class="btn-row" style="margin-top:18px"><a class="btn" href="#quote">Request Quotation</a><button class="btn secondary" onclick="window.print()">Print Details</button><button class="btn secondary">Share Product</button><button class="btn secondary">Favorite</button><a class="btn gold" href="Product-Brochure.pdf" download>Download PDF</a></div></div>' +
    '</div></section><section class="section alt" id="quote"><div class="shell grid two"><div><p class="eyebrow">Quotation Form</p><h2 class="section-title">Request this product.</h2><p class="section-lead">Add destination, quantity, packaging, and certification requirements.</p></div>' +
    '<form class="card pad quote-form"><input class="field" placeholder="Name"><input class="field" placeholder="Email"><input class="field" placeholder="Destination country"><input class="field" placeholder="Quantity"><textarea class="field" placeholder="Message"></textarea><button class="btn" type="button">Send Request</button></form></div></section>' +
    '<section class="section"><div class="shell"><p class="eyebrow">Related Products</p><div class="grid three">' + related + "</div></div></section>"
  );
};

window.Screens.initProductDetail = function () {
  document.querySelectorAll(".thumbs img").forEach(function (img) {
    img.addEventListener("click", function () {
      document.getElementById("mainImage").src = img.src;
    });
  });
};
