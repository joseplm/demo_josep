//Classe
var Persona = {
	nom: "Josep", //Això són propietats
	cognom: "Lloveras",
	programa: "Git"
};


function PrimeraPersona(){
	//imprimirem l'objecte al html
	document.getElementById("grup").innerHTML = "Hola Soc en " +Persona.nom+" " +Persona.cognom+" i estic probant " +Persona.programa;
}