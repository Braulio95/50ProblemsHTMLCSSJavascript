const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((otroPanel) => {
      otroPanel.classList.remove("active");
    });
    panel.classList.toggle("active");
  });
});
