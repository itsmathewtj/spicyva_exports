window.Screens = window.Screens || {};

window.Screens.productCatalog = function () {
  var products = window.SiteData.products.map(window.Screens.productCard).join("");
  return (
    '<section class="section product-catalog-section"><div class="shell">' +
    '<div class="catalog-heading"><p class="eyebrow">Product Catalog</p><h1 class="section-title">Export-ready spices and agri products.</h1><p class="section-lead">Browse clean product cards with full-width images and quick detail pages.</p></div>' +
    '<div class="grid three product-grid" id="productGrid">' + products + "</div>" +
    "</div></section>"
  );
};

function uniqueOptions(key) {
  var seen = {};
  return window.SiteData.products
    .filter(function (product) {
      if (seen[product[key]]) return false;
      seen[product[key]] = true;
      return true;
    })
    .map(function (product) {
      return '<option value="' + product[key] + '">' + product[key] + "</option>";
    })
    .join("");
}

window.Screens.initCatalog = function () {
  var grid = document.getElementById("productGrid");
  if (grid) window.Screens.initProductActions(grid);
};
