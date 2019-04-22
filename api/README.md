# API da Livraria #

___
## Sobre ##

- Este projeto foi desenvolvido como parte do recrutamento da HBSIS
- A API foi feita utilizando .NET Core 2.2
- Todas as funcionalidades retornam json contendo as informações da requisitadas.

## Pré requisitos ##

- .NET Core versão
- Visual Studio 2017 ou superior
- Banco de dados SQL Server 207 ou superior

## Componentes ##

> Componentes e frameworks utilizados no projeto

- [.NET Core] (https://dotnet.microsoft.com/download)

## Instalação ##

> Rode o comando abaixo numa CLI

```sh
git clone git@github.com:moura-saulo/bookstore-api.git {app-name}
```

> Abra a solução a partir do Visual Studio instalado
> No arquivo BookContext no diretório Contexts do projeto Recruitment.Infra.Data substitua a string de conexão pelos dados do seu banco de dados
> Execute as migrations em uma CLI a partir dos seguintes comandos

```sh
cd \path\to\app\Recruitment.Infra.Data
dotnet ef database update
```

## Colocar para Rodar ##

> Execute o IIS Express a partir da IDE do Visua Studio e verifique se a aplicação funciona normalmente