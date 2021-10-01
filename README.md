# App de Delivery

![GitHub repo size](https://img.shields.io/github/repo-size/VitorLimaRios/sd-08-project-delivery-app?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/VitorLimaRios/sd-08-project-delivery-app?style=for-the-badge)

<img src="https://media.giphy.com/media/f6WXn9PBkFXmtlK3uO/giphy.gif" alt="app gif">

## Sobre o projeto

Este projeto é uma aplicação tanto client-side quanto server-side, nela é possível realizar o cadastro, logar com a conta criada, comprar bebidas e acompanhar o andamento da compra. Também é possível logar como admin, garantindo assim permissão para criar outros usuários vendedores e outros admins. Como vendedor é possível receber pedidos e marcá-los como "preparando" e "em trânsito". Para o front-end foi utilizado React e context API. Para o back-end foi utilizado express.js e sequelize para o banco de dados. Este projeto foi desenvolvido em grupo na [Trybe](https://www.betrybe.com/) como projeto final do módulo de Back-end. Caso queira ver o readme original do projeto clique neste [aqui](https://github.com/tryber/sd-08-project-delivery-app).

## Antes de começar

Garanta que você tem instalado na sua máquina:
- Node na versão igual ou superior a 14
- mysql-server

## Instalando o App de Delivery

1. Primeiro clone o repositório:
```
git clone https://github.com/VitorLimaRios/sd-08-project-delivery-app.git
```
2. Entre na pasta do repositório:
```
cd sd-08-project-delivery-app
```
3. Crie um arquivo .env dentro da pasta do back-end seguindo o exemplo do arquivo .env.exemple:
```
cd back-end && touch .env
```
4. Instale as dependências na pasta raiz do projeto:
```
cd .. && npm install
```
5. Instale as dependências das pastas front-end e back-end usando o seguinte script na pasta raiz do projeto:
```
npm run dev:prestart
```

## Usando o App de Delivery em ambiente de desenvolvimento

- Estando na pasta raiz do projeto utilize o seguinte script:
```
npm run dev
```
Este script foi criado pela [Trybe](https://www.betrybe.com/) e ele limpa as portas `3000` e `3001` e sobe a aplicação com `pm2` em modo `fork` (Uma instância pra cada aplicação), nesse modo, as atualizações são assistidas (modo `watch`).
1. Caso deseje acessar a aplicação como usuário, você pode criar uma conta ou acessar usando os seguintes dados:
- email: `zebirita@email.com`
- senha: `$#zebirita#$`

2. Caso deseje acessar a aplicação como vendedora, você pode criar uma conta através do admin ou acessar usando os seguintes dados:
- email: `fulana@deliveryapp.com`
- senha: `fulana@123`

3. Caso deseje acessar a aplicação como admin, você pode acessar usando os seguintes dados:
- email: `adm@deliveryapp.com`
- senha: `--adm2@21!!--`

## Alguns Scripts relevantes criados pela [Trybe](https://www.betrybe.com/):

- `start`: Limpa as portas `3000` e `3001` e simula a inicialização no avaliador. Prepara o campo rodando o `Sequelize` para restaurar o **banco de dados de testes** (final `-test`) e sobe a aplicação com `pm2` em modo `fork` (Uma instância pra cada aplicação). Nesse modo as alterações não são assistidas;
  - *uso (na raiz do projeto): `npm start`*

- `stop`: Para e deleta as aplicações rodando no `pm2`;
  - *uso (na raiz do projeto): `npm stop`*

- `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end` e `./back-end`) e roda o `Sequelize` no `./back-end` (lembrar de configurar o `.env` no mesmo);
  - *uso (na raiz do projeto): `npm run dev:prestart`*

- `db:reset`: Rodas os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`), utilize caso ocorra algum problema no seu banco local;
  - *uso (na raiz do projeto): `npm run db:reset`*

- `db:reset:debug`: Rodas os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`), utilize caso ocorra algum problema no seu banco local; Esse comando também é capaz de retornar informações detalhadas de erros (quando ocorrerem no processo);
  - *uso (na raiz do projeto): `npm run db:reset:debug`*

- `test <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de testes** (final `-test`);
  - *uso (na raiz do projeto): `npm test`, `npm test 01login 02register` ou ainda `npm run test 01 02`*

- `test:dev <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`); 
  - *uso (na raiz do projeto): `npm run test:dev`, `npm run test:dev 01login 02register` ou ainda `npm test:dev 01 02`*;

- `test:dev:open <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`), exemplo `npm test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`; Esse teste deve mostrar abrir uma janela mostrando o comportamento das páginas;
  - *uso (na raiz do projeto): `npm run test:dev:open`, `npm run test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`*;

- `test:dev:report "<nomes-dos-arquivos>"`: Roda todos os testes (ou uma parte deles caso `"<nomes-dos-arquivos>"` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`); Esse teste devolve um output em texto com o resultado de todos os testes; Os `logs` são gerados em `./__tests__/reports`.
  - *uso (na raiz do projeto): `npm run test:dev:report`, `npm run test:dev:report "01login 02register"` ou ainda `npm run test:dev:report "01 02"`*;

## Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/caiomzrocha">
        <img src="https://avatars.githubusercontent.com/u/26100158?v=4" width="100px;" alt="Foto do Caio Rocha no GitHub"/><br>
        <sub>
          <b>Caio Rocha</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/edibertooliveira">
        <img src="https://avatars.githubusercontent.com/u/48109015?v=4" width="100px;" alt="Foto do Ediberto Oliveira no GitHub"/><br>
        <sub>
          <b>Ediberto Oliveira</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/danieldsrd">
        <img src="https://avatars.githubusercontent.com/u/71866380?v=4" width="100px;" alt="Foto do Daniel Rodrigues no GitHub"/><br>
        <sub>
          <b>Daniel Rodrigues</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## Conclusão

Este projeto foi excelente para treinar meu trabalho em equipe utilizando metodologias àgeis além de me permitir praticar minhas hard skills que aprendi ao longo do curso da [Trybe](https://www.betrybe.com/). No geral eu estou orgulhoso do que eu e meus colegas construímos.
