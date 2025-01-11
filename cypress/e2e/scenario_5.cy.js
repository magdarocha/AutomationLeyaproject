// Change the background to dark mode.
// Check if the dark mode has been successfully applied to the website.


import {change_mode, validate_darkmode_icon} from '../AutomationLeya/functions_scenario5.js';

describe('Scenario 5', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url_leya"));
    });

    it('Change to dark mode and verify the moon icon',{}, ()=>{
        change_mode();
        validate_darkmode_icon('icon-moon');

    })
    it('EXTRA: Change to dark mode then back to light mode and verify the sun icon',{}, ()=>{
        change_mode();
        change_mode();
        validate_darkmode_icon('icon-sun');

    }
)});
