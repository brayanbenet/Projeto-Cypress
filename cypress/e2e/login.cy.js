/// <reference types="cypress" />
describe('Login', () => {

    before(() => {
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
    
});