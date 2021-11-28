describe('UNIT - test single fc', () => {
    beforeEach(() => {
        const BASE_API_URL = Cypress.env("BASE_API_URL")
        cy.visit('/')
        cy.intercept('GET', `${BASE_API_URL}/api`).as('getUser')
        cy.wait('@getUser').its('response.statusCode').should('eq',200)
    })

    it('load image thumb', () => {
        cy.get('div[class*="tumblr_tumblrContainer"]').find("img").should('be.visible')
    })

    it('click on icon', () => {
        cy.get('div[class*="icon_iconContainer_"]:nth-child(2)').click()
    })

    it('selected icon', () => {
        cy
            .get('div[class*="icon_iconContainer_"]:nth-child(2)')
            .click()
            .should(($div) => {
                const className = $div[0].className;
                expect(className).to.match(/icon_active_/)
            })
    })

})
