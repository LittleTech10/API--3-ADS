# API: 3º ADS - Little Tech

<br>

<h1> Aprendizado por Projeto Integrado do 3º semestre da Faculdade de Tecnologia de São José dos Campos - "Professor Jessen Vidal". </h1>

<br> <br>

<h2> O Projeto 💼 </h2>

<p> Eu, como usuário, quero que seja desenvolvido um sistema de gerenciamento de usuários, assim como um serviço de autenticação/autorização. Este serviço deve ser implementando utilizando tecnologia de microserviço, e usando recursos e ferramentas da GCP (Google Cloud Platform). Deve ser utilizado container, e implementando em esteira de CI/CD. O sistema deve seguir as boas práticas de desenvolvimento orientado a objetos como, SOLID e Clean Code, e Clean Architecture. Também deverão ser implementados os testes unitátios e de integração, para garantir a qualidade da entrega. A cobertura do código deve ser de pelo menos 80%, devendo ser validado pelo SONAR, ou outra ferramenta de análise. O sistema deve possuir uma interface para gerenciar os usuarios, pemitindo que sejam criados, visualizados, editados e removidos. Deve ainda permitir a atribuição de permissões para cada usuário. O sistema deverá utilizar como tecnologia backend a linguagem NodeJS, em sua versão mais atual, banco de dados Postgres, e para o frontend VueJS.</p>

<br>

<h2>Objetivo 📌</h2>

<p> Desenvolver um sistema WEB de gerenciamento de usuários, assim como um serviço de autenticação/autorização. Este serviço deve ser implementando utilizando tecnologia de microserviço, e usando recursos e ferramentas da GCP (Google Cloud Platform). </p>
 
<br><br>
 
<h3> Requisitos Funcionais: </h3>

