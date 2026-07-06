(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Projects",
      title: "Export programs delivered across countries and industries.",
      text: "Review country coverage, supplied products, industries, duration, stories, and an interactive global map screen.",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1800&q=80",
      actions: [{ label: "View Products", href: "products.html" }, { label: "Start Inquiry", href: "contact.html" }]
    }) + window.Screens.projectsFull();

  window.renderLayout();
})();
