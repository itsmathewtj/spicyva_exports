(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Trade Intelligence",
      title: "Professional articles for sourcing, logistics, and compliance.",
      text: "Browse posts with search, categories, tags, reading time, popular posts, related article paths, social share, and newsletter screens.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
    }) + window.Screens.blogsFull();

  window.renderLayout();
  window.Screens.initBlogs();
})();
