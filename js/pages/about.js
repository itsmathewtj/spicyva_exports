(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "About Spicyva",
      title: "A global trade house built on quality, clarity, and trust.",
      text: "Our company story, mission, vision, values, leadership, process, certificates, achievements, and gallery are presented as dedicated screens.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
      actions: [{ label: "View Services", href: "services.html" }, { label: "Contact Us", href: "contact.html" }]
    }) + window.Screens.aboutFull();

  window.renderLayout();
})();
