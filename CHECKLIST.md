
# Projeto de Programação To-do-List

## O que falta fazer

- [x] Criar um componente para rodapé
- [x] Correção de bugs( Logotipo quebrando )
- [x] Sistema para recuperar senha
- [x] Melhorar a exibição do nome do usuário na tela home
- [x] Adicionar um titulo. exemplo: "Faça seu login no sistema" no campo de login
- [x] Adicionar um titulo. exemplo: "Faça seu cadastro no sistema" no campo de cadastro
- [ ] Retirar mensagem desnecessaria para o usuário ler

## Testes para o Frontend

## Testes em Páginas

- [ ] Teste se os itens estão sendo renderizados na tela

### Pagina Home

- [ ] Teste se os itens estão sendo renderizados na tela
- [ ] Teste se a Tela Home está redirecinando para login corretamente apois clicar no exit

### Pagina login

- [ ] Teste se os itens estão sendo renderizados na tela
- [ ] Teste se a navegação entre as tela de login e cadastro está funcionando
- [ ] Teste se a navegação vai direto para home, quando o usuário estiver logado
- [ ] Teste se o usuário consegue realizar o login
- [ ] Teste se o login não é realizado com dados incorretos
- [ ] Teste com usuário inexistente
- [ ] Teste com senha incorreta
- [ ] Teste com dados incorretos
- [ ] Teste com dados vazios
- [ ] Teste se apôs o login os dados do usuário estão sendo armazenados corretamente
- [ ] Teste se o usuário é redirecionado para a tela home, após fazer login
- [ ] Teste se o campo de senha fica vazio apos o login do usuário ser sucedido
- [ ] Teste se ao tentar realizar o login, o botão fica desabilitado
- [ ] Teste se os dados da tela de login estão sendo enviados para o banco de dados

### Pagina Register

- [ ] Teste se os itens estão sendo renderizados na tela
- [ ] Teste se a navegação entre as tela de cadastro e login está funcionando
- [ ] Teste se a navegação vai direto para login, quando o usuário for cadastrado
- [ ] Teste se o usuário consegue realizar o cadastro
- [ ] Teste se o cadastro não é realizado com dados inválidos
- [ ] Teste com usuário em branco
- [ ] Teste com senha em branco
- [ ] Teste com E-mail em branco
- [ ] Teste com dados inválidos
- [ ] Teste se apôs o cadastro os dados do usuário estão sendo armazenados corretamente
- [ ] Teste se o usuário é redirecionado para tela home, após fazer login depois que foi cadastrado
- [ ] Teste se o cadastro não é realizado quando o usuário já é cadastrado
- [ ] Teste se o cadastro não é realizado caso o usuário já exista
- [ ] Teste se ao tentar realizar o cadastro, o botão fica desabilitado
- [ ] Teste se os dados da tela de cadastro estão sendo enviados para o banco de dados
- [ ] Teste se o usuário é notificado quando o login já foi utilizado

## Testes em Componentes

### Componente Apis

- [ ] Teste se a função GitHubApi está retornando um valor válido
- [ ] Teste se a função RequestDataContentsApi esta retornando um valor válido

### Componente Buttons

- [ ] Teste se o botão BtnCadastro está sendo renderizado
- [ ] teste se o botão BtnLogin está sendo renderizado

### Componente Calendar

- [ ] Teste se o componente ListCalendar está sendo renderizado
- [ ] Teste se o conteudo renderizado pelo componente ListCalendar está sendo apresentado
- [ ] Teste se o componente PanelCalendar está sendo renderizado
  
### Componente Control

- [ ] Teste se o componente ListControl está sendo renderizado
- [ ] Teste se o conteudo renderizado pelo componete ListControl está sendo apresentado
- [ ] Teste se o componente PanelControl está sendo renderizado

### Componente Create

- [ ] Teste se o input Emojis está sendo renderizado
- [ ] Teste se o input Dates está sendo renderizado
- [ ] Teste se o input Days está sendo renderizado
- [ ] Teste se o Button Create está sendo renderizado
- [ ] Teste se o Button Edit está sendo renderizado
- [ ] Teste se o Button Close Edit está sendo renderizado
- [ ] Teste se o Button Clear descriptiond está sendo renderizado
- [ ] Teste se o Button Clear All está sendo renderizado
- [ ] Teste se é possível criar uma nova atividade
- [ ] Teste se é possível editar uma atividade

### Componente Emojis

- [ ] Teste se todos os Emojis estão sendo renderizados
- [ ] Teste se ao clicar em um emoji, ele é adicionado ao campo de Emojis
- [ ] Teste se ao fazer uma pesquisa com um emoji, retornará apenas aquele emoji
- [ ] Teste se al clicar em close emojis a pesquisa por emoji é encerrada
  
### Componente Footer

- [ ] Teste se o Footer da aplicação esta sendo renderizado
- [ ] Teste se o o link do linkedin está sendo renderizado
- [ ] Teste se o o link do github está sendo renderizado
- [ ] Teste se a informação do Fotter está correta

### Componente search

- [ ] Teste se o componente Search está sendo renderizado
- [ ] Teste se valores estão sendo inseridos no campo de pesquisa
- [ ] Teste se a pesquisa retorna dados corretos
- [ ] Teste se os plçaceholders estão sendo renderizados corretamente

### Componente Simple

- [ ] Teste se o component Simple esta sendo renderizado
- [ ] Teste se Se a data esta sendo renderizado de forma correta
- [ ] Teste se as listas estão sendo renderizadas corretamente
- [ ] Teste se a função handleRemove está removendo algum item da lista
- [ ] Teste se a função handleEdit está editando algum item da lista
- [ ] Teste se os Buttons do painel estão sendo renderizados corretamente
- [ ] Teste se o campo Emojis esta sendo renderizado corretamente
- [ ] Teste se o campo de descrição está sendo renderizado corretamente
- [ ] Teste se o campo data esta sendo renderizado corretamente
- [ ] Teste se o campo hora esta sendo renderizado corretamente

### Componente typesToDoList

- [ ] Teste se os componentes estão sendo renderizados corretamente
  
### Componente Navbar

- [ ] Teste se os componentes estão sendo renderizados corretamente
- [ ] Teste se a busca por atividades está sendo feita corretamente
- [ ] Testese ao clicar em algum item do menu, a rota é redirecionada corretamente
