(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.homeHero() +
    window.Screens.aboutPreview() +
    window.Screens.servicesPreview() +
    window.Screens.featuredProducts() +
    window.Screens.whyChoose() +
    window.Screens.exportProcess() +
    window.Screens.globalPresence() +
    window.Screens.testimonials() +
    window.Screens.latestBlogs() +
    window.Screens.contactCta();

  window.renderLayout();
  window.Screens.initHomeHero();
  window.Screens.initProductActions(document.getElementById("app"));
  window.Screens.initWhyChoose();
})();
