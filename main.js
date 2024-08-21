console.log("connected.");

const faq = document.querySelectorAll(".faq__list");

function toggleFaq() {
  const isExpanded = this.getAttribute("aria-expanded") === "true";
  const contentId = this.getAttribute("aria-controls");
  const content = document.getElementById(contentId);
  const isHidden = content.getAttribute("aria-hidden") === "true";
  content.setAttribute("aria-hidden", !isHidden);
  this.setAttribute("aria-expanded", !isExpanded);
}

function init() {
  if (!faq.length) {
    return;
  }

  faq.forEach((component) => {
    component.dataset.state = "ready";

    const faqButtons = component.querySelectorAll(".faq__button");

    faqButtons.forEach((button) => {
      button.removeAttribute("title");
      button.removeAttribute("disabled");

      button.addEventListener("click", toggleFaq);
    });
  });
}

init();
