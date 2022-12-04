# Tipagens

## Tipagem Estática vs Dinâmica

### Para o computador, tudo é uma string de bits de um tamanho fixo. Elas podem
### ser interpretadas como número, real, sequências de caracteres, etc.

### A linguagem de programação impõe um controle sobre o tipo de dado
### que estamos trabalhando, esse verificação pode ser realizada
### em tempo de compilação, que chamamos de Tipagem Estática
### ou em tempo de execução, que chamamos de Tipagem Dinâmica.

## Tipagem Implícita vs Explícita

### As vezes, também divimos as linguagens com base na sua verbosidade.
### Com uma tipagem explícita, sempre anotamos os dados com os tipos.
### Com uma tipagem implícita, permitimos que o compilador infira
### o tipo sempre que possível.

## Tipagem Forte vs Fraca

### A tipagem forte significa que todas as operações
### exigem exatamente o argumento de que elas precisam.
### Nenhuma conversão implícita de outros tipos para
### os tipos necessários é permitida.

### Uma tipagem fraca significa que há conversões
### implícitas entre os tipos, o que torna possível
### fazer operações nos dados que não sejam exatamente
### do tipo exigido (mas há uma conversão para o tipo).

### Essa divisão não é estritamente binária; no mundo
### real, as linguagens tendem a estar mais pr´óximas
### de um desses dois polos.

### OCaml > C > Javascript
