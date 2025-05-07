describe('DELETE /usuarios/:id - Excluir usuário', () => {
    it('Deve excluir um usuário com sucesso', () => {
      const timestamp = Date.now();
      const user = {
        nome: 'Cypress Delete',
        email: `delete_${timestamp}@qa.com`,
        password: '123456',
        administrador: 'false'
      };
  
      cy.request('POST', '/usuarios', user).then((resCreate) => {
        const userId = resCreate.body._id;
  
        cy.request({
          method: 'DELETE',
          url: `/usuarios/${userId}`
        }).then((resDelete) => {
          expect(resDelete.status).to.eq(200);
          expect(resDelete.body.message).to.eq('Registro excluído com sucesso');
        });
      });
    });
  });
  