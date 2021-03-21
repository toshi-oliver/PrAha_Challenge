describe('react_tutorial', () => {
  it('Paturn 1 :Winner X', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.get('[data-e2e="0"]').click();
    cy.get('[data-e2e="1"]').click();
    cy.get('[data-e2e="2"]').click();
    cy.get('[data-e2e="3"]').click();
    cy.get('[data-e2e="4"]').click();
    cy.get('[data-e2e="5"]').click();
    cy.get('[data-e2e="6"]').click();
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: X');
  })
  it('Paturn 2 :Winner O', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.get('[data-e2e="0"]').click();
    cy.get('[data-e2e="1"]').click();
    cy.get('[data-e2e="2"]').click();
    cy.get('[data-e2e="3"]').click();
    cy.get('[data-e2e="5"]').click();
    cy.get('[data-e2e="4"]').click();
    cy.get('[data-e2e="6"]').click();
    cy.get('[data-e2e="7"]').click();
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: O');
  })
  it('Paturn 3 : Draw', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.get('[data-e2e="0"]').click();
    cy.get('[data-e2e="1"]').click();
    cy.get('[data-e2e="2"]').click();
    cy.get('[data-e2e="4"]').click();
    cy.get('[data-e2e="6"]').click();
    cy.get('[data-e2e="8"]').click();
    cy.get('[data-e2e="7"]').click();
    cy.get('[data-e2e="3"]').click();
    cy.get('[data-e2e="5"]').click();
    cy.get('[data-e2e="status"]').should('have.text', 'Draw!');
  })
})