(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "B2B Marketplace Catalog",
      title: "Export-ready products with buyer-grade details.",
      text: "Search, filter, wishlist, switch layouts, review MOQ and origin, then open dedicated product detail screens.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=80",
      actions: [{ label: "Browse Catalog", href: "#productGrid" }, { label: "Request Quote", href: "contact.html" }]
    }) + window.Screens.productCatalog();

  window.renderLayout();
  window.Screens.initCatalog();
})();
