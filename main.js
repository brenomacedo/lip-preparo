var Lista = /** @class */ (function () {
    function Lista() {
        this.lista = [];
    }
    Lista.prototype.inserir = function (item) {
        this.lista.push(item);
    };
    Lista.prototype.remover = function (posicao) {
        this.lista = this.lista.filter(function (_, index) { return index != posicao; });
    };
    Lista.prototype.printar = function () {
        console.log(this.lista);
    };
    return Lista;
}());
var listaDeInteiros = new Lista();
listaDeInteiros.inserir(5);
listaDeInteiros.inserir(4);
listaDeInteiros.inserir(1);
listaDeInteiros.remover(1);
listaDeInteiros.printar();
