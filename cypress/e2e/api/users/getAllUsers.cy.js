describe('GET /usuarios - Listar usuários', () => {
    it('Deve retornar todos os usuários cadastrados', () => {
      cy.request('/usuarios').then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('usuarios');
        expect(res.body.usuarios).to.be.an('array');
      });
    });
  });
  