import { faker } from '@faker-js/faker/locale/pt_BR'

let btnLogar = '.shop-menu > .nav > :nth-child(4) > a'
let campoEmail = '[data-qa="login-email"]'
let campoSenha = '[data-qa="login-password"]'
let btnLogin = '[data-qa="login-button"]'
let btnLogout = '.shop-menu > .nav > :nth-child(4) > a'
let textLoginInvalido = '.login-form > form > p'


Cypress.Commands.add('gerarDadosLogin', () => {
    cy.writeFile("cypress/fixtures/loginData.json", {
        usuarioValido: {
            email: 'vs@gmail.com',
            senha: '123456'
        },
        usuarioInvalido: {
            email: faker.internet.email(),
            senha: faker.internet.password(),
        }
    })
})

Cypress.Commands.add('fazerLogin', (email, senha) => {
    cy.get(btnLogar).click()
    cy.get(campoEmail).type(email)
    cy.get(campoSenha).type(senha)
    cy.get(btnLogin).click()
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

Cypress.Commands.add('validarTextLoginInvalido', () => {
    cy.get(textLoginInvalido).contains('Your email or password is incorrect!')
})


