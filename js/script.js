const buttons = document.querySelectorAll(".zoom");
const modal = document.querySelector(".modal");
const interne = document.querySelector(".interne")

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    
    button.addEventListener("click", openModal);
}

function openModal(){
    
    //Chercher l'Image
    const path = this.src;
    const image = document.createElement("img");
    image.src = path;
    image.classList.add("ajout")
    interne.appendChild(image);
    
    //Chercher Nom
    const titre = this.nextElementSibling.textContent;
    const nom = document.createElement("h2");
    nom.textContent = titre;
    nom.classList.add("ajout");
    interne.appendChild(nom);

    //Chercher poste
    const professionnel = this.nextElementSibling.nextElementSibling.textContent;
    const poste = document.createElement("p");
    poste.textContent = professionnel;
    poste.classList.add("ajout");
    interne.appendChild(poste);

    //Afficher la modal
    modal.classList.add("visible");

    image.addEventListener("click", closeModal);
}

    //Fermeture de la modale
function closeModal(e){
    const sup = document.querySelectorAll(".ajout");
    modal.classList.remove("visible");
    for (let i = 0; i < sup.length; i++) {
        interne.removeChild(sup[i]);
    }
}