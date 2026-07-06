(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Export Services",
      title: "End-to-end support for demanding international buyers.",
      text: "Separate detailed service screens cover consultation, sourcing, documentation, packaging, freight, warehousing, customs, and door-to-door delivery.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1800&q=80",
      actions: [{ label: "Explore Products", href: "products.html" }, { label: "Request Quote", href: "contact.html" }]
    }) + window.Screens.servicesFull();

  window.renderLayout();
})();
