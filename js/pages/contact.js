(function () {
  document.body.classList.add("header-over-hero");
  document.getElementById("app").innerHTML =
    window.Screens.pageHero({
      eyebrow: "Contact",
      title: "Start a quotation, sourcing request, or export partnership.",
      text: "Use the form, phone, email, office address, WhatsApp, and FAQ screens to convert inquiries quickly.",
      image: "assets/1212.png",
      actions: [{ label: "Send Inquiry", href: "#contactForm" }, { label: "View Products", href: "products.html" }]
    }) + window.Screens.contactFull();

  window.renderLayout();
})();
