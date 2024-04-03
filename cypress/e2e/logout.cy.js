/// <reference types="cypress" />

describe('', () => {
    
    beforeEach(() => {
        cy.visit('')
    });

    it('Teste 01 - Fazer Logout com Sucesso', () => {
        
        cy.validarTelaInicial()
        cy.readFile("cypress/fixtures/loginData.json").then((data) => {
            const usuarioValido = data.usuarioValido
            cy.fazerLogin(usuarioValido.email, usuarioValido.senha)
        })
        cy.validarUsuarioLogado()
        cy.clicarBtnLogout()
        cy.validarTelaInicial()
    });
});