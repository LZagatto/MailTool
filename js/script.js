function myFunction() {

  var copyText = document.getElementById("myInput");

  /* seleciona o campo do texto */
  copyText.select();

  /* Para celulares */
  copyText.setSelectionRange(0, 99999); 

   /* Copia o texto dentro da area */
  navigator.clipboard.writeText(copyText.value);

} 
var div = document.getElementById('html-tab');
var div2 = document.getElementById('css-tab');
var div3 = document.getElementById('js-tab');
var div4 = document.getElementById('mailTool-tab');
div.onclick = function() {
  document.getElementById("hidden").style.display = "none"
  document.getElementById("myInput1").style.display = "block"
  document.getElementById("myInput2").style.display = "none"
  document.getElementById("myInput3").style.display = "none"
  document.getElementById("myInput4").style.display = "none"

}
div2.onclick = function() {
  document.getElementById("hidden").style.display = "none"
  document.getElementById("myInput1").style.display = "none"
  document.getElementById("myInput2").style.display = "block"
  document.getElementById("myInput3").style.display = "none"
  document.getElementById("myInput4").style.display = "none"
}
div3.onclick = function() {
  document.getElementById("hidden").style.display = "none"
  document.getElementById("myInput1").style.display = "none"
  document.getElementById("myInput2").style.display = "none"
  document.getElementById("myInput3").style.display = "block"
  document.getElementById("myInput4").style.display = "none"

}
div4.onclick = function() {
  document.getElementById("hidden").style.display = "none"
  document.getElementById("myInput1").style.display = "none"
  document.getElementById("myInput2").style.display = "none"
  document.getElementById("myInput3").style.display = "none"
  document.getElementById("myInput4").style.display = "block"

}
