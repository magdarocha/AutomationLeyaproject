//function to search and go to the book details
export function get_book_details(book_name){

    // Find a book by book_name
    cy.get('#searchbar-large').click().type(book_name);

    // Process the return list from the search
    let book_list = cy.get('div[class="search-books-details"]').get('div[class="row"]').children();

    // Click on the first result
    book_list.eq(0).find('a[class="search-item"]').click();

}

//function to click in buy button
export function buy_book(){

    cy.get('div[class="choose-options"]').get('div[class="choose-op-item book"]').find('a').click();


}

//function to verify the number in the cart
export function verify_number_cart(expected_number){

    cy.get('div[class="add-to-cart  dropdown"]').find('a').should('have.attr', 'data-tag', expected_number);


}