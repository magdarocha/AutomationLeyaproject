require('cypress-xpath')

// 2. Scenario 2

export function find_1984(){

    // Search for the book "1984."
    cy.get('#searchbar-large').click().type('1984');

    // Validate that the author is "George Orwell."
    let author = 'George Orwell';
    // Process the return list from the search 
    let book_list = cy.get('div[class="search-books-details"]').get('div[class="row"]').children();

    // Click on the first result (ASSUMPTION)
    book_list.eq(0).find('a[class="search-item"]').click();

    cy.get('div[class="leya_h2"]').find('a[class="nome_autor"]').should('have.text', author.toUpperCase());

    // Confirm that the ISBN is "9789722071550."
    // Applied REGEX to find the number
    cy.get('section.sinopse li:eq(0)').invoke('text').should('match', /.*9789722071550/);
    
    // Check that the number of pages is "344."
    cy.get('section.sinopse li:eq(5)').invoke('text').should('match', /.*344/);

    // Ensure that the dimensions of the book are "235 x 157 x 23 mm."

    //Clean data to be validated. Due to regex not working
    cy.get('section.sinopse li:eq(4)').invoke('text').then((dimension) => {
        dimension = dimension.split(':')[1];
        dimension = dimension.replace('\n', '');
        expect(dimension.trim()).to.equal('235 x 157 x 23 mm')
    })


}
