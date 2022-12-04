// podemos fazer a interseção ou a união de interfaces e/ou tipos

// fazer a interseção de interfaces ao defini-las

type TypePessoa = {
  nome: string
  idade: number
}

interface InterfacePessoa {
  nome: string
  idade: number
}

interface InterfaceEstudante extends TypePessoa {
  matricula: number
  curso: string
}

const aluno: InterfaceEstudante = {
  nome: "Breno",
  curso: "Computação",
  idade: 15,
  matricula: 514513
}

// fazendo a interseção ou a união de tipos em um type alias

type TypeEstudante = InterfacePessoa & {
  matricula: number
  curso: string
}

// união

type Roupa = {
  tipo: 'calça' | 'camisa' | 'sapato'
  tamanho: 'pequeno' | 'medio' | 'grande'
  cor: 'amarelo' | 'vermelho' | 'azul' | 'verde'
}

const camisa: Roupa = {
  cor: 'vermelho',
  tamanho: 'medio',
  tipo: 'calça'
}

// podemos dividir o nosso objeto em casos

type Local = {
  tipo: 'biblioteca'
  quantidadeDeLivros: number
} | {
  tipo: 'cantina'
  nome: string
} | {
  tipo: 'sala'
  professor: string
} | {
  tipo: 'bloco'
  codigo: number
}

const meuLocal: Local = {
  tipo: 'bloco',
  codigo: 518
}

// uniões de strings
type RoupaTipo = "🥼" | "🧥" | "👕" | "👘" | "🥻" | "👗" | "👚"
type RoupaTamanho = "P" | "M" | "G" | "GG"

type RoupaString = `${RoupaTipo}-${RoupaTamanho}`

const minhaRoupa: RoupaString = "👗-P"