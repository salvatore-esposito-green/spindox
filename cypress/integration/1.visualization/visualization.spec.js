describe('Load elements in dom', () => {
    beforeEach(() => {
        const BASE_API_URL = Cypress.env("BASE_API_URL")
        cy.visit('/')
        cy.intercept('GET', `${BASE_API_URL}/api`).as('getUser')
        cy.wait('@getUser').its('response.statusCode').should('eq',200)
    })

    it('displays thumb', () => {
        cy.get('div[class*="tumblr_tumblrContainer"] img')
    })

    it('displays subtitle span', () => {
        cy.get('span[class*="info_subtitle_"]')
    })

    it('displays title h2', () => {
        cy.get('h2[class*="info_title_"]')
    })

    it('displays toolbar icons', () => {
        cy.get('div[class*="toolbar_toolBar_"]')
        cy.get('div[class*="icon_iconContainer_"]')
    })

})
