window.Screens = window.Screens || {};

window.Screens.latestBlogs = function () {
  return (
    '<section class="section alt"><div class="shell"><div class="section-head"><div><p class="eyebrow">Latest Blogs</p><h2 class="section-title">Export thinking for serious buyers.</h2></div><a class="btn" href="blogs.html">Read Articles</a></div><div class="grid three">' +
    window.SiteData.blogs
      .map(function (blog) {
        return '<article class="card blog-card fade-in"><img src="' + blog.image + '" alt="' + blog.title + '"><div class="body"><span class="pill">' + blog.category + '</span><h3>' + blog.title + '</h3><p>' + blog.excerpt + '</p><div style="margin-top:16px"><a class="btn secondary" href="blog-detail.html?slug=' + blog.slug + '">Read More</a></div></div></article>';
      })
      .join("") +
    "</div></div></section>"
  );
};
