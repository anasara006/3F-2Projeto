async function quantidaDeUsuarios(){
   const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
   const res = await fetch(url);
   const dados = await res.json();
   const nomeDasRedes = Object.keys(dados);
   const quantidaDeUsuarios = Object.values(dados);


   const infos =[
    {
        x: nomeDasRedes,
        y: quantidaDeUsuarios,
        type: bar
    }
   ]
}