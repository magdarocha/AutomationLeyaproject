// function to click in new user, and create

export function create_and_validate_new_user(){

    let name = 'John'
    let email = 'a' + (Math.random()+1).toString(36).substring(7) + '@gmail.com';
    let password = '123456';

    cy.get('#main').find('i[class="icon-login nav-icon"]').click();
    cy.get('#pjax-container').get('div[class="login-info-form"]').find('a[class="want-registration"]').click();
    //Fill the form
    cy.get('#pjax-container').get('#user_registration_form').find('input[name="nome"]').type(name);
    cy.get('#pjax-container').get('#user_registration_form').find('input[name="email"]').type(email);
    cy.get('#pjax-container').get('#user_registration_form').find('input[name="email2"]').type(email);
    cy.get('#pjax-container').get('#user_registration_form').find('input[name="password"]').type(password);
    cy.get('#pjax-container').get('#user_registration_form').find('input[name="password2"]').type(password);
    cy.get('div[class="form-group permissoes"]').find('input[name="permissoes[universal]"').click();
    cy.get('div[class="form-group"]').find('button[class="login-btn"]').click();


    //Validate that the user icon have the same name, defined in the form
    cy.get('#dropdownMenuLink20').should('have.attr', 'data-tag', name);
}