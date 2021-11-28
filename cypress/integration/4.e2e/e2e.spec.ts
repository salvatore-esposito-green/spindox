describe('E2E - test all app', () => {
    beforeEach(() => {
        const BASE_API_URL = Cypress.env("BASE_API_URL")
        cy.visit('/')
        cy.intercept('GET', `${BASE_API_URL}/api`).as('getUser')
        cy.wait('@getUser').its('response.statusCode').should('eq',200)
    })

    it('click on tab email', () => {
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

    it('click on tab calendar', () => {
        cy
            .get('div[class*="icon_iconContainer_"]:nth-child(3)')
            .click()

        cy
            .get('span[class*="info_subtitle_"]')
            .should('have.text', 'My birthday is')

        cy
            .get('h2[class*="info_title_"]')
            .should(($h2) => {
                const data = $h2[0].innerText;
                expect(data).to.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)
            })
    })

    it('click on tab map', () => {
        cy
            .get('div[class*="icon_iconContainer_"]:nth-child(4)')
            .click()

        cy
            .get('span[class*="info_subtitle_"]')
            .should('have.text', 'My address is')

        cy
            .get('h2[class*="info_title_"]')
            .should('be.visible')
    })

    it('click on tab phone', () => {
        cy
            .get('div[class*="icon_iconContainer_"]:nth-child(5)')
            .click()

        cy
            .get('span[class*="info_subtitle_"]')
            .should('have.text', 'My phone number is')

        cy
            .get('h2[class*="info_title_"]')
            .should('be.visible')
    })

    it('click on tab password', () => {
        cy
            .get('div[class*="icon_iconContainer_"]:nth-child(6)')
            .click()

        cy
            .get('span[class*="info_subtitle_"]')
            .should('have.text', 'My password is')

        cy
            .get('h2[class*="info_title_"]')
            .should('be.visible')
    })
})
