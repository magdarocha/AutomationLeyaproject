//function to change to the dark mode
export function change_mode(){
    cy.get('#darkmode').find('a').click();

}

//function to validate that the icone change to a moon
export function validate_darkmode_icon(expected_icon){
    cy.get('#darkmode').find('i').should('have.class', expected_icon);

}