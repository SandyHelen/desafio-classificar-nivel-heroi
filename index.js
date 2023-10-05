let name = "Mario"
let experience = 6.500
let level = ""

if (experience >= 10.001){
	level = "Radiante"
} else if (experience >= 9.001){
	level = "Imortal"
} else if (experience >= 8.001){
	level = "Ascendente"
} else if (experience >= 7.001){
	level = "Platina"
} else if (experience >= 6.001){
	level = "Ouro"
} else if (experience >= 2.001){
	level = "Prata"
} else if (experience >= 1.001){
	level =  "Bronze"
} else {
	level = "Ferro"
}

console.log("O Herói de nome " + name + " está no nível de " + level)