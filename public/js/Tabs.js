function switchTab(tabName) {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  switchTab("team");
});
