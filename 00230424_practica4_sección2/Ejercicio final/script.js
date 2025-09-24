function recordarActividad(dia, mensaje) {
    if (dia === "lunes") {
        return "Lunes: Debes atender un cliente especifico. " + mensaje;
    }
    if (dia === "martes") {
        return "Martes: Visita una agencia fuera de la ciudad. " + mensaje;
    }
    if (dia === "miercoles") {
        return "Miercoles: Debes llevar a tu hija al ballet. " + mensaje;
    }
    if (dia === "jueves") {
        return "Jueves: Debes priorizar entregas de desarrollo. " + mensaje;
    }
    if (dia === "viernes") {
        return "Viernes: Debes atender problemas de manera remota. " + mensaje;
    }
    if (dia === "sabado") {
        return "Sabado: Debes hacer lo que tu esposa quiera. " + mensaje;
    }
    if (dia === "domingo") {
        return "Domingo: Dia libre! " + mensaje;
    }
    return "Escribe un dia valido (lunes, martes, etc)";
}

function verificarActividad() {
    let dia = document.getElementById('dia').value;
    let resultado = recordarActividad(dia, "");
    document.getElementById('resultado').innerHTML = resultado;
}