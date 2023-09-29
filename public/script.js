
function check() {
    let prix = parseFloat(document.getElementById('prix').value);
    let remise = parseFloat(document.getElementById('remise').value);

    if (isNaN(prix) || isNaN(remise)) {
        console.error("Les valeurs saisies ne sont pas valides.");
        return;
    }

    let total = prix - (prix * remise / 100);
    document.getElementById('resultat').innerHTML = total.toFixed(2) + " €";
}