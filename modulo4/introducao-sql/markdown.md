##1. a - varchar = representa strings, primary key é a primeira chave e não pode ser repetida, not null significa que o valor impresso não pode ser nulo.
b - show databases -> mostra todos os bancos de dados existentes no sistema
show tables -> mostra todas as tabelas existentes no sistema
c - O comando "DESCRIBE Actor" retorna as informações salvas na tabela actors
##2. b - Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
(A query não pode ser executada porque a id está duplicada)

##3. c - retornou null
d - Error Code: 1054. Unknown column 'nome' in 'field list'
(Nome não é uma coluna válida, o valor correto seria name)

##4. a - A query é mapeada e retorna apenas atores que possuem as letras A e J em seus nomes, e um salário acima de R$300.000

     b - SELECT * FROM Actor

WHERE name NOT LIKE "A%" AND salary > 350000;

     c - SELECT * FROM Actor

WHERE name LIKE "%g%" OR name LIKE "%G%";

     d - SELECT * FROM Actor

WHERE
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
