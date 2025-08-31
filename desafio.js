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


    let newList = dados.map((item) => {
        return{
            "nome": item.detalhes.estadio.nome,
        }
    })

    newList.sort((a,b) => {
        return a.nome.length - (b.nome.length)
    })

    console.log(newList)

} ///// Exercicio 4


async function nomeCapacidadeLocal(){
    const dados = await pegaDados()


    dados.forEach(item => {
        if(item.detalhes.localizacao.cidade.toLowerCase().startsWith("são paulo")){
            console.log(`Nome do estádio: ${item.detalhes.estadio.nome}`)
            console.log(`Capacidade: ${item.detalhes.estadio.capacidade}`)
            console.log(`Cidade: ${item.detalhes.localizacao.cidade}`)
            console.log("--------------")
        }
    });
    

} ///// Exercicio 5

async function estadiosRS7letras(){
    const dados = await pegaDados()



    dados.forEach(item => {
        if (item.nome.length > 7 && item.detalhes.localizacao.estado == "RS")
            console.log(item.nome)
        
    });

} ///// Exercicio 6

async function nomeEtitulos(){
    const dados = await pegaDados()
    let totalTitulos = 0


    let newList = dados.map(item => {
        let totalTitulos = 0
                item.historico.principais_titulos.forEach(objeto => {
                    totalTitulos += objeto.quantidade
                })
        return{
            "Nome": item.nome,
            "Total de titulos": totalTitulos
        }
    })
    console.log(newList)
} ///// Exercicio 7

async function nomeEstadioMascote(){
    const dados = await pegaDados()


    let newDados = dados.filter(item => {
        return item.detalhes.estadio.capacidade > 50000
        
    }).map((item) => {
        return{
        "Time": item.nome,
        "Estádio": item.detalhes.estadio.nome,
        "Mascote": item.mascote,
        "Capacidade": item.detalhes.estadio.capacidade
        }
    })

    console.log(newDados)

} ///// Exercicio 8

async function timesIdolos(){
    const dados = await pegaDados()


    const newList = dados.map(item => {
        return{
            "Time": item.nome,
            "Idolos": item.historico.maiores_idolos.sort()
        }
    })

    console.log(newList)
} ///// Exercicio 9

async function NdeTimesporEstado(){
    const dados = await pegaDados()
    let siglasEstados = {}


    dados.forEach(item => {
        if (!(item.detalhes.localizacao.estado in siglasEstados)){
            siglasEstados[item.detalhes.localizacao.estado] = 1;
        } else {
            siglasEstados[item.detalhes.localizacao.estado] += 1;
        }
    })

    console.log(siglasEstados)
} ///// Exercicio 10

// pegaDados()
// nomesDosTimes()
// timesComS()
// nomeslenght()
// nomeCapacidadeLocal()
// estadiosRS7letras()
// nomeEtitulos()
// nomeEstadioMascote()
// timesIdolos()
// NdeTimesporEstado()
