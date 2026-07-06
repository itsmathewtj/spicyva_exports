window.Screens = window.Screens || {};

window.Screens.productCard = function (product) {
  return (
    '<article class="card product-card fade-in" data-slug="' + product.slug + '" data-category="' + product.category + '" data-country="' + product.country + '" data-industry="' + product.industry + '">' +
    '<img src="' + product.image + '" alt="' + product.name + '">' +
    '<div class="body"><div class="inline-actions" style="justify-content:space-between"><span class="pill">' + product.category + '</span><button class="icon-btn wishlist-btn" title="Wishlist">Save</button></div>' +
    "<h3>" + product.name + "</h3><p>" + product.description + "</p>" +
    '<div class="meta"><span class="pill">' + product.country + '</span><span class="pill">' + product.availability + '</span><span class="pill">MOQ ' + product.moq + '</span></div>' +
    '<div class="btn-row"><a class="btn secondary" href="product-detail.html?slug=' + product.slug + '">View Details</a></div>' +
    "</div></article>"
  );
};

window.Screens.featuredProducts = function () {
  var cards = window.SiteData.products.slice(0, 4).map(window.Screens.productCard).join("");
  return (
    '<section class="section featured-products"><div class="shell"><div class="section-head"><div><p class="eyebrow">Featured Products</p><h2 class="section-title">Export-ready catalog highlights.</h2><p class="section-lead">Searchable product cards with origin, availability, MOQ, wishlist, and clear detail actions.</p></div><a class="btn" href="products.html">Open Catalog</a></div><div class="grid four">' +
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
