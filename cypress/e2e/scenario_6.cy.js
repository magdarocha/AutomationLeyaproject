// Search and add a book to cart
// Delete the book from cart
// Verify that the cart is empty

//GIVEN I have a name book 
//WHEN I had a book to the cart
//AND delete the book from cart 
//THEN I have the empty card

import {get_book_details,buy_book, verify_number_cart} from '../AutomationLeya/functions_scenario4.js';
import { delete_book } from '../AutomationLeya/functions_scenario6.js';

describe('Scenario 6', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url_leya"));
    });

    it('Search and buy a book, and then remove it',{}, ()=>{
        get_book_details('dom quixote');
        buy_book();
        verify_number_cart(1);
        delete_book();

    })

    }
);
