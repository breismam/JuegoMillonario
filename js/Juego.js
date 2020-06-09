function pregunt() {
  var preguntas = [
                  "¿Que es el COVID-19?",
                  "¿Se graduara de licenciado Juan Camilo?",
                  "¿Quien es la persona mas rapida del mundo?",
                  "¿Diseño tecnologico es bueno?",
                  "¿Pasaremos informatica III?"
                  ];
  var Q = preguntas.length;
  var numAleatorio=Math.round(Math.random()*(Q-1));
  document.getElementById("cuadro_1").innerHTML=preguntas[numAleatorio];

}

<!--- aca ira el programa del juego --->
<!--- pagina ejemplo de incrutacion de script de javascript --->
<!--- http://mialtoweb.es/como-incluir-javascript-en-html/ --->
