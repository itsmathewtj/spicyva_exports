(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Projects",
      title: "Export programs delivered across countries and industries.",
      text: "Review country coverage, supplied products, industries, duration, stories, and an interactive global map screen.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1800&q=80"
    }) + window.Screens.projectsFull();

  window.renderLayout();
})();
