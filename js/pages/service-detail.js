(function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("slug") || window.SiteData.services[0].slug;
  var service = window.SiteData.services.find(function (item) {
    return item.slug === slug;
  }) || window.SiteData.services[0];

  document.title = service.title + " | Spicyva Exports";
  document.getElementById("app").innerHTML = window.Screens.serviceDetail(service);

  window.renderLayout();
})();
