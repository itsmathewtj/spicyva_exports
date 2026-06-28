window.Screens = window.Screens || {};

window.Screens.productCard = function (product) {
  return (
    '<article class="card product-card fade-in" data-slug="' + product.slug + '" data-category="' + product.category + '" data-country="' + product.country + '" data-industry="' + product.industry + '">' +
    '<img src="' + product.image + '" alt="' + product.name + '">' +
    '<div class="body"><div class="inline-actions" style="justify-content:space-between"><span class="pill">' + product.category + '</span><button class="icon-btn wishlist-btn" title="Wishlist">Save</button></div>' +
    "<h3>" + product.name + "</h3><p>" + product.description + "</p>" +
    '<div class="meta"><span class="pill">' + product.country + '</span><span class="pill">' + product.availability + '</span><span class="pill">MOQ ' + product.moq + '</span></div>' +
    '<div class="btn-row"><a class="btn secondary" href="product-detail.html?slug=' + product.slug + '">View Details</a><button class="btn compare-btn" data-slug="' + product.slug + '" data-name="' + product.name + '">Compare</button></div>' +
    "</div></article>"
  );
};

window.Screens.featuredProducts = function () {
  var cards = window.SiteData.products.slice(0, 4).map(window.Screens.productCard).join("");
  return (
    '<section class="section featured-products"><div class="shell"><div class="section-head"><div><p class="eyebrow">Featured Products</p><h2 class="section-title">Export-ready catalog highlights.</h2><p class="section-lead">Searchable product cards with origin, availability, MOQ, wishlist, comparison, and clear detail actions.</p></div><a class="btn" href="products.html">Open Catalog</a></div><div class="compare-status" id="featuredCompareTray">Choose up to 3 products to compare buyer-ready details.</div><div class="grid four">' +
    cards +
    "</div></div></section>"
  );
};

window.Screens.initProductActions = function (scope) {
  var root = scope || document;
  var selected = [];
  var productsBySlug = {};
  window.SiteData.products.forEach(function (product) {
    productsBySlug[product.slug] = product;
  });

  function ensurePanel() {
    var panel = document.getElementById("comparePanel");
    if (panel) return panel;
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div class="compare-modal hidden" id="comparePanel" aria-live="polite" role="dialog" aria-modal="true" aria-labelledby="compareTitle">' +
      '<div class="compare-panel">' +
        '<div class="compare-panel-head"><div><p class="eyebrow">Product Compare</p><h3 id="compareTitle">Buyer-ready difference check</h3></div><button class="icon-btn" id="compareClose" title="Close compare">Close</button></div>' +
        '<div class="compare-table" id="compareTable"></div>' +
      "</div>" +
      "</div>"
    );
    document.getElementById("compareClose").addEventListener("click", function () {
      document.getElementById("comparePanel").classList.add("hidden");
    });
    document.getElementById("comparePanel").addEventListener("click", function (event) {
      if (event.target.id === "comparePanel") event.target.classList.add("hidden");
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") document.getElementById("comparePanel").classList.add("hidden");
    });
    return document.getElementById("comparePanel");
  }

  function renderCompare() {
    var tray = document.getElementById("compareTray") || document.getElementById("featuredCompareTray");
    var names = selected.map(function (slug) {
      return productsBySlug[slug].name;
    });
    if (tray) tray.textContent = selected.length ? "Compare: " + names.join(" vs ") : "Choose up to 3 products to compare buyer-ready details.";

    root.querySelectorAll(".compare-btn").forEach(function (button) {
      var active = selected.indexOf(button.dataset.slug) > -1;
      button.classList.toggle("active", active);
      button.textContent = active ? "Selected" : "Compare";
    });

    if (!selected.length) {
      var currentPanel = document.getElementById("comparePanel");
      if (currentPanel) currentPanel.classList.add("hidden");
      return;
    }

    var panel = ensurePanel();
    var products = selected.map(function (slug) {
      return productsBySlug[slug];
    });
    var rows = [
      ["Origin", "country"],
      ["Availability", "availability"],
      ["MOQ", "moq"],
      ["Packaging", "packaging"],
      ["Shipping", "shipping"],
      ["Certifications", "certifications"]
    ];
    var columns = ' style="grid-template-columns:minmax(120px,0.7fr) repeat(' + products.length + ', minmax(150px, 1fr))"';
    document.getElementById("compareTable").innerHTML =
      '<div class="compare-row compare-row-head"' + columns + '><span>Factor</span>' +
      products.map(function (product) { return "<strong>" + product.name + "</strong>"; }).join("") +
      "</div>" +
      rows.map(function (row) {
        return '<div class="compare-row"' + columns + '><span>' + row[0] + "</span>" + products.map(function (product) {
          return "<p>" + product[row[1]] + "</p>";
        }).join("") + "</div>";
      }).join("") +
      '<div class="compare-row"' + columns + '><span>Best for</span>' +
      products.map(function (product) { return "<p>" + product.industry + " buyers needing " + product.category.toLowerCase() + " supply.</p>"; }).join("") +
      "</div>";
    panel.classList.remove("hidden");
  }

  root.addEventListener("click", function (event) {
    if (event.target.classList.contains("wishlist-btn")) {
      event.target.textContent = event.target.textContent === "Save" ? "Saved" : "Save";
    }

    if (event.target.classList.contains("compare-btn")) {
      var slug = event.target.dataset.slug;
      var existing = selected.indexOf(slug);
      if (existing > -1) {
        selected.splice(existing, 1);
      } else {
        if (selected.length === 3) selected.shift();
        selected.push(slug);
      }
      renderCompare();
    }
  });
};
