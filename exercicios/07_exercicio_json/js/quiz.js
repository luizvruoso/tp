//A PARTIR DO ALBUM, DESCUBRA O ARTISTA
console.log(dados);
console.log(bd);
function getRandomArbitrary(min, max) {
  let aux =  Math.random() * (max - min) + min;

  return Math.round(aux);
}
function getCardsOps(auxRand){

  let auxRandPosicaoResposta = getRandomArbitrary(0,3); //sorteia a posicao onde vai estar a resposta
  var valoresJaUsados = [];
  valoresJaUsados.push(dados[auxRand].posicao);
  var aux = 0;
  for(let i=0; i<4; i++){

    aux = getRandomArbitrary(0, (bd.length)-1);

    if(!valoresJaUsados.findIndex( dado => dado == aux ) ){
      while(!valoresJaUsados.findIndex( dado => dado == aux)){
        aux = getRandomArbitrary(0, (bd.length)-1);
        //console.log("Maaaoi");

      }
    }else{
      valoresJaUsados.push(aux);

    }
    //console.log(valoresJaUsados);

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
    document.getElementById('total').innerHTML = parseInt(document.getElementById('total').innerHTML)+30;
  }else{
    console.log("ERROU");
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
  console.log(dados);
  var auxRand = getRandomArbitrary(0, (dados.length)-1);
  //console.log("Valor Randomico: "+ auxRand);
  document.getElementById("opcoes").innerHTML = "";

  if(dados[auxRand]){
    document.getElementById("img").innerHTML = "<img width='400' height='auto' src='"+dados[auxRand].img+"'>";
  }else{
    
    while(!dados[auxRand]){
      console.log("Valor Randomico: "+ dados[auxRand]);
      auxRand = getRandomArbitrary(0, (dados.length)-1);
      if(confereEndGame()){
       // console.log('oi');
        break;
      }
    }
    document.getElementById("img").innerHTML = "<img width='500' height='auto' src='"+dados[auxRand].img+"'>";
  }
  



  getCardsOps(auxRand);

   





}

window.onload = function(){
  initGame();

};
