(function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("slug") || window.SiteData.products[0].slug;
  var product = window.SiteData.products.find(function (item) {
    return item.slug === slug;
  }) || window.SiteData.products[0];

  document.title = product.name + " | Spicyva Exports";
  document.getElementById("app").innerHTML = window.Screens.productDetail(product);

  window.renderLayout();
  window.Screens.initProductDetail();
})();
