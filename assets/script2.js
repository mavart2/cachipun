function aleatoria(min, max){
    return Math.floor(Math.random()* (max - min +1)+ min)
}
function eleccion(jugada){
    let resultado=""
    if(jugada == 1){
    resultado = "piedra 🪨" 
}else if(jugada == 2){
    resultado =  "papel 📄 "
}else if(jugada == 3){
    resultado =  "tijera ✂️"

}else{
    resultado="Mal elegido"
}
return resultado

}

let jugador = 0
//let min = 1
//let max = 3
let pc =0
let triunfos=0
let perdidas=0

while(triunfos<3 && perdidas<3){
    pc = aleatoria(1,3)
    jugador = Number(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"))

alert("PC elige: " + eleccion(pc))
alert("Tu eliges: " +  eleccion(jugador))

//combate

/*if(pc==jugador){
    alert("empate")
}else if(jugador==1 && pc == 3){
    alert("Ganaste")
    triunfos=triunfos + 1
}else if(jugador==2 && pc == 1){
    alert("Ganaste")
    triunfos=triunfos + 1
}else if(jugador==3 && pc == 2){
    alert("Ganaste")
    triunfos=triunfos + 1
}
else{
    alert("Perdiste")
    perdidas = perdidas + 1
}*/
if(pc == jugador) {
    alert("EMPATE")
} else if(
    (jugador == 1 && pc == 3) || 
    (jugador == 2 && pc ==1) || 
    (jugador ==3& pc ==2)
) {
    triunfos++
    alert("GANASTE")
} else {
    perdidas++
    alert("PERDISTE")
}

}
alert("Ganaste "+triunfos+" veces. Perdiste "+
    perdidas+" veces"
)

