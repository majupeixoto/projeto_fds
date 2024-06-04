describe('Teste de filtrar por data', () => {
    it('Filtrar por data sem espaço no período', () => {
        cy.visit('/');
        cy.get('#entrar').click();
        cy.get('.forget').click();
        cy.get('#username').type("Liza");
        cy.get('#name').type('Liza');
        cy.get(':nth-child(5) > #email').type('liza@123.com');
        cy.get('#password').type('123');
        cy.wait(3000);
        cy.get('.btn_login').click();
        cy.get('[aria-current="page"]').click();
        cy.get('#nome').type('Chalé Alagoas');
        cy.get('#descricao').type('Casa no campo com um vasto jardim calmo e bela vista para as colinas.');
        cy.get('#preco_por_noite').type('750');
        cy.get('#endereco').type('Rua das Alagoas, 100');
        cy.get('#cidade').type('Bonito');
        cy.get('#estado').type('Pernambuco');
        cy.get('#pais').type('Brasil');
        cy.get('#numero_de_quartos').type('4');
        cy.get('#numero_de_banheiros').type('5');
        cy.get('#numero_de_hospedes').type('10');
        cy.get('#foto_principal').attachFile('imgs/chale_alagoas.jpg');
        cy.wait(1000);
        cy.get('.container > form > .btn').click();
        cy.get('#sair').click();
        cy.get('#entrar').click();
        cy.get('.forget').click();
        cy.get('#username').type("nando");
        cy.get('#name').type('nando');
        cy.get(':nth-child(5) > #email').type('nando@123.com');
        cy.get('#password').type('123');
        cy.wait(3000);
        cy.get('.btn_login').click();
        cy.get('#visualizar_detalhes').click();
        cy.get(':nth-child(8) > .btn').click();
        cy.get('#data_check_in').type('2025-07-20');
        cy.get('#data_check_out').type('2025-07-23');
        cy.get('#numero_de_hospedes').type('4');
        cy.wait(3000);
        cy.get('.btn_login').click();
        cy.get('#pills-debito-tab').click();
        cy.get('#pills-debito > :nth-child(2) > #cpf').type('111.222.333-44');
        cy.get('#numero_cartao_debito').type('1243254910112345');
        cy.get('#data_validade_debito').type('02/25');
        cy.get('#cvv_debito').type('123');
        cy.wait(3000);
        cy.get('#pills-debito > #botao_reservar').click();
        cy.get('#sair').click();
        cy.get('#checkin_date').type('2025-07-24')
        cy.get('#checkout_date').type('2025-07-25');
        cy.get(':nth-child(2) > .search-container > .input-group > .input-group-append > .btn').click();
        cy.get('.col').should('not.exist', { timeout: 30000 });
    })

    it('Filtrar por data com espaço no período', () => {
        cy.visit('/');
        cy.get('#entrar').click();
        cy.get('.forget').click();
        cy.get('#username').type("beta");
        cy.get('#name').type('beta');
        cy.get(':nth-child(5) > #email').type('beta@123.com');
        cy.get('#password').type('123');
        cy.wait(1000);
        cy.get('.btn_login').click();
        cy.get('[aria-current="page"]').click();
        cy.get('#nome').type('Casa campo');
        cy.get('#descricao').type('Casa no campo com um vasto jardim calmo e bela vista para as colinas.');
        cy.get('#preco_por_noite').type('750');
        cy.get('#endereco').type('Rua das colinas, 100');
        cy.get('#cidade').type('Bonito');
        cy.get('#estado').type('Pernambuco');
        cy.get('#pais').type('Brasil');
        cy.get('#numero_de_quartos').type('4');
        cy.get('#numero_de_banheiros').type('5');
        cy.get('#numero_de_hospedes').type('10');
        cy.get('#foto_principal').attachFile('imgs/casa_no_campo.jpg');
        cy.wait(1000);
        cy.get('.container > form > .btn').click();
        cy.get('#sair').click();
        cy.get('#entrar').click();
        cy.get('.forget').click();
        cy.get('#username').type("beto");
        cy.get('#name').type('beto');
        cy.get(':nth-child(5) > #email').type('beto@123.com');
        cy.get('#password').type('123');
        cy.wait(1000);
        cy.get('.btn_login').click();
        cy.get('#checkin_date').type('2025-07-20')
        cy.get('#checkout_date').type('2025-07-23');
        cy.wait(1000);
        cy.get(':nth-child(2) > .search-container > .input-group > .input-group-append > .btn').click();
        cy.get('.col').should('exist');
    })  
})