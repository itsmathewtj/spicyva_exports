window.Screens = window.Screens || {};

window.Screens.globalPresence = function () {
  var pins = window.SiteData.countries
    .map(function (country) {
      return '<button class="pin" style="left:' + country[3] + ';top:' + country[4] + '" title="' + country[0] + '"><span><strong>' + country[0] + "</strong><br>" + country[1] + "<br>" + country[2] + " partnership</span></button>";
    })
    .join("");

  return (
    '<section class="section alt global-section"><div class="shell grid two global-grid"><div><p class="eyebrow">Global Presence</p><h2 class="section-title">Served markets across continents.</h2><p class="section-lead">Hover the highlighted trade points to view country, exported products, and partnership history.</p><div class="global-proof"><span>50+ served markets</span><span>Air, sea, and multimodal lanes</span><span>Repeat B2B programs</span></div></div><div class="map fade-in"><img class="global-map-photo" src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1100&q=82" alt="Export containers and global logistics route">' +
    pins +
    "</div></div></section>"
  );
};
