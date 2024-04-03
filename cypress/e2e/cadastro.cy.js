/// <reference types="cypress" />

describe('Cadastro', () => {

    beforeEach(() => {
        cy.visit('')
    });
    
    it('Teste 1 - Cadastro com Dados Válidos', () => {
        cy.gerarDadosCadastro()
        cy.readFile("cypress/fixtures/cadastroData.json").then((data) => {
            const cadastroValido = data.cadastroValido

            cy.clicarBotaoLogar()
            cy.preencherCampoNome(cadastroValido.nome)
            cy.preencherCampoEmail(cadastroValido.email)
            cy.clicarBotaoInscrever()
            cy.preencherCampoGenero()
            cy.preencherCampoSenha(cadastroValido.senha)
            cy.preencherCampoDia(cadastroValido.dia)
            cy.preencherCampoMes(cadastroValido.mes)
            cy.preencherCampoAno(cadastroValido.ano)
            cy.preencherCampoPrimeiroNome(cadastroValido.primeiroNome)
            cy.preencherCampoUltimoNome(cadastroValido.ultimoNome)
            cy.preencherCampoEmpresa(cadastroValido.empresa)
            cy.preencherCampoEnderecoUm(cadastroValido.enderecoUm)
            cy.preencherCampoEnderecoDois(cadastroValido.enderecoDois)
            cy.preencherCampoPais(cadastroValido.pais)
            cy.preencherCampoEstado(cadastroValido.estado)
            cy.preencherCampoCidade(cadastroValido.cidade)
            cy.preencherCampoCep(cadastroValido.cep)
            cy.preencherCampoTelefone(cadastroValido.telefone)
            cy.clicarBtnCriarConta()
            cy.clicarBtnContinuar()
            cy.clicarBtnDeletarConta()
            cy.clicarBtnContinuar()
            cy.validarContaDeletada()
        })
    });
});