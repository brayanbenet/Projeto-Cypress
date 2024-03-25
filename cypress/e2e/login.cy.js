/// <reference types="cypress" />

describe('Login', () => {

    beforeEach(() => {
        cy.visit('')
    });

    it('Teste 1 - Login com dados válidos', () => {
        cy.gerarDadosLogin()
        cy.readFile("cypress/fixtures/loginData.json").then((data) => {
            const usuarioValido = data.usuarioValido
            
            cy.clicarBtnLogar()
            cy.preencherCampoEmail(usuarioValido.email)
            cy.preencherCampoSenha(usuarioValido.senha)
            cy.clicarBtnLogin()
            cy.clicarBtnLogout()
        })
    });

    it('Teste 2 - Login com dados inválidos', () => {
        cy.gerarDadosLogin
        cy.readFile("cypress/fixtures/loginData.json").then((data) => {
            const usuarioInvalido = data.usuarioInvalido

            cy.clicarBtnLogar()
            cy.preencherCampoEmail(usuarioInvalido.email)
            cy.preencherCampoSenha(usuarioInvalido.senha)
            cy.clicarBtnLogin()
            cy.clicarBtnLogout()
        })
    });
    
});