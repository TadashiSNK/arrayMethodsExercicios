import { promises as fs } from 'fs'


async function pegaDados() {
    const dados = JSON.parse(await fs.readFile("./times.json"));
    return dados
} ///// Exercicio 1


async function nomesDosTimes(){
    const dados = await pegaDados()

    dados.forEach(item => {
        console.log(item.nome)
    });
} ////// Exercicio 2

async function timesComS(){
    const dados = await pegaDados()


    dados.forEach(item => {
       if (item.detalhes.nome_oficial.toLowerCase().startsWith("s")){
        console.log(item.detalhes.nome_oficial)
       } 
    });
} ///// Exercicio 3

async function nomeslenght(){
    const dados = await pegaDados()


    dados.sort( (a,b) => {
        a.detalhes.estadio.nome.localeCompare(b.detalhes.estadio.nome)
    } ).map((item)=>{
        return console.log(item.detalhes.estadio.nome)
    })

    // console.log(dados)
} ///// Exercicio 4


async function nomeCapacidadeLocal(){
    const dados = await pegaDados()


    dados.forEach(item => {
        if(item.detalhes.localizacao.cidade.toLowerCase().startsWith("são paulo")){
            console.log(`Nome do estádio: ${item.detalhes.estadio.nome}`)
            console.log(`Capacidade: ${item.detalhes.estadio.capacidade}`)
            console.log("--------------")
        }
    });
    

} ///// Exercicio 5

async function estadiosRS7letras(){
    const dados = await pegaDados()

    dados.forEach(item => {
        if (item.nome.length > 7)
            console.log(item.nome)
        
    });

} ///// Exercicio 6

async function nomeEtitulos(){
    const dados = await pegaDados()
    var totalTitulos

    const titulos = dados.forEach(item => {

        if(item.historico.pincipais_titulos != undefined)
            item.historico.pincipais_titulos.forEach(titulo => {
                var add = titulo.quantidade
                totalTitulos += add
        });
    })


    console.log(totalTitulos)
} ///// Exercicio 7

async function nomeEstadioMascote(){
    const dados = await pegaDados()


    let newDados = dados.filter(item => {
        return item.detalhes.estadio.capacidade > 50000
        
    }).map((item) => {
        return{
        "Time": item.nome,
        "Estádio": item.detalhes.estadio.nome,
        "Mascote": item.mascote
        }
    })

    console.log(newDados)

} ///// Exercicio 8





// nomesDosTimes()
// timesComS()
// nomeslenght()XX
// nomeCapacidadeLocal()
// estadiosRS7letras()
// nomeEtitulos() XX
// nomeEstadioMascote()


