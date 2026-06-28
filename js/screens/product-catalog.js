window.Screens = window.Screens || {};

window.Screens.productCatalog = function () {
  var products = window.SiteData.products.map(window.Screens.productCard).join("");
  var categories = uniqueOptions("category");
  var countries = uniqueOptions("country");
  var industries = uniqueOptions("industry");
  return (
    '<section class="section"><div class="shell">' +
    '<div class="toolbar"><input class="field" id="searchInput" placeholder="Search products" aria-label="Search products">' +
    '<select class="field" id="categoryFilter"><option value="">All categories</option>' + categories + "</select>" +
    '<select class="field" id="countryFilter"><option value="">All countries</option>' + countries + "</select>" +
    '<select class="field" id="industryFilter"><option value="">All industries</option>' + industries + "</select>" +
    '<button class="btn secondary" id="viewToggle">List View</button></div>' +
    '<div class="product-visual-strip"><img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80" alt="Export spices"><img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80" alt="Export grains"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" alt="Export packaging"></div>' +
    '<div class="inline-actions" style="margin-bottom:20px"><span class="pill" id="resultCount"></span><span class="pill" id="compareTray">Compare: none</span><span class="pill">Recently Viewed ready</span><a class="pill" href="Spicyva-Product-Catalog.pdf" download>Download Catalog</a></div>' +
    '<div class="grid three product-grid" id="productGrid">' + products + "</div>" +
    '<div class="btn-row" style="justify-content:center;margin-top:32px"><button class="btn secondary">Previous</button><span class="pill">Page 1 of 2</span><button class="btn">Next</button></div>' +
    "</div></section>"
  );
};

function uniqueOptions(key) {
  var seen = {};
  return window.SiteData.products
    .filter(function (product) {
      if (seen[product[key]]) return false;
      seen[product[key]] = true;
      return true;
    })
    .map(function (product) {
      return '<option value="' + product[key] + '">' + product[key] + "</option>";
    })
    .join("");
}

window.Screens.initCatalog = function () {
  var search = document.getElementById("searchInput");
  var category = document.getElementById("categoryFilter");
  var country = document.getElementById("countryFilter");
  var industry = document.getElementById("industryFilter");
  var grid = document.getElementById("productGrid");
  var count = document.getElementById("resultCount");

  function filter() {
    var text = search.value.toLowerCase();
    var visible = 0;
    grid.querySelectorAll(".product-card").forEach(function (card) {
      var match =
        card.textContent.toLowerCase().indexOf(text) > -1 &&
        (!category.value || card.dataset.category === category.value) &&
        (!country.value || card.dataset.country === country.value) &&
        (!industry.value || card.dataset.industry === industry.value);
      card.classList.toggle("hidden", !match);
      if (match) visible += 1;
    });
    count.textContent = visible + " products found";
  }

  [search, category, country, industry].forEach(function (el) {
    el.addEventListener("input", filter);
  });

  document.getElementById("viewToggle").addEventListener("click", function (event) {
    grid.classList.toggle("list");
    event.target.textContent = grid.classList.contains("list") ? "Grid View" : "List View";
  });

  window.Screens.initProductActions(grid);

  filter();
};
