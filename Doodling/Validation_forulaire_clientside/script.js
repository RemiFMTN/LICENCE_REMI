const mailInput = document.getElementById("email");
function verifier() {
  if (mailInput.value === "") {
    alert("Le champ mail est vide !");
  } else if (!mailInput.value.includes("@")) {
    alert("Adresse mail invalide !");
  } else if (!mailInput.value.lenght < 5) {
    alert("Adresse mail trop courte !");
  } else {
    alert("Le formulaire a été envoyé !");
  }
}
