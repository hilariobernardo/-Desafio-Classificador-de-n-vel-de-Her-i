const xp = 1651
const nome = "gilbervan"
let elo = null
if (xp < 1000) {
    elo = "ferro"
} else if (xp >= 1001 && xp <= 2000) {
    elo = "bronze"
} else if (xp >= 2001 && xp <= 5000) {
    elo = "prata"
} else if (xp >= 5001 && xp <= 7000) {
    elo = "ouro"
} else if (xp >= 7001 && xp <= 8000) {
    elo = "platina"
} else if (xp >= 8001 && xp <= 9000) {
    elo = "ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    elo = "imortal"
} else if (xp > 10001) {
    elo = "radiante"
}
console.log(`O Herói de nome ${nome} está no nível de ${elo}`)