var names = [
  'John Doe',
  'John Doe',
  'John Doe',
  'Peter Parker',
  'Mary Jane Watson-Parker',
  'James Doe',
  'John Elvis Doe',
  'Jane_Doe',
  'Penny Parker',
  'Penny Parker',
  'Mary Jane Watson Parker',
  'Fernanda Gonçalves',
  'Julio Ribeiro Luiz felix-bernardino',
  'Penny barker',
  'jenny rarker',
  'Penny tarker',
  'jenny uarker',
  'Penny iarker',
  'Penny larker',
  'Penny larker',
  'Penny qarker',
  'oenny qarker',
  'Penny Parker',
  'Penny sarker',
  'Penny sarker',
  'Juliana Cristina Camara',
  'João Carlos Camara',
];

var re = /[$-/:-?{-~!"^_`\[\]]/;
var result1 = [];
var valid = [];
var validacao = [];

for (var i = 0; i < names.length; i++) {

  // set domínio do email da empresa
  var domain = '@company.com';

  //separar palavras com base no espaço entre elas

    var result = names[i].replace(re, " ");
    valid.push(result)
    var result1 = valid[i].split(' ');

  //separando o sobrenome do funcionário
  var sobrenome = result1[result1.length - 1];

  //retirando o sobrenome da lista
  if (result1.length <= 2) {
    var removed = result1.splice(1, Number.MAX_VALUE);
  } else {
    var removed = result1.splice(2, Number.MAX_VALUE);
  }

  //dentro da lista de nomes/(nomes compostos) capturar somente a primeira letra da palavra(s)
  var teste = result1.map((v) => v[0]);

  if (teste.length >= 2) {
    var mail = sobrenome + '.' + teste[0] + '.' + teste[1] + domain;
    var finalMail = mail.toLowerCase();
    validacao.push(finalMail);
  } else {
    var mail = sobrenome + '.' + teste[0] + domain;
    var finalMail = mail.toLowerCase();
    validacao.push(finalMail);
  }
}

//validação dos emails iguais e inserção dos números aos repetidos
var adicao = 1;
var qtdArrays = validacao.length
var idx = validacao.lastIndexOf(validacao[validacao.length-1]);

for(i=0;i<=qtdArrays;i++){
  for(t=0;t<=qtdArrays;t++){
    if(t==qtdArrays){
      adicao = 1
    }
    if(validacao[i] != undefined || validacao[t] != undefined){
      if(validacao[i] == validacao[t] && i!=t){
        var validado = validacao[t].replace("@", (adicao + '@'))
        adicao++
        validacao[t] = validado
       }else if(validacao[i] != validacao[t]){
        continue;
       }
    }else{
    }
  }
}

/*-------------------Mostrando no html--------------------- */
var mailTool = []

for(f=0;f<validacao.length;f++){
  mailTool[f] = names[f] + " <" + validacao[f]+ "> " 
}

var elemento = document.getElementById('myInput');
elemento.value = mailTool
