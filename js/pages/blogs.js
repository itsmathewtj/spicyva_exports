(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Trade Intelligence",
      title: "Professional articles for sourcing, logistics, and compliance.",
      text: "Browse posts with search, categories, tags, reading time, popular posts, related article paths, social share, and newsletter screens.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80",
      actions: [{ label: "Browse Posts", href: "#blogGrid" }, { label: "Contact Us", href: "contact.html" }]
    }) + window.Screens.blogsFull();

  window.renderLayout();
  window.Screens.initBlogs();
})();
