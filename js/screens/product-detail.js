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
    '<div class="thumbs"><img src="' + product.image + '" alt="' + product.name + '"><img src="assets/555.png" alt="Export quality"><img src="assets/777.png" alt="Global shipping"></div></div>' +
    '<div class="fade-in"><p class="eyebrow">' + product.category + '</p><h1 class="section-title">' + product.name + '</h1><p class="section-lead">' + product.description + '</p>' +
    '<div class="meta"><span class="pill">' + product.country + '</span><span class="pill">' + product.availability + '</span><span class="pill">MOQ ' + product.moq + '</span></div>' +
    '<div class="card pad product-detail-copy"><h3>Product Overview</h3><p>' + product.detailText + '</p><h3>Specifications</h3><ul>' + product.specs.map(function (item) { return "<li>" + item + "</li>"; }).join("") + '</ul><p><strong>Packaging:</strong> ' + product.packaging + '</p><p><strong>Shipping:</strong> ' + product.shipping + '</p><p><strong>Certifications:</strong> ' + product.certifications + '</p><p><strong>Applications:</strong> Foodservice, retail, wholesale distribution, private label, spice blending, and ingredient programs.</p></div>' +
    '<div class="btn-row" style="margin-top:18px"><a class="btn" href="contact.html">Request Quotation</a><button class="btn secondary favorite-detail-btn" type="button" data-slug="' + product.slug + '">Favorite</button></div></div>' +
    '</div></section>' +
    '<section class="section"><div class="shell"><p class="eyebrow">Related Products</p><div class="grid three">' + related + "</div></div></section>"
  );
};

window.Screens.initProductDetail = function () {
  document.querySelectorAll(".thumbs img").forEach(function (img) {
    img.addEventListener("click", function () {
      document.getElementById("mainImage").src = img.src;
    });
  });

  document.querySelectorAll(".favorite-detail-btn").forEach(function (button) {
    var key = "favorite-product-" + button.dataset.slug;
    function render() {
      var saved = localStorage.getItem(key) === "yes";
      button.classList.toggle("active", saved);
      button.textContent = saved ? "Favorited" : "Favorite";
      button.setAttribute("aria-pressed", saved ? "true" : "false");
    }
    button.addEventListener("click", function () {
      var saved = localStorage.getItem(key) === "yes";
      if (saved) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, "yes");
      }
      render();
    });
    render();
  });
};
