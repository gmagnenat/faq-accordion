const faq = document.querySelectorAll(".faq__list");

function toggleFaq() {
  const isExpanded = this.getAttribute("aria-expanded") === "true";
  this.setAttribute("aria-expanded", !isExpanded);
}

function init() {
  if (!faq.length) {
    return;
  }

  faq.forEach((component) => {
    component.dataset.state = "ready";

    const faqItems = component.querySelectorAll(".faq__item");
    const faqButtons = component.querySelectorAll(".faq__button");

    faqItems.forEach((item) => {
      item.dataset.state = "ready";
    });

    faqButtons.forEach((button) => {
      button.removeAttribute("title");
      button.removeAttribute("disabled");

      button.addEventListener("click", toggleFaq);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
