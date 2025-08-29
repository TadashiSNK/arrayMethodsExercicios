import { promises as fs } from 'fs'

async function pegaDados() {
    const dados = JSON.parse(await fs.readFile("./people.json"));
    return dados

}

async function exemploForEach(){
    const dados = await pegaDados()
    dados.forEach( (item) => {
        console.log(item.name.first)
        console.log(item.email)
    } )
}

async function exemploMap(){
    const dados = await pegaDados()

    const novoArray = dados.map( (item) => {
        return {
            "nome_completo": `${item.name.first} ${item.name.last}`,
            "email": item.email
        }
    })
    console.log(novoArray)
}

async function exemploFIlter(){
    const dados = await pegaDados()

    const melhorIdade = dados.filter( (item) => {
        if (item.dob.age > 70){
            return item
        }
    } )

    
    console.log(melhorIdade)
}


async function exemploFind(){
    const dados = await pegaDados()


    const newarray = dados.find( (item) => {
        return item.gender == "female"
    }).map((item)=>{
        return {
            "name": item.name.first
        }
    })
    console.log(newarray)


}

async function exemploEvery(){
    const dados = await pegaDados()


    const newArray = dados.every((item)=>{
        return item.nat == "BR"
    })
    console.log(newArray)
}


async function exemploSome() {
    const dados = await pegaDados()

    const FODERS = dados.some((item) => {
        return item.location.state == "Santa Catarina"
    })

    console.log(FODERS)
}


async function exemploSort01(){
    const dados = pegaDados()


    var dadosOrdenados = dados.sort((p1,p2) => {
        return p1.dob.age - p2.dob.age
    }).map((item) => {
        return {
            "primeiro nome":item.name.first,
            "idade": item.dob.age
        }
    })
    console.log(dadosOrdenados)
}

async function exemploSort02() {
    const dados = await pegaDados()

    const dadosOrdenados = dados.sort((p1,p2) => {
        return p1.name.first.localeCompare(p2.name.first)
    }).map((item) => {
        return{
            "nome": item.first.name
        }
    })

    console.log(dadosOrdenados)
}

exemploMap()