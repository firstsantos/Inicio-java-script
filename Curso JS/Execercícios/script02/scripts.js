function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    msg.innerHTML = `Agora são ${hora}:${minutos}.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'image/Fotomanhã.jpg';
        document.body.style.background = '#A6B0BB';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'image/Fototarde.jpg';
        document.body.style.background = '#F3BD88';
    } else {
        img.src = 'image/Fotonoite.jpg';
        document.body.style.background = '#0b3f44';
    }
}

  carregar();

  setInterval(carregar, 1000);