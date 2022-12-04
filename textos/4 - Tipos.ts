// tipos básicos

const nome: string = "Breno Macêdo"
const idade: number = 19
const booleano: boolean = false

// arrays de tipos básicos

const nomes: string[] = ["Breno Macêdo", "Renan Xerez", "Gustavo Wendell"]
const idades: number[] = [19,19,19]
// ...

// tipos de objetos feitos com os tipos primitivos
interface Usuario {
  nome: string
  idade: number
  solteiro: boolean
  amigos: Usuario[]
}

// ou

type TUsuario = {
  nome: string
  idade: number
  solteiro: boolean
  amigos: Usuario[]
}

// declaration merging

interface Interface {
  nome: string
}

interface Interface {
  idade: number
}

const constante: Interface = {
  idade: 15,
  nome: "nome estranho"
}

// interfaces e tipos são bem parecidos, a diferença é que tipos são apelidos para algum outro tipo ou
// alguma operação de outros tipos, além disso o que chamamos de "declaration merging" só é possível
// com interfaces

// o operador 'as' é responsável pelo que chamamos de "type assertion", em que dizemos ao typescript
// que um objeto possui um tipo que ele não consegue identificar por si só

// ex:

const element = document.getElementById('id-de-um-canvas') as HTMLCanvasElement

// o any informa o typescript que o tipo é literalmente "qualquer coisa", ou seja, verificações de tipos
// não serão feitas quando envolvem objetos desse tipo
const objeto: Usuario = ({} as any) 

// aviso: o operador 'as' é perigoso, pois se usado de maneira incorreta, informações equivocadas
// podem ser passadas ao typescript, principalmente com o uso da palavra chave 'any'

const teste = ("bla bla bla" as any) as number
teste.toExponential(3)

// para previnir conversões perigosas, há o tipo 'unknown' em que conversões desse tipo para outro só são
// possíveis quando o programador informa para o typescript o tipo do objeto atraves de uma assertion

function somarUm(numero: number) {
  return numero.toExponential()
}

const nomeUnknown = "breno" as unknown
const nomeAny = "breno" as any

//somarUm(nomeUnknown) // qualquer tipo pode ser convertido para unknown, porem conversões de unknown para outros tipos
                     // precisam de uma assertion
somarUm(nomeAny)
