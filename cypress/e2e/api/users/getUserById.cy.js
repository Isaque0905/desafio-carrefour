describe('GET /usuarios/:id - Obter usuário por ID', () => {
    it('Deve retornar os dados do usuário corretamente', () => {
      const timestamp = Date.now();
      const user = {
        nome: 'Cypress Detalhe',
        email: `get_id_${timestamp}@qa.com`,
        password: '123456',
        administrador: 'true'
      };
  
      cy.request('POST', '/usuarios', user).then((res) => {
        const userId = res.body._id;
  
        cy.request(`/usuarios/${userId}`).then((resGet) => {
          expect(resGet.status).to.eq(200);
          expect(resGet.body).to.have.property('nome', user.nome);
          expect(resGet.body).to.have.property('email', user.email);
          expect(resGet.body).to.have.property('administrador', user.administrador);
          expect(resGet.body).to.have.property('_id', userId);
        });
      });
    });
  });
  