(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "B2B Marketplace Catalog",
      title: "Export-ready products with buyer-grade details.",
      text: "Search, filter, compare, wishlist, switch layouts, review MOQ and origin, then open dedicated product detail screens.",
      image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1800&q=80"
    }) + window.Screens.productCatalog();

  window.renderLayout();
  window.Screens.initCatalog();
})();
