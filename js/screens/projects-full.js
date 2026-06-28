window.Screens = window.Screens || {};

window.Screens.projectsFull = function () {
  return (
    window.Screens.globalPresence() +
    '<section class="section"><div class="shell grid three">' +
    window.SiteData.projects
      .map(function (project) {
        return '<article class="card project-card fade-in"><img src="' + project.image + '" alt="' + project.title + '"><div class="body"><span class="pill">' + project.country + '</span><h3>' + project.title + '</h3><p>' + project.story + '</p><div class="meta"><span class="pill">' + project.products + '</span><span class="pill">' + project.industry + '</span><span class="pill">' + project.duration + '</span></div></div></article>';
      })
      .join("") +
    "</div></section>"
  );
};
