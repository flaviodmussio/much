
# devmuch sre challenge

## Instruções

Neste repositório você encontrará duas aplicações (front/back) em node.js e um arquivo seed para a base MySQL.
- front serve uma página html que se comunica com back para enviar as preferências
- back salva preferências e o IP real do requisitante vindas do front no banco de dados
- mysql contem o arquivo de inicialização para criação da base

**Podem haver bugs nas aplicações e estrutura que necessitam correção. Caso tenha conhecimento em node.js sinta-se a vontade para fazer melhorias no código a fim de evitar erros fatais na aplicação.**

Nosso objetivo é provisionar as aplicações e banco MySQL de forma distribuída e automatizada, preferencialmente em contêineres, com os seguintes requisitos:
- a aplicação front deve ser accessível de qualquer lugar
- a aplicação back deve se comunicar somente com front e com o banco mysql
- o banco mysql deve se comunicar somente com o back
- os ambientes devem ser resilientes a ponto de se recuperarem de uma falha fatal na aplicação

Esperamos soluções na forma de um **script** que faça a **orquestração local de contêineres** ou um **deploy na nuvem (AWS)**, usando a combinação de uma ou mais ferramentas como por exemplo:
- docker + docker-compose
- cloudformation, terraform templates (aws)
- ansible, chef, vagrant
- clis, sdks, scripts
- sua imaginação :)

Consideraremos soluções funcionais que atendam os requisitos de segurança, utilizando ferramentas e distribuições linux modernas bem como a facilidade e autenticidade da solução. Inclua as intruções para rodar seu script neste README e comente seu código para demonstrar sua forma de pensamento.

## Resultados
Aceitaremos um patch deste repositório com suas alterações locais sem a necessidade de fork ou criação de novos repositórios. Para isso, siga as instruções abaixo:

1. Clone o repositório localmente eu seu computador:

    `git clone https://github.com/delivery-much/sre-challenge.git`
    
2. Crie sua solução modificando e/ou criandos novos arquivos.

3. Confira as alterações locais

    `git status`

4. Adicione arquivos novos, caso os tenha criado

    `git add .`

5. Commit local das suas modificações

    `git commit -am "commit message"`
6. Gere um arquivo .patch com suas modificações locais

    `git format-patch origin/master --stdout > git.patch`

7. Responda o e-mail anexando o git.patch
