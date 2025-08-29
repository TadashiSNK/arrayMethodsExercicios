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


    dados.sort( (item) => {
        
    })
}






// nomesDosTimes()
// timesComS()