const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mens-criptografada');



// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "ra"
// A letra "i" é convertida para "sen"
// A letra "a" é convertida para "shu"
// A letra "o" é convertida para "ri"
// A letra "u" é convertida para "ken"


function btnencriptar (){
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";

}

function encriptar(texto) {
  let matrizCodigo = [["a", "law" ],["i", "king"],["e", "ken"],["o", "sagat"],["u", "ralf"]];

texto = texto.toLowerCase();

for (let i = 0; i < matrizCodigo.length; i++) {

  if (texto.includes(matrizCodigo[i][0])) {
    texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
  }
  
}

return texto;

}

function btndesencriptar (){
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";

}

function desencriptar(texto) {
let matrizCodigo = [["a", "law" ] , ["i", "king"],
["e", "ken"] , ["o", "sagat"] , ["u", "ralf"]];

texto = texto.toLowerCase();

for (let i = 0; i < matrizCodigo.length; i++) {

  if (texto.includes(matrizCodigo[i][1])) {
    texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
  }
  
}

return texto;

}

/*function btnCopiar() {
  const copiaText = mensagem.value;

  const teste = copiaText.addEventListener('click', () => {
    copiaText.select();
    copiaText.setSelectRange();
    document.execCommand('copy');
    alert("Copiado com sucesso!")
  });

  console.log(teste)

}*/
