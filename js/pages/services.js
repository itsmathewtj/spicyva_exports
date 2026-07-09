(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Services",
      title: "Simple export support, clearly packaged.",
      text: "Lean service cards for sourcing, paperwork, packing, freight, and delivery.",
      image: "assets/777.png",
      actions: [{ label: "Explore Products", href: "products.html" }, { label: "Request Quote", href: "contact.html" }]
    }) + window.Screens.servicesFull();

  window.renderLayout();
})();
