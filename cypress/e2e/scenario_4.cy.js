// Search for the book "1984."
// Add the book to the basket.
// Confirm that the number of items in the basket is "1."

import {get_book_details, buy_book, verify_number_cart} from '../AutomationLeya/functions_scenario4.js';

describe('Scenario 4', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url_leya"));
    });

    it('Buy a book',{}, ()=>{
        get_book_details('1984');
        buy_book();
        verify_number_cart(1);

    }
)});