<p> • Ao acessar o sistema, login e senha, o usuário deve ser direcionado para a listagem de usuários cadastrados. Caso contrário, deverá ser retornada mensagem de erro, e o usuário deve continuar na tela de login. </p>
<p> • Deverá ser possível cadastrar novos usuários. </p>
<p> • Deverá ser possível editar usuários já cadastrados. </p>
<p> • Deverá ser possível visualizar todos os usuários cadastrados em forma de lista. Os campos apresentados devem ser nome, perfil de acesso, status de criação, e se está ativo. </p>
<p> • Deverá ser possível desativar um usuário (exclusão lógica). </p>
<p> • Deverá existir a funcionalidade de ‘esqueci minha senha`. Deve ser enviado e-mail com token, para que o usuário possa criar nova senha no sistema. </p>



<br><br>

<h3> Requisitos Não Funcionais: </h3> 

 <p> • Documentação de todo o sistema. Modelagem de banco, e código fonte. </p>
 <p> • Manual do usuário. </p>
 <p> • Utilização do GCP. </p>
 <p> • Utilização de ferramentas para CI/CD (Git, GihubAction, Jenkins, Sonar). </p>
 <p> • Criação de componentes para reaproveitamento de código. </p>
 <br>
 <br>
 
 <h3> Tecnologias Exigidas: </h3> 

 <p> • NodeJS. </p>
 <p> • VueJS. </p>
 <p> • PostgreSQL. </p>
 <p> • GCP. </p>
 <p> • Docker. </p>
 
 <br>
 <br>
 
<h2>Cronograma das Sprints 📆</h2>
<br>
<br>
<img align="center" src="Imagens/CronogramaGeral.jpeg"/>


<h3> • Sprint 1 - 29/08 a 18/09 </h3>

✔️ Wireframe <br>
✔️ Estilização do cadastro de canais <br>
✔️ Estilização das configurações ativas <br>
✔️ Estilização das configurações de canais <br>
✔️ Implementação do banco de dados no cadastramento <br>
✔️ Desenvolvimento da página de login <br>

<h3> • Sprint 2 - 19/09 a 09/10 </h3>

✔️ Funcionalidade do Banco de Dados das páginas : Configurações de canais e Configurações ativas. <br> 
✔️ Funcionalidade do Back-end das páginas : Configurações de canais e Configurações ativas. <br>
✔️ Aperfeiçoamento do Front-End e Banco de Dados. <br>

<h3> • Sprint 3 - 17/10 a 06/11 </h3>

✔️ Barra de Pesquisa. <br>
✔️ Aperfeiçoamento do Front-End <br>
✔️ Correção de bugs e aperfeiçoamento no Banco de Dados. <br>

<h3> • Sprint 4 - 07/11 a 27/11 </h3>
✔️ Barra de pesquisa na página de administrador <br>
✔️ Aperfeiçoamento do Front-End <br>
✔️ Visualização de senha na página de login <br>
✔️ Página de dúvidas frequentes <br>

<br>
<br>
<h2>Demonstração completa de nossa aplicação 💻</h2><br>
<h3 align="center"> Link da aplicação: https://youtu.be/6_AY_52C02E </h3>
<br>
<br>
<h2>Tecnologias Utilizadas 🔧</h2>
<br>
• Front-end: Java Swing.<br>
• Back-end: Java.<br>
• Banco de Dados: MySQL.<br>
• Ferramentas: Github, Apache NetBeans IDE, Discord, Figma, Canva, AWS.<br>
<div style="display: inline_blocks"><br>              
<img align="center"src="Imagens/java.png" height= "80" width= "80"/>
<img align="center"src="Imagens/mysql.png" height= "80" width= "80"/>
<img align="center"src="Imagens/github.png" height= "80" width= "80"/>
<img align="center"src="Imagens/netbeans.png" height= "80" width= "80"/>
<img align="center"src="Imagens/discordia.png" height= "80" width= "80"/>
<img align="center"src="Imagens/figma.png" height= "80" width= "80"/>
<img align="center"src="Imagens/canva.png" height= "80" width= "80"/>
<img align="center"src="Imagens/aws.png" height= "80" width= "80"/>
<br>
<br>
<h2>Backlog 📊</h2><br>
 O product backlog é uma lista ordenada que tem como função documentar de forma clara todos os requisitos do desenvolvimento de um projeto. Itens que precisem de maior refinamento geralmente têm uma importância menor e ficam mais abaixo no Product Backlog.  
<br>
<br>

<img align="center" src="Imagens/BacklogTotal.png"/>
<br>
<br>
<h2>Modelo de dados📑</h2><br>
 Um modelo de banco de dados mostra a estrutura lógica de um banco de dados, incluindo as relações e restrições que determinam como os dados podem ser armazenados e acessados.
<br>

<h5>Modelo Conceitual<h5>
<img align="center"src="Imagens/conceitual.jpeg" height= "600" width= "1100"/>

<h5>Modelo Físico<h5>
<img align="center"src="Imagens/fisico.jpeg" height= "400" width= "600"/>

<h5>Modelo Lógico<h5>
<img align="center"src="Imagens/Modelo_dados_lógicoS2.jpeg" height= "400" width= "600"/>

<h2>Burndown 📈📉 </h2> <br>
 O Sprint Burndown Chart mostra a comparação entre o trabalho estimado inicialmente no Sprint Planning Meeting com a quantidade restante estimada de trabalho.
<br>
<h3>Burndown - 1ª Sprint </h3> <br>
<img align="center" src="Imagens/Burndown.jpeg" height= "400" width= "600"/>
<br>
<h3>Burndown - 2ª Sprint </h3> <br>
<img align="center" src="Imagens/burnDown2.png" height= "400" width= "600"/>
<br>
<h3>Burndown - 3ª Sprint </h3> <br>
<img align="center" src="Imagens/burndownS3.PNG" height= "400" width= "600"/>
<br>
<h3>Burndown - 4ª Sprint </h3> <br>
<img align="center" src="Imagens/burndownS4.png" height= "400" width= "600"/>
<br>


 <h2>Equipe 👾</h2>
 
 Nome|Função|Github|Linkedin 
-----|------|------|---------
Eliézer Lopes  |Desenvolvedor|[@Github](https://github.com/EliezerLopes1)|[@Linkedin](https://www.linkedin.com/in/eli%C3%A9zer-lopes-b89a4124a)
Gabriel Angelis|Desenvolvedor|[@Github](https://github.com/GabrAngelis)|[@Linkedin](https://www.linkedin.com/in/gabriel-luis-de-angelis-b64816237/)
Isabel Reis    |Desenvolvedor|[@Github](https://github.com/IsabelRReis)|[@Linkedin](https://www.linkedin.com/in/isabel-reis-09806920b/)
Mariana Veloso |Product Owner|[@Github](https://github.com/Marih2210)|[@Linkedin](https://www.linkedin.com/in/mariana-veloso-979436231)
Nicolas Pereira|Desenvolvedor|[@Github](https://github.com/NicolasPereira06)|[@Linkedin](https://www.linkedin.com/in/nicolas-bonif%C3%A1cio-426804237/)
Rafaela Cabral |Scrum Master |[@Github](https://github.com/RafaelaCabral)|[@Linkedin](https://www.linkedin.com/in/rafaela-vieira-cabral-733b5922a)
Thyago Silveira|Desenvolvedor|[@Github](https://github.com/Thyaguixx)|[@Linkedin](https://www.linkedin.com/in/thyago-silveira-276984237/)

 
<br>
<br>
