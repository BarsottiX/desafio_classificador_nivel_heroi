let experiencia = 5000;
let nome = 'Homem de ferro';
let nivel = "";

switch(true) {
    case (experiencia < 1000) :
    nivel = "Ferro"
    break;

    case (experiencia >= 1000 && experiencia < 2000) :
    nivel = "bronze"
    break;

    case (experiencia >= 2000 && experiencia < 5000):
    nivel = "Prata"
    break;

    case (experiencia >= 5000 && experiencia < 7000) :
    nivel = "Ouro"
    break;

    case (experiencia >= 7000 && experiencia < 8000) :
    nivel = "Platina"
    break;

    case (experiencia >= 8000 && experiencia < 9000) :
    nivel = "Ascendente"
    break;

    case (experiencia >= 9000 && experiencia < 10000) :
    nivel = "Imortal"
    break;

    case(experiencia >= 10001):
    nivel = "Radiante"
    break;

    default:
        nivel = "Desconhecido";
} 

console.log(`o herói de nome ${nome} está no nível de ${nivel}`);