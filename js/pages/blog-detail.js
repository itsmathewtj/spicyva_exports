(function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("slug") || window.SiteData.blogs[0].slug;
  var blog = window.SiteData.blogs.find(function (item) {
    return item.slug === slug;
  }) || window.SiteData.blogs[0];

  document.title = blog.title + " | Spicyva Exports";
  document.getElementById("app").innerHTML = window.Screens.blogDetail(blog);

  window.renderLayout();
})();
