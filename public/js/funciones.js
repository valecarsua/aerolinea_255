function validateDates() {
    var departingDate = new Date(document.getElementById("departing").value);
    var returningDate = new Date(document.getElementById("returning").value);
    var currentDate = new Date();
    let errores = '';

    if (departingDate <= currentDate || returningDate <= currentDate) {
        errores += "Las fechas ingresadas deben ser superiores a fecha actual.";
    }
    

    if (departingDate > returningDate) {
        errores += " la fecha de partida no debe superar a la de regreso.";
    }

    document.getElementById('error').textContent = errores;
}