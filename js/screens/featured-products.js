window.Screens = window.Screens || {};

window.Screens.productCard = function (product) {
  return (
    '<article class="card product-card fade-in" data-slug="' + product.slug + '" data-category="' + product.category + '" data-country="' + product.country + '" data-industry="' + product.industry + '">' +
    '<a class="product-image-link" href="product-detail.html?slug=' + product.slug + '"><img src="' + product.image + '" alt="' + product.name + '"></a>' +
    '<div class="body">' +
    "<h3>" + product.name + "</h3><p>" + product.description + "</p>" +
    '<p class="card-extra">' + product.cardExtra + "</p>" +
    '<div class="btn-row"><a class="btn secondary" href="product-detail.html?slug=' + product.slug + '">View Details</a></div>' +
    "</div></article>"
  );
};

window.Screens.featuredProducts = function () {
  var featuredOrder = ["CARDAMOM", "BLACK PEPPER", "MACE & NUTMEG", "CINNAMON"];
  var cards = featuredOrder
    .map(function (name) {
      return window.SiteData.products.find(function (product) { return product.name === name; });
    })
    .filter(Boolean)
    .map(window.Screens.productCard)
    .join("");
  return (
    '<section class="section featured-products"><div class="shell"><div class="section-head"><div><p class="eyebrow">Featured Products</p><h2 class="section-title">A sharper catalog for global buyers.</h2><p class="section-lead">Product cards surface the details importers ask for first: origin, MOQ, lot status, and a clear next step.</p></div><a class="btn" href="products.html">Open Catalog</a></div><div class="grid four">' +
    cards +
    "</div></div></section>"
  );
};

window.Screens.initProductActions = function (scope) {
  var root = scope || document;
  root.addEventListener("click", function (event) {
    if (event.target.classList.contains("wishlist-btn")) {
      event.target.textContent = event.target.textContent === "Save" ? "Saved" : "Save";
    }
  });
};
