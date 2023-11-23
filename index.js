var nomeHeroi = prompt("Digite o nome do herói:");

var xpHeroi = prompt("Digite a quantidade de XP do herói:");

xpHeroi = parseInt(xpHeroi);

var nivel = determinarNivel(xpHeroi);

var mensagem = `O Herói de nome ${nomeHeroi} está no nível de ${nivel}`;

alert(mensagem);

function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

