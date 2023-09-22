function check() {
let prix = document.getElementById('prix').value;
let remise = document.getElementById('remise').value;
let prixRemisee = (prix * remise)/100;
let total = prix - prixRemisee;

document.getElementById('resultat').innerHTML = total.toPrecision(4) + " €";
}
