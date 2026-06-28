window.Screens = window.Screens || {};

window.Screens.blogsFull = function () {
  return (
    '<section class="section"><div class="shell blog-layout">' +
    '<div><div class="toolbar blog-toolbar"><input class="field" id="blogSearch" placeholder="Search articles"><select class="field"><option>All Categories</option><option>Sourcing</option><option>Logistics</option><option>Compliance</option></select></div><div class="grid two" id="blogGrid">' +
    window.SiteData.blogs
      .map(function (blog) {
        return '<article class="card blog-card fade-in"><img src="' + blog.image + '" alt="' + blog.title + '"><div class="body"><span class="pill">' + blog.category + '</span><h3>' + blog.title + '</h3><p>' + blog.excerpt + '</p><div class="meta"><span class="pill">' + blog.read + '</span>' + blog.tags.map(function (tag) { return '<span class="pill">' + tag + '</span>'; }).join("") + '</div><a class="btn secondary" href="blog-detail.html?slug=' + blog.slug + '">Read Article</a></div></article>';
      })
      .join("") +
    '</div></div><aside class="card pad"><h3>Popular Posts</h3><p>Supplier reliability</p><p>Packaging freight risk</p><p>Origin transparency</p><h3>Newsletter</h3><input class="field" placeholder="Email address"><button class="btn" style="margin-top:12px">Subscribe</button><h3>Social Share</h3><div class="btn-row"><button class="icon-btn">in</button><button class="icon-btn">x</button><button class="icon-btn">f</button></div></aside></div></section>'
  );
};

window.Screens.initBlogs = function () {
  var search = document.getElementById("blogSearch");
  var grid = document.getElementById("blogGrid");
  search.addEventListener("input", function () {
    var value = search.value.toLowerCase();
    grid.querySelectorAll(".blog-card").forEach(function (card) {
      card.classList.toggle("hidden", card.textContent.toLowerCase().indexOf(value) === -1);
    });
  });
};
