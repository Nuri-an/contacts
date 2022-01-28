# contacts

O seguinte aplicativo consiste em fazer a listagem de contatos, visualização específica de um contatos, exclusão, postagem e edição de um contato. Todas essas funcionalidades estão disponíveis mediante a realização de login.


## Features

  ### 🔎 Visualizar listagem de contatos
  - É possível visualizar a lista de contatos ao abrir o aplicativo, caso já tenha realizado login, ou na primeira tela após o login, caso seja seu primeiro acesso.
  
  ### 🔎 Visualizar um contato específico
  - É possível visualizar um contato específico realizando um clique duplo no card desejado. Logo após, é aberto um pop-up com as informações específicas deste. (Obs.: a funcionalidade de abrir o aplicativo de e-mail só está disponível em telefones físicos para emuladores iOS)

  ### ❌ Excluir contato
  - É possível excluir um contato clicando no ícone de lixeira no canto direito inferior do card e confirmando a ação no pop-up que será aberto.

  ### ✍🏽 Criar contato
  - É possível criar um contato clicando no botão "Cadstrar cotato" no topo d tela e salvando os dados do formulário.


  ### 📝 Editar contato
  - É possível editar um contato clicando sobre o texto "Editar" no canto direito superior do card e salvando suas alterações do formulário.


## Stacks
  O aplicativo foi construído em react native, utilizando o expo.
  - Possui como framework de estilos Styled-component.
  - Para a persistência do login, foi utilizado Async-Storage e Context API
  - Para as mensagens feedbacks toast, utilizou-se a lib react-native-flash-messagem
  - Para o formulário, utilizou-se a lib Formik, juntamente com o Yup, para validação dos campos
  - Para conexão com a api, foi utilizada a lib Axios


## Como executar?
  - Rode `yarn install` ou `npm install` para instalar as depêndencias
  - Rode `expo  start` para startar a aplicação
  - Leia o QRCode com um celular físico, atráves do aplicativo Expo, ou selecione uma opção de emulador.
