import { getCSS } from "./comum.js";
async function quantidaDeUsuarios(){
   const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
   const res = await fetch(url);
   const dados = await res.json();
   const nomeDasRedes = Object.keys(dados);
   const quantidaDeUsuarios = Object.values(dados);


   const infos = [
    {
        x: nomeDasRedes,
        y: quantidaDeUsuarios,
        type: 'bar',
        marker:{
            color: getCSS('--cor-primaria')
        }
    }
   ]
   const layout = {
    plot_bgcolor: getCSS('--cor-de-fundo'),
    paper_bgcolor: getCSS('--cor-de-fundo'),
    title: {
        text: 'redes sociais com mais usuários no mundo',
        x: 0,
        font:{
            color:getCSS('--cor-primaria'),
            family: getCSS('--font'),
            size: 30
        }
    }
   }
   const grafico = document.createElement('div');
   grafico.className = 'grafico';
   document.getElementById('graficos- contairner').appendChild(grafico);
   Plotly.newPlot(grafico,infos,layout);

}

quantidaDeUsuarios ();
