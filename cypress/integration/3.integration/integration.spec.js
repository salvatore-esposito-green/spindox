describe('INTEGRAZION - test more fc', () => {
    beforeEach(() => {
        const BASE_API_URL = Cypress.env("BASE_API_URL")
        cy.visit('/')
        cy.intercept('GET', `${BASE_API_URL}/api`).as('getUser')
        cy.wait('@getUser').its('response.statusCode').should('eq',200)
    })

    it('click on icon & display title + subtitle', () => {
        cy
            .get('div[class*="icon_iconContainer_"]:nth-child(2)')
            .click()

        cy
            .get('span[class*="info_subtitle_"]')
            .should('have.text', 'My email address is')

        cy
            .get('h2[class*="info_title_"]')
            .should(($h2) => {
                const email = $h2[0].innerText;
                expect(email).to.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
            })

    })

})
