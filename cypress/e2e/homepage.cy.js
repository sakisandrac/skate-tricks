describe('homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'tricks'
    })
    .visit('http://localhost:3000/')
  })  

  it('should visit homepage and see trick card with trick information', () => {
    cy.get('h1').should('have.text', 'Sick Trick Wish List')
    .get('.card-container').first()
    .get('p').first().should('have.text', 'Regular Treflip')
    .next('p').should('have.text', 'Obstacle: Flat ground')
    .next('p').should('have.text', 'Link to Tutorial: https://www.youtube.com/watch?v=XGw3YkQmNig')
    })

  it('should see a list of all tricks', () => {
    cy.get('.card-container').first().get('p').first().should('have.text', 'Regular Treflip')
    .get('.cards-container > :nth-child(2) > :nth-child(1)').should('have.text', 'Regular Heelflip')
    .get('.cards-container > :nth-child(3) > :nth-child(1)').should('have.text', 'Switch Frontside 50-50, backside 180 out')
  })
  
  it('should be able to use form to add new trick', () => {
    cy.get('form').get('select').first().select('regular')
    .get('[name="name"]').type('new trick name')
    .get('[name="obstacle"]').select('pool')
    .get('[name="link"]').type('www.youtube.com/example')
    .get('button').click()
    .get('.card-container').first().get('p').first().should('have.text', 'Regular New trick name')
    .next('p').should('have.text', 'Obstacle: Pool')
    .next('p').should('have.text', 'Link to Tutorial: www.youtube.com/example')
  })

  })