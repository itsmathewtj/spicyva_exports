window.Screens = window.Screens || {};

window.Screens.blogDetail = function (blog) {
  return (
    '<article class="section" style="padding-top:130px"><div class="shell" style="max-width:880px"><p class="eyebrow">' + blog.category + '</p><h1 class="section-title">' + blog.title + '</h1><div class="meta"><span class="pill">' + blog.read + '</span>' + blog.tags.map(function (tag) { return '<span class="pill">' + tag + '</span>'; }).join("") + '</div><img class="gallery-main" src="' + blog.image + '" alt="' + blog.title + '" style="margin:28px 0"><p class="section-lead">' + blog.excerpt + '</p><p>' + blog.body + '</p><p>For importers, the strongest export programs are built with written specifications, predictable communication, and stage-wise approval. That structure helps teams compare offers, reduce shipment ambiguity, and build repeatable purchase cycles.</p><div class="btn-row"><button class="btn secondary">Share</button><a class="btn" href="blogs.html">Related Articles</a></div></div></article>'
  );
};
