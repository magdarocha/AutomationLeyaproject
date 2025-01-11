// Search for the book "1984."
// Verify that the book "A Quinta dos Animais" is authored by the same author.

import {find_author_book} from '../AutomationLeya/functions_scenario3.js';

describe('Scenario 3', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url_leya"));
    });

    it('Check if the author is the same',{}, ()=>{

//Call async function then after geting first name, call another async function then compare both names
    
        find_author_book("1984").then((first_author_name) => {
            console.log(first_author_name);

//ASSUMPTION Referir a questão de dizer no texto 'A quinta dos animais', mas esse livro não existe na Leya
            find_author_book('O Triunfo dos Porcos').then((second_author_name) => {
                console.log(second_author_name);

                expect(first_author_name).to.equal(second_author_name);
            })
        })

    });
});