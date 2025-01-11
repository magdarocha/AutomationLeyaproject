// 1. Scenario 1

export function find_book(){

    // Search George
    cy.get('#searchbar-large').click().type('George');

    //Verify that the book "O Triunfo dos Porcos" is displayed on the list.
    cy.get('div[class="search-books-details"]').should('contain','O Triunfo dos Porcos');

    //Confirm that the book description contains the words "Quinta Manor"

    cy.get('a[href="https://www.leyaonline.com/pt/livros/romance/o-triunfo-dos-porcos/"]').click();
    cy.get('section[class="sinopse"]').get('div.show-more:eq(0)').should('contain','Quinta Manor');

}

