document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");

  options.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');

    radio.addEventListener("change", () => {
      options.forEach(opt => {
        opt.classList.remove("expanded", "most-popular");
        opt.classList.add("collapsed");
      });

      option.classList.add("expanded", "most-popular");
      option.classList.remove("collapsed");
    });
  });

  // Auto-expand on load if one is checked
  const checked = document.querySelector('.option input[type="radio"]:checked');
  if (checked) {
    const parent = checked.closest('.option');
    parent.classList.add("expanded", "most-popular");
    parent.classList.remove("collapsed");
  }
});
