window.Screens = window.Screens || {};

window.Screens.latestBlogs = function () {
  var cards = [
    {
      image: "assets/222.png",
      title: "Premium Indian Spices",
      text: "Export quality spices prepared for global standards."
    },
    {
      image: "assets/333.png",
      title: "Global Agro Exports",
      text: "Trusted sourcing for spices, coconut, grains, and agri products."
    },
    {
      image: "assets/444.png",
      title: "Worldwide Delivery",
      text: "Connecting India to global markets with dependable logistics."
    }
  ];
  return (
    '<section class="section agro-story-section"><div class="shell"><div class="section-head"><div><p class="eyebrow">Export Highlights</p><h2 class="section-title">Built around product quality, trust, and delivery.</h2></div></div><div class="agro-story-grid">' +
    cards
      .map(function (card) {
        return '<article class="agro-story-card fade-in"><img src="' + card.image + '" alt="' + card.title + '"></article>';
      })
      .join("") +
    '</div></div></section>'
  );
};
