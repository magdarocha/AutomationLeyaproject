//Create a new account with valid inputs
//Verify that the page show a validation message

//GIVEN I have valid data in user creation form 
//WHEN I click in Confirm button
//THEN I have a new user

import {create_and_validate_new_user} from '../AutomationLeya/functions_scenario7.js';

describe('Scenario 7', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url_leya"));
    });

    it('Create a new user acount',{}, ()=>{
        create_and_validate_new_user();})

    
    })