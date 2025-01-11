//function to delete a book and verify card empty

export function delete_book(){
    cy.get('div[class="addToCart-item"]').find('a[class="b-delete"]').click();
    cy.get('div[class="add-to-cart  dropdown"]').find('div[class=""]').invoke('text').should('match', /.*Carrinho vazio.*/);
}