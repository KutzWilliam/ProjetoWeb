
$(document).ready(function(){
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000')
});

function buscaCep(){
  let cep = document.getElementById('cep').value;
  if(cep.length >= 9){
    let url = "https://brasilapi.com.br/api/cep/v2/"+cep;
    fetch(url).then(response => {
      if(response.ok){ return response.json(); }
      else if(response.status === 404){ console.log("CEP inválido."); }
      else{ console.log("Erro ao fazer a requisição."); }
    }).then(data => {
      data.street != undefined ? document.getElementById("rua").value = data.street : document.getElementById("rua").value = "";
      data.neighborhood != undefined ? document.getElementById("bairro").value = data.neighborhood : document.getElementById("bairro").value = "";
      data.city != undefined ? document.getElementById("cidade").value = data.city : document.getElementById("cidade").value = "";
      data.state != undefined ? document.getElementById("uf").value = data.state : document.getElementById("uf").value = "";
    }).catch(error => {
      console.log(error.message);
    })
  }
}

function initProd(){
  let produtos = [
    {id: 0, type: 'nacional', nome: 'Maceió', img:'maceio.png', desc: 'Pacote de Férias Nordeste', partida: 'Curitiba', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'1.215', valorF: 1215},
    {id: 1, type: 'nacional', nome: 'Porto Seguro', img:'porto_seguro.png', desc: 'Pacote de Férias Nordeste', partida: 'Curitiba', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'903', valorF: 903},
    {id: 2, type: 'nacional', nome: 'Trancoso', img:'trancoso.png', desc: 'Pacote de Férias Nordeste', partida: 'Curitiba', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'1.415', valorF: 1415},
    {id: 3, type: 'nacional', nome: 'Rio de Janeiro', img:'rio_de_janeiro.png', desc: 'Férias em Família', partida: 'Curitiba', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'1.465', valorF: 1465},
    {id: 4, type: 'nacional', nome: 'São Paulo', img:'sao_paulo.png', desc:'Férias em Família', partida: 'Curitiba', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'499', valorF: 499},
    {id: 5, type: 'nacional', nome: 'Florianópolis', img:'florianopolis.png', desc:'Férias em Família', partida:'Curitiba', tipo:'Hotel + Aéreo', qtdPessoas:'4 pessoas', valor:'1.225', valorF: 1225},
    {id: 6, type: 'nacional', nome: 'Salvador', img:'salvador.png', desc:'Pacote de Férias Nordeste', partida:'Curitiba', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'674', valorF: 674},
    {id: 7, type: 'nacional', nome: 'Recife', img:'recife.png', desc:'Pacote de Férias Nordeste', partida: 'São Paulo', tipo:'Hotel  + Aéreo', qtdPessoas:'pessoa', valor:'915', valorF: 915},
    {id: 8, type:'internacional', nome:'Buenos Aires', img:'buenos_aires.png', desc:'Desbravando a América do Sul', partida: 'São Paulo', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'1.825', valorF: 1825},
    {id: 9, type:'internacional', nome:'Montevidéu', img:'montevideu.png', desc:'Desbravando a América do Sul', partida: 'São Paulo', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'1.612', valorF: 1612},
    {id: 10, type:'internacional', nome:'Orlando', img:'orlando.png', desc:'Novos Horizontes', partida: 'São Paulo', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'3.456', valorF: 3456},
    {id: 11, type:'internacional', nome:'Miami', img:'miami.png', desc:'Novos Horizontes', partida: 'São Paulo', tipo:'Hotel + Aéreo', qtdPessoas:'pessoa', valor:'2.256', valorF: 2256},
  ];

  sessionStorage.setItem('produtos', JSON.stringify(produtos));
}

function initCart(){
  const cart = [];
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', function() {
  let txtCep = document.getElementById("cep");
  if(txtCep) txtCep.addEventListener("blur", buscaCep);

  let prod = sessionStorage.getItem('produtos');
  if(!prod){
    initProd();
  }

  let cart = sessionStorage.getItem('cart');
  if(!cart){
    initCart();
  }
});