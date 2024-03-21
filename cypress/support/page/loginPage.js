import { faker } from '@faker-js/faker/locale/pt_BR'

let btnLogar = '.shop-menu > .nav > :nth-child(4) > a'
let campoEmail = '[data-qa="login-email"]'
let campoSenha = '[data-qa="login-password"]'
let btnLogin = '[data-qa="login-button"]'
let btnLogout = '.shop-menu > .nav > :nth-child(4) > a'


Cypress.Commands.add('gerarDadosLogin', () => {
    cy.writeFile("cypress/fixtures/loginData.json", {
        usuarioValido: {
            email: 'vs@gmail.com',
            senha: '123456'
        },
        usuarioInvalido: {
            email: faker.internet.email(),
            senha: faker.internet.password(),
        },
        usuarioSenhaInvalida:{
            email: 'vs@gmail.com',
            senha: faker.internet.password()
        },
        usuarioEmailInvalido:{
            email: faker.internet.email(),
            senha: '123456'
        }
    })
})

Cypress.Commands.add('clicarBtnLogar', () => {
    cy.get(btnLogar).click()
})

Cypress.Commands.add('preencherCampoEmail', (email) => {
    cy.get(campoEmail).type(email)
})

Cypress.Commands.add('preencherCampoSenha', (senha) => {
    cy.get(campoSenha).type(senha)
})

Cypress.Commands.add('clicarBtnLogin', () => {
    cy.get(btnLogin).click()
})

Cypress.Commands.add('clicarBtnLogout', () => {
    cy.get(btnLogout).click()
})


