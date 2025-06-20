document.addEventListener("DOMContentLoaded", () => {
  console.log("Site chargé avec succès.");

  // Ajout d'un effet simple sur les liens
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("mouseover", () => link.style.opacity = 0.7);
    link.addEventListener("mouseout", () => link.style.opacity = 1);
  });
});
