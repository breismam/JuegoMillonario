var Q;
var H;
function pregunt() {
  var preguntas = [
                  "¿Que es el COVID-19?",
                  "¿Se graduara de licenciado electonico Juan Camilo?",
                  "¿Quien es la persona mas rapida del mundo?",
                  "¿Diseño tecnologico es bueno?",
                  "¿Pasaremos informatica III?"
                  ];
  Q = preguntas.length;
  var numAleatorio1=Math.round(Math.random()*(Q-1));
  document.getElementById("cuadro_1").innerHTML=preguntas[numAleatorio1];
}

function respuestas() {
  var Prespuestas = [
                    <!-- COVID-19 -->
                    "Virus",
                    "Bacteria",
                    "Celula animal",
                    "Gripa",
                    <!-- Juan Camilo Licenciado -->
                    "Nunca",
                    "De Diseño",
                    "Si",
                    "Tal vez",
                    <!-- Persona mas rapida -->
                    "Elon musk",
                    "Harry Potter",
                    "Usain Bolt",
                    "Mariana Pajon",
                    <!-- D.tecnologico -->
                    "Nooo",
                    "Si",
                    "Talvez",
                    "Solo para hacer males",
                    <!-- Informatica III -->
                    "Obviooo",
                    "Algunos",
                    "NO",
                    "Talvez"
                  ];
  var A=Prespuestas[Math.random()*(3-0)];<!-- R. COVID -->
  var B=Prespuestas[Math.random()*(8-4)];<!-- R. UPJ -->
  var C=Prespuestas[Math.random()*(13-9)];<!-- R. Rapida -->
  var D=Prespuestas[Math.random()*(17-14)];<!-- R. tecnologico -->
  var E=Prespuestas[Math.random()*(22-18)];<!-- R. InfoIII -->
}

function iguales () {
  if (Q==H) {
    document.getElementById("cuadro_2").innerHTML = "Correcto";
  } else {
    document.getElementById("cuadro_2").innerHTML = "Incorrecto";
  }
}


<!--- aca ira el programa del juego --->
<!--- pagina ejemplo de incrutacion de script de javascript --->
<!--- http://mialtoweb.es/como-incluir-javascript-en-html/ --->
