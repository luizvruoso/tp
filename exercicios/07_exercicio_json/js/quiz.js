//A PARTIR DO ALBUM, DESCUBRA O ARTISTA

var dados;
var bd ;
function getRandomArbitrary(min, max) {
  let aux =  Math.random() * (max - min) + min;

  return Math.round(aux);
}

function confereEquals(DadoConferencia, vetor){
  for (let i=0; i< vetor.length; i++){
    if(vetor[i] == DadoConferencia){
      return true;
    }
  }
  return false;

  
}

function getCardsOps(auxRand){

  let auxRandPosicaoResposta = getRandomArbitrary(0,3); //sorteia a posicao onde vai estar a resposta
  var valoresJaUsados = [];
  valoresJaUsados.push(dados[auxRand].posicao);
  var aux = 0;
  for(let i=0; i<4; i++){

    aux = getRandomArbitrary(0, (bd.length)-1);
    //console.log(aux);

    if(confereEquals(aux, valoresJaUsados)){
      while(confereEquals(aux, valoresJaUsados)){
        aux = getRandomArbitrary(0, (bd.length)-1);
      }
    }

    valoresJaUsados.push(aux);

    

    if(i == auxRandPosicaoResposta){
      //console.log(dados[auxRand].posicao);
      //console.log(auxRand);
        document.getElementById("opcoes").innerHTML += '<button class="card1" onclick ="confereCallProximo('+auxRand+', 1)">'
        +bd[dados[auxRand].posicao].nome
        +'</button>';
    }else{
      document.getElementById("opcoes").innerHTML += '<button class="card1" onclick="confereCallProximo('+auxRand+', -1)" >'
      +bd[aux].nome
      +'</button>';
    }
  
  }
}

function confereCallProximo(valorSelecionadoNoBanco, validade){
  
  if(validade == 1){
    console.log("ACERTOU"+document.getElementById('total').value);
    document.getElementById('total').innerHTML = parseInt(document.getElementById('total').innerHTML)+getRandomArbitrary(100, 250);
    document.getElementById("ihaaDiv").style.display = "block";
    setTimeout(function(){  document.getElementById("ihaaDiv").style.display = "none"; }, 1000);

  }else{
    document.getElementById('total').innerHTML = parseInt(document.getElementById('total').innerHTML)-getRandomArbitrary(85, 200);
    document.getElementById("erradoDiv").style.display = "block";
    setTimeout(function(){  document.getElementById("erradoDiv").style.display = "none"; }, 1000);
  }
  delete dados[valorSelecionadoNoBanco];
  //console.log(dados);
  initGame();

}
function confereEndGame(){
  var auxConf =0 ;
  for(let i=0; i<12; i++){
    if(!dados[i])  auxConf++; //dados = undefined é false
  }
  if(auxConf < 12) return false;
  else return true;
}

function initGame(){

  console.log(bd);
  console.log(dados);
  document.getElementById("botao-reset").innerHTML = "";
  var auxRand = getRandomArbitrary(0, (dados.length)-1);
  //console.log("Valor Randomico: "+ auxRand);
  document.getElementById("opcoes").innerHTML = "";

  if(dados[auxRand] ){
    document.getElementById("img").innerHTML = "<img width='350' height='auto' src='"+dados[auxRand].img+"'>";
  }else{
    
    while(!dados[auxRand]){
      console.log("Valor Randomico: "+ dados[auxRand]);
      auxRand = getRandomArbitrary(0, (dados.length)-1);
      if(confereEndGame()){
          document.getElementById("img").innerHTML = "";
          document.getElementById("botao-reset").innerHTML = '<button onclick="location.reload()" class="card1">Reiniciar Jogo </button>';
          return;
       
      }
    }
    document.getElementById("img").innerHTML = "<img width='350' height='auto' src='"+dados[auxRand].img+"'>";
  }
  



  getCardsOps(auxRand);

   





}

window.onload = function(){
  initGame();

};
