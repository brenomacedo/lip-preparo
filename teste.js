// tipos básicos
var nome = "Breno Macêdo";
var idade = 19;
var booleano = false;
// arrays de tipos básicos
var nomes = ["Breno Macêdo", "Renan Xerez", "Gustavo Wendell"];
var idades = [19, 19, 19];
var constante = {
    idade: 15,
    nome: "nome estranho"
};
// interfaces e tipos são bem parecidos, a diferença é que tipos são apelidos para algum outro tipo ou
// alguma operação de outros tipos, além disso o que chamamos de "declaration merging" só é possível
// com interfaces
// o operador 'as' é responsável pelo que chamamos de "type assertion", em que dizemos ao typescript
// que um objeto possui um tipo que ele não consegue identificar por si só
// ex:
var element = document.getElementById('id-de-um-canvas');
// o any informa o typescript que o tipo é literalmente "qualquer coisa", ou seja, verificações de tipos
// não serão feitas quando envolvem objetos desse tipo
var objeto = {};
// aviso: o operador 'as' é perigoso, pois se usado de maneira incorreta, informações equivocadas
// podem ser passadas ao typescript, principalmente com o uso da palavra chave 'any'
var teste = "bla bla bla";
teste.toExponential(3);
// para previnir conversões perigosas, há o tipo 'unknown' em que conversões desse tipo para outro só são
// possíveis quando o programador informa para o typescript o tipo do objeto atraves de uma assertion
function somarUm(numero) {
    return numero + 1;
}
var nomeUnknown = "breno";
var nomeAny = "breno";
//somarUm(nomeUnknown) // qualquer tipo pode ser convertido para unknown, porem conversões de unknown para outros tipos
// precisam de uma assertion
somarUm(nomeAny);
