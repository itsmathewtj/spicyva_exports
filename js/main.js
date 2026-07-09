(function () {
  var data = window.SiteData;
  var page = document.body.dataset.page || "home";
  var contacts = {
    phone: "+91 98765 43210",
    phoneHref: "tel:+919876543210",
    whatsappHref: "https://wa.me/919876543210",
    email: "sales@spicyvaexports.com",
    emailHref: "mailto:sales@spicyvaexports.com",
    instagramHref: "https://instagram.com/spicyvaexports",
    facebookHref: "https://facebook.com/spicyvaexports"
  };

  function icon(name) {
    var icons = {
      phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.59-3.05 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.18 4.2 2 2 0 0 1 4.17 2h3a2 2 0 0 1 2 1.72c.12.92.33 1.82.62 2.68a2 2 0 0 1-.45 2.11L8.09 9.76a16 16 0 0 0 6.15 6.15l1.25-1.25a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.68.62A2 2 0 0 1 22 16.9z"/></svg>',
      whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0 11.9 11.9 0 0 0 1.8 17.9L0 24l6.3-1.7A11.9 11.9 0 0 0 12.1 24 11.9 11.9 0 0 0 24 12.1a11.8 11.8 0 0 0-3.5-8.6zm-8.4 18.4c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.5 4.6zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9.4 9.4 0 0 1-1.6-2.1c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>',
      email: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
      instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.8A4.2 4.2 0 1 1 12 16.2 4.2 4.2 0 0 1 12 7.8zm0 2A2.2 2.2 0 1 0 12 14.2 2.2 2.2 0 0 0 12 9.8zM17.4 6.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>',
      facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5V6.6c0-.8.6-1 1.1-1H18V2h-3.7C10.6 2 10 4.8 10 6.3v2.2H7v3.8h3V22h4v-9.7h3.3l.5-3.8H14z"/></svg>',
      location: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>'
    };
    return icons[name] || "";
  }

  function contactIcon(name, href, label, extra) {
    return '<a class="contact-icon ' + (extra || "") + '" href="' + href + '" aria-label="' + label + '"' + (href.indexOf("http") === 0 && name !== "whatsapp" ? ' target="_blank" rel="noopener"' : "") + ">" + icon(name) + "</a>";
  }

  function navLinks() {
    return data.nav
      .map(function (item) {
        var active = item[2] === page ? " active" : "";
        return '<a class="nav-link' + active + '" href="' + item[1] + '">' + item[0] + "</a>";
      })
      .join("");
  }

  function renderHeader() {
    document.getElementById("site-header").innerHTML =
      '<header class="site-header" id="header">' +
      '<div class="shell nav">' +
      '<a class="brand" href="index.html" aria-label="Spicyva Exports home">' +
      '<img class="brand-logo" src="assets/Logos.png" alt="Spicyva Exports"></a>' +
      '<div class="nav-wrap"><nav class="nav-links" aria-label="Primary navigation">' +
      navLinks() +
      '</nav><div class="mega"><div class="mega-grid">' +
      '<div class="mega-card"><strong>Global export desk</strong><p>Products, sourcing, documentation, and freight coordination from one experienced team.</p></div>' +
      '<div class="mega-card"><strong>Popular services</strong><p>Product sourcing, customs clearance, packaging, and door-to-door delivery.</p></div>' +
      '<div class="mega-card"><strong>Buyer tools</strong><p>Catalog downloads, quote requests, comparison, and recently viewed products.</p></div>' +
      "</div></div></div>" +
      '<div class="nav-tools">' +
      '<button class="icon-btn menu-toggle" id="menuBtn" title="Menu" aria-label="Open menu"><span></span><span></span><span></span></button>' +
      "</div></div></header>";
  }

  function renderFooter() {
    document.getElementById("site-footer").innerHTML =
      '<footer class="footer"><div class="shell footer-grid">' +
      '<div class="footer-about"><a class="brand" href="index.html"><img class="brand-logo footer-brand-logo" src="assets/Logos.png" alt="Spicyva Exports"></a><p>Premium international export partner for products, sourcing, packaging, logistics, and long-term B2B trade programs.</p><div class="footer-socials">' +
      contactIcon("whatsapp", contacts.whatsappHref, "WhatsApp Spicyva Exports") +
      contactIcon("phone", contacts.phoneHref, "Call Spicyva Exports") +
      contactIcon("email", contacts.emailHref, "Email Spicyva Exports") +
      contactIcon("instagram", contacts.instagramHref, "Instagram") +
      contactIcon("facebook", contacts.facebookHref, "Facebook") +
      "</div></div>" +
      '<div><h3>Company</h3><p><a href="about.html">About</a></p><p><a href="services.html">Services</a></p><p><a href="contact.html">Contact</a></p></div>' +
      '<div><h3>Trade Desk</h3><p><a href="services.html">Services</a></p><p><a href="products.html">Products</a></p><p><a href="contact.html">Quote Request</a></p></div>' +
      '<div class="footer-contact"><h3>Contact</h3><p><span class="mini-icon">' + icon("location") + '</span><strong>Location:</strong> Chennai, Tamil Nadu, India</p><p><span class="mini-icon">' + icon("phone") + '</span><strong>Phone:</strong> <a href="' + contacts.phoneHref + '">' + contacts.phone + '</a></p><p><span class="mini-icon">' + icon("whatsapp") + '</span><strong>WhatsApp:</strong> <a href="' + contacts.whatsappHref + '">Chat with us</a></p><p><span class="mini-icon">' + icon("email") + '</span><strong>Email:</strong> <a href="' + contacts.emailHref + '">' + contacts.email + '</a></p></div>' +
      '</div><div class="shell footer-copy"><span>(c) 2026 Spicyva Exports. Built for global trade.</span><span class="designer-line">Designed by <a href="https://itsmathewtj.github.io/TWODLE_MEDIA/" target="_blank" rel="noopener">twopdle MEDIA</a></span></div></footer>' +
      '<div class="ambient-spices" aria-hidden="true"><span class="spice-drop drop-one"></span><span class="spice-drop drop-two"></span><span class="spice-drop drop-three"></span><span class="spice-drop drop-four"></span><span class="spice-drop drop-five"></span><span class="spice-drop drop-six"></span><span class="spice-drop drop-seven"></span><span class="spice-drop drop-eight"></span><span class="spice-drop drop-nine"></span><span class="spice-drop drop-ten"></span><span class="spice-drop drop-eleven"></span><span class="spice-drop drop-twelve"></span></div>' +
      '<div class="contact-rail" aria-label="Quick contact"><a class="contact-float" href="' + contacts.phoneHref + '" aria-label="Call Spicyva Exports">' + icon("phone") + '</a><a class="contact-float" href="' + contacts.whatsappHref + '" aria-label="WhatsApp Spicyva Exports">' + icon("whatsapp") + '</a><a class="contact-float" href="' + contacts.emailHref + '" aria-label="Email Spicyva Exports">' + icon("email") + "</a></div>" +
      '<div class="cookie" id="cookieBox"><strong>Cookie preferences</strong><p>We use essential cookies and simple analytics placeholders to improve the export inquiry experience.</p><button class="btn" id="cookieBtn">Accept</button></div>';
  }

  function initGlobalInteractions() {
    var header = document.getElementById("header");
    var menuBtn = document.getElementById("menuBtn");
    var cookieBox = document.getElementById("cookieBox");
    var cookieBtn = document.getElementById("cookieBtn");

    if (localStorage.getItem("cookies-ok")) cookieBox.classList.add("hidden");

    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 20);
    });

    menuBtn.addEventListener("click", function () {
      header.classList.toggle("menu-open");
    });

    cookieBtn.addEventListener("click", function () {
      localStorage.setItem("cookies-ok", "yes");
      cookieBox.classList.add("hidden");
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".fade-in").forEach(function (item) {
      observer.observe(item);
    });
  }

  window.renderLayout = function () {
    renderHeader();
    renderFooter();
    initGlobalInteractions();
  };

  window.escapeHtml = function (value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
    });
  };
})();
