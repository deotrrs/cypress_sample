context('test Trail buddy', function() {
    let baseUrl = 'https://mount-trail-buddy.com/';
    let input = {
        creds: {
            email: 'sample',
            password: 'password'
        }
    }
    it('Visit Trail Buddy', function(){
        cy.visit(baseUrl);
    });

    it('Login Trail buddy', function(){
        cy.get('a').contains('LOGIN').click();
        cy.get('[name="email"]').type(input.creds.email);
        cy.get('[name="password"]').type(input.creds.password);
        cy.get('button').contains('LOGIN').click();

    });
});