(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Product Catalog",
      title: "Export-ready spices and agri products.",
      text: "Browse clean product cards with full-width images and quick detail pages.",
      image: "assets/1010.png",
      className: "product-map-hero",
      actions: [{ label: "Browse Products", href: "#productGrid" }, { label: "Contact Us", href: "contact.html" }]
    }) + window.Screens.productCatalog();

  window.renderLayout();
  window.Screens.initCatalog();
})();
