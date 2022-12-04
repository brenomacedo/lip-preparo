class Lista<T> {
  private lista: T[] = []

  public inserir(item: T) {
    this.lista.push(item)
  }

  public remover(posicao: number) {
    this.lista = this.lista.filter((_, index) => index != posicao)
  }

  public printar() {
    console.log(this.lista)
  }
}

const listaDeInteiros = new Lista<number>()

listaDeInteiros.inserir(5)
listaDeInteiros.inserir(4)
listaDeInteiros.inserir(1)

listaDeInteiros.remover(1)

listaDeInteiros.printar()