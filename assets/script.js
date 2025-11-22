function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    if (jugada == 1) return "🪨 Piedra"
    if (jugada == 2) return "📄 Papel"
    if (jugada == 3) return "✂️ Tijera"
    return "Mal elegido"
}

let triunfos = 0
let perdidas = 0

function jugar(jugador) {
    if (triunfos >= 3 || perdidas >= 3) return

    let pc = aleatoria(1, 3)

    document.getElementById("jugador").textContent = "Tú elegiste: " + eleccion(jugador)
    document.getElementById("pc").textContent = "La PC eligió: " + eleccion(pc)

    let mensaje = ""

    if (pc == jugador) {
        mensaje = "🤝 ¡EMPATE!"
    } else if (
        (jugador == 1 && pc == 3) ||
        (jugador == 2 && pc == 1) ||
        (jugador == 3 && pc == 2)
    ) {
        triunfos++
        mensaje = "🎉 ¡GANASTE!"
    } else {
        perdidas++
        mensaje = "❌ PERDISTE"
    }

    document.getElementById("resultado").textContent = mensaje
    document.getElementById("marcador").textContent = `Ganaste: ${triunfos} · Perdiste: ${perdidas}`

    if (triunfos >= 3) {
        document.getElementById("resultado").textContent = "🏆 ¡GANASTE EL JUEGO COMPLETO!"
        bloquearBotones()
    }

    if (perdidas >= 3) {
        document.getElementById("resultado").textContent = "💀 Perdiste el juego completo"
        bloquearBotones()
    }
}

function bloquearBotones() {
    document.querySelectorAll(".btn-jugada").forEach(btn => {
        btn.disabled = true
        btn.style.opacity = "0.5"
        btn.style.cursor = "not-allowed"
    })

    document.getElementById("reiniciar").style.display = "block"
}

function reiniciarJuego() {
    triunfos = 0
    perdidas = 0

    document.getElementById("jugador").textContent = ""
    document.getElementById("pc").textContent = ""
    document.getElementById("resultado").textContent = ""
    document.getElementById("marcador").textContent = "Ganaste: 0 · Perdiste: 0"

    document.querySelectorAll(".btn-jugada").forEach(btn => {
        btn.disabled = false
        btn.style.opacity = "1"
        btn.style.cursor = "pointer"
    })

    document.getElementById("reiniciar").style.display = "none"
}

