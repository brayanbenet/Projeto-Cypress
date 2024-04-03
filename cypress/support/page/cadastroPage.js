import { faker } from '@faker-js/faker'

let btnLogar = '.shop-menu > .nav > :nth-child(4) > a'
let campoNome = '[data-qa="signup-name"]';
let campoEmail = '[data-qa="signup-email"]';
let btnInscrever = '[data-qa="signup-button"]';
let campoGenero = '[id="id_gender1"]';
let campoSenha = '[data-qa="password"]';
let campoDia = '[data-qa="days"]';
let campoMes = '[data-qa="months"]';
let campoAno = '[data-qa="years"]';
let campoPrimeiroNome = '[data-qa="first_name"]';
let campoUltimoNome = '[data-qa="last_name"]';
let campoEmpresa = '[data-qa="company"]';
let campoEnderecoUm = '[data-qa="address"]';
let campoEnderecoDois = '[data-qa="address2"]';
let campoPais = '[data-qa="country"]';
let campoEstado = '[data-qa="state"]';
let campoCidade = '[data-qa="city"]';
let campoCep = '[data-qa="zipcode"]';
let campoTelefone = '[data-qa="mobile_number"]';
let btnCriarConta = '[data-qa="create-account"]';
let btnContinue = '[data-qa="continue-button"]';
let btnDeletarConta = '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a';

Cypress.Commands.add('gerarDadosCadastro', () => {
    cy.writeFile('cypress/fixtures/cadastroData.json', {
        cadastroValido: {
            nome: faker.person.firstName(),
            email: faker.internet.email(),
            senha: faker.internet.password(),
            dia: faker.number.int({min: 1, max: 28}),
            mes: faker.date.month(),
            ano: faker.number.int({min: 1960, max: 2005}).toString(),
            primeiroNome: faker.person.firstName(),
            ultimoNome: faker.person.lastName(),
            empresa: faker.company.name(),
            enderecoUm: faker.location.street(),
            enderecoDois: faker.location.street(),
            pais: 'United States',
            estado: faker.location.state('en_US'),
            cidade: faker.location.city('en_US'),
            cep: faker.location.zipCode('#######'),
            telefone: faker.phone.number()
        }
    })
})

Cypress.Commands.add('clicarBotaoLogar', () => {
    cy.get(btnLogar).click()
})

Cypress.Commands.add('preencherCampoEmail', (email) => {
    cy.get(campoEmail).type(email)
})

Cypress.Commands.add('preencherCampoNome', (nome) => {
    cy.get(campoNome).type(nome)
})

Cypress.Commands.add('clicarBotaoInscrever', () => {
    cy.get(btnInscrever).click()
})

Cypress.Commands.add('preencherCampoGenero', () => {
    cy.get(campoGenero).click()
})

Cypress.Commands.add('preencherCampoSenha', (senha) => {
    cy.get(campoSenha).type(senha)
})

Cypress.Commands.add('preencherCampoDia', (dia) => {
    cy.get(campoDia).select(dia)
})

Cypress.Commands.add('preencherCampoMes', (mes) => {
    cy.get(campoMes).select(mes)
})

Cypress.Commands.add('preencherCampoAno', (ano) => {
    cy.get(campoAno).select(ano)
})

Cypress.Commands.add('preencherCampoPrimeiroNome', (primeiroNome) => {
    cy.get(campoPrimeiroNome).type(primeiroNome)
})

Cypress.Commands.add('preencherCampoUltimoNome', (ultimoNome) => {
    cy.get(campoUltimoNome).type(ultimoNome)
})

Cypress.Commands.add('preencherCampoEmpresa', (empresa) => {
    cy.get(campoEmpresa).type(empresa)
})

Cypress.Commands.add('preencherCampoEnderecoUm', (enderecoUm) => {
    cy.get(campoEnderecoUm).type(enderecoUm)
})

Cypress.Commands.add('preencherCampoEnderecoDois', (enderecoDois) => {
    cy.get(campoEnderecoDois).type(enderecoDois)
})

Cypress.Commands.add('preencherCampoPais', (pais) => {
    cy.get(campoPais).select(pais)
})

Cypress.Commands.add('preencherCampoEstado', (estado) => {
    cy.get(campoEstado).type(estado)
})

Cypress.Commands.add('preencherCampoCidade', (cidade) => {
    cy.get(campoCidade).type(cidade)
})

Cypress.Commands.add('preencherCampoCep', (cep) => {
    cy.get(campoCep).type(cep)
})

Cypress.Commands.add('preencherCampoTelefone', (telefone) => {
    cy.get(campoTelefone).type(telefone)
})

Cypress.Commands.add('clicarBtnCriarConta', () => {
    cy.get(btnCriarConta).click()
})

Cypress.Commands.add('clicarBtnContinuar', () => {
    cy.get(btnContinue).click()
})

Cypress.Commands.add('clicarBtnDeletarConta', () => {
    cy.get(btnDeletarConta).click()
})

Cypress.Commands.add('validarContaDeletada', () => {
    cy.get(btnLogar).should('be.visible')
})



