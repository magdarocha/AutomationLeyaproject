// Search for the book "1984."
// Validate that the author is "George Orwell."
// Confirm that the ISBN is "9789722071550."
// Check that the number of pages is "344."
// Ensure that the dimensions of the book are "235 x 157 x 23 mm."

import {find_1984} from '../AutomationLeya/functions_scenario2.js';

describe('Scenario 2', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url_leya"));
    });

    it('Find the book 1984',{}, ()=>{
        find_1984();
      
    });
});