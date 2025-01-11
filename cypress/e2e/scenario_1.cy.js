//Search for George
//Verify that the book "O Triunfo dos Porcos" is displayed on the list.
//Confirm that the book description contains the words "Quinta Manor"


import {find_book} from '../AutomationLeya/functions_scenario1.js';

describe('Scenario 1', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url_leya"));
    });

    it('Find the book',{}, ()=>{
        find_book();
      

    });
});