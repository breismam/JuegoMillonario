<script>
var preguntas= new Array()
preguntas [0] = "¿Que es el COVID-19?";
preguntas [1] = "¿Se graduara de licenciado Juan Camilo?";
preguntas [2] = "¿Quien es la persona mas rapida del mundo?";
preguntas [3] = "¿Diseño tecnologico es bueno?";
preguntas [4] = "¿Pasaremos informatica III?";

var Q = preguntas.length;

function mostrarpregunta(){
  var numAleatorio=Math.round(Math.random()*(Q-1));
  document.getElementById("cuadro_1").innerHTML=preguntas[numAleatorio];
}
</script>
<!--- aca ira el programa del juego --->
