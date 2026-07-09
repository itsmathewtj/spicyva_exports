(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "About Spicyva",
      title: "Quality-focused exports from India to global buyers.",
      text: "Simple sourcing, inspection, packing, paperwork, and shipment coordination for international food buyers.",
      image: "assets/888.png",
      actions: [{ label: "View Services", href: "services.html" }, { label: "Contact Us", href: "contact.html" }]
    }) + window.Screens.aboutFull();

  window.renderLayout();
})();
