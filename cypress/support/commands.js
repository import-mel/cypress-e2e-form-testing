const { faker } = require("@faker-js/faker/locale/pt_BR");
const { SELECTORS } = require("./selectors");

Cypress.Commands.add('fill_mandatory_fields', () => {
      const sanitize = (str) => 
        str
        .normalize('NFD')                   // separa acentos
        .replace(/[\u0300-\u036f]/g, '')    // remove acentos
        .toLowerCase()
        .replace(/\s/g, ''); 

    const name = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = `${sanitize(name)}.${sanitize(lastname)}@tuamaeaquelaursa.com`;

    cy.get(SELECTORS.form_CAC_TAT.form_fields.name).type(name).should('have.value', name)
    cy.get(SELECTORS.form_CAC_TAT.form_fields.lastname).type(lastname).should('have.value', lastname)
    cy.get(SELECTORS.form_CAC_TAT.form_fields.email).type(email).should('have.value', email.replace(/\s/g, ""))
    cy.get(SELECTORS.form_CAC_TAT.form_fields.text_area).type('Assistam ou leiam Diário de uma apotecária (espero que um dia traduzam pro portugês)')
});

