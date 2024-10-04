# Gerenciador de Leads Full Stack - ReactJS & Spring Boot

Este projeto implementa um sistema de gerenciamento de leads para uma empresa, desenvolvido como um desafio técnico Full Stack. A aplicação permite visualizar, aceitar e recusar leads, além de aplicar descontos automaticamente em situações específicas.

## Funcionalidades Principais

- **Gestão de Leads**: Visualização de leads em duas categorias: "Invited" e "Accepted".
- **Detalhes do lead**: Nome do contato, data de criação, bairro, categoria, ID, descrição e preço.
- **Ações**: Aceitar ou Recusar leads.
- **Lógica de Negócios**: 
  - **Aceitação de leads**: Atualização do status do lead para "Aceito". Aplicação automática de 10% de desconto para leads com valor superior a US$ 500.
  - **Recusa de leads**: Atualização do status do lead para "Recusado".
  - **Envio de notificação por e-mail** para o time de vendas (a ser implementado).

## Tecnologias Utilizadas

- **Front-End**: 
  - **ReactJS** - Escolhido por sua popularidade, grande comunidade e sinergia com as tecnologias back-end selecionadas.
- **Back-End**: 
  - **Java** - Por sua robustez e experiência prévia do desenvolvedor.
  - **Spring Boot** - Facilita a configuração, integração com o ReactJS via Axios e conexão com o banco de dados.
  - **Maven** - Gerenciamento de dependências eficiente e familiaridade do desenvolvedor.
- **Banco de Dados**: 
  - **MySQL** - Selecionado pela experiência prévia do desenvolvedor.

## Arquitetura e Design

O projeto utiliza uma arquitetura cliente-servidor, com o ReactJS consumindo uma API RESTful desenvolvida com Spring Boot. A comunicação entre o front-end e o back-end é realizada através de requisições HTTP.

### Pré-requisitos:

- Java 23
- MySQL 8.0
- Maven 3.9.9
- Spring Boot 3.3.4
- Node.js e npm (para o ReactJS) - versão LTS recomendada
