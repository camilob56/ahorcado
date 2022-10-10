function dibujarCanvas() {
    tablero.lineWidth = 8;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F3F5F6';
    tablero.strokeStyle = '#8A3871';

    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(150, 600);
    tablero.lineTo(900, 600);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea() {
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F3F5F6';
    tablero.strokeStyle = '#0A3871';

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(250 + (anchura*i), 750)
        tablero.lineTo(300 + (anchura*i), 750)
    }
    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index) {
    tablero.font = 'bold 63px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#0A3871';

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 250 + (anchura*index), 720)
    tablero.stroke();
}

function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#0A3871';
    tablero.fillText(letra, 180 + (40*(10-errorsLeft)), 830, 40)
}

function dibujarAhorcado () {
    document.getElementById('vertical').style.display = 'none';
    document.getElementById('horizontal').style.display = 'none';
    document.getElementById('vertical2').style.display = 'none';
    document.getElementById('cabeza').style.display = 'none';
    document.getElementById('cuerpo').style.display = 'none';
    document.getElementById('brazo1').style.display = 'none';
    document.getElementById('brazo2').style.display = 'none';
    document.getElementById('pierna1').style.display = 'none';
    document.getElementById('pierna2').style.display = 'none';
    document.getElementById('perdio').style.display = 'none';
}

function partes(errores) {
    if(errores===7){
        document.getElementById('vertical').style.display = 'flex';
    }else if(errores===6) {
        document.getElementById('horizontal').style.display = 'flex';
    }else if(errores===5) {
        document.getElementById('vertical2').style.display = 'flex';
    }else if(errores===4) {
        document.getElementById('cabeza').style.display = 'flex';
    }else if(errores===3) {
        document.getElementById('cuerpo').style.display = 'flex';
    }else if(errores===2) {
        document.getElementById('brazo1').style.display = 'flex';
    }else if(errores===1) {
        document.getElementById('brazo2').style.display = 'flex';
    }else if(errores===0) {
        document.getElementById('pierna1').style.display = 'flex';
    }else if(errores===-1) {
        document.getElementById('pierna2').style.display = 'flex';
        document.getElementById('perdio').style.display = 'flex';
        alert('Intenta de nuevo')
    }
}