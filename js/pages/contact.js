(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Contact",
      title: "Start a quotation, sourcing request, or export partnership.",
      text: "Use the form, phone, email, office address, WhatsApp, and FAQ screens to convert inquiries quickly.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80",
      actions: [{ label: "Send Inquiry", href: "#contactForm" }, { label: "View Products", href: "products.html" }]
    }) + window.Screens.contactFull();

  window.renderLayout();
})();
