let btnLogin = '.shop-menu > .nav > :nth-child(4) > a'
let textLogado = '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > b' //vs13
let btnLogout = '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a'

Cypress.Commands.add('validarTelaInicial', () => {
    cy.get(btnLogin).should('exist')
})

Cypress.Commands.add('validarUsuarioLogado', () => {
    cy.get(textLogado).contains('vs13')
})

Cypress.Commands.add('clicarBtnLogout', () => {
    cy.get(btnLogout).click()
})