(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Export Services",
      title: "End-to-end support for demanding international buyers.",
      text: "Separate detailed service screens cover consultation, sourcing, documentation, packaging, freight, warehousing, customs, and door-to-door delivery.",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1800&q=80"
    }) + window.Screens.servicesFull();

  window.renderLayout();
})();
