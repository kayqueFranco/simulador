/**
 * Simulador dos operadores lógicos AND- OR - NOT
 * @author Kayque Francp
 */

let recive  //armazena o parâmetro(valor) recebido do html
//as variáveis abaixo são parte para identificar 
//se o interrupitor está ligado ou desligado(false = desligado| true = ligado)
let sw1 = false
let sw2 = false

let broken = false

// a linh a baixo cria uma variavel que identifica uma página no html
let path = window.location.pathname
//alert(path) //apoio ao entendimento da lógica

function sw(recive) {
    //  console.log(recive) //apoio a logica

    // Logia para os interrupitores
    if (recive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    }
    else if (recive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false

    }

    else if (recive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    }
    else if (recive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }
    if (recive === 3) {
        //A linha abaixo cria um objeto usado a classe Audio
        let som = new Audio()
        console.log(typeof (som))
        som.src = "sound/glassbreaking.wav"
        som.play()
        //trocar a imagem (Manipulação de tom)
        document.getElementById('lamp').src = "img/broken.jpg"
        broken = true
    }

    // logica para o operador  AMd
    if (path === "/and.html" && broken !== true) {
        if (sw1 === true && sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }
        else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }

    // logica para o operador  OR
    if (path === "/or.html" && broken !== true) {
        if (sw1 === true || sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }
        else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }

    // logica para o operador  NOT
    if (path === "/not.html" && broken !== true) {
        if (!sw1) {
            document.getElementById('lamp').src = "img/on.jpg"
        }
        else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }


}

