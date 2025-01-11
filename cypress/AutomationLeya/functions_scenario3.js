// 3. Scenario 3

// A function that I write the book and it returns the author name

export function find_author_book(book_name){

    // Find a book by book_name
    cy.get('#searchbar-large').click().type(book_name);

    // Process the return list from the search
    let book_list = cy.get('div[class="search-books-details"]').get('div[class="row"]').children();

    // Click on the first result
    book_list.eq(0).find('a[class="search-item"]').click();

    //Obtain the author name
    let author_name = cy.get('div[class="leya_h2"]').find('a[class="nome_autor"]').invoke('text');

    //Return the author name
    return author_name;
}



