function switchTab(tabId) {
  // Esconde todas as abas
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Exibe a aba clicada
  document.getElementById(tabId).classList.add("active");
}
