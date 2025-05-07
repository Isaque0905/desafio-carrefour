describe('PUT /usuarios/:id - Atualizar usuário', () => {
    it('Deve atualizar os dados de um usuário existente', () => {
      const timestamp = Date.now();
      const user = {
        nome: 'Cypress Update',
        email: `update_${timestamp}@qa.com`,
        password: '123456',
        administrador: 'true'
      };
  
      cy.request('POST', '/usuarios', user).then((resCreate) => {
        const userId = resCreate.body._id;
  
        const updatedData = {
          nome: 'Cypress Atualizado',
          email: `atualizado_${timestamp}@qa.com`,
          password: '654321',
          administrador: 'false'
        };
  
        cy.request({
          method: 'PUT',
          url: `/usuarios/${userId}`,
          body: updatedData
        }).then((resUpdate) => {
          expect(resUpdate.status).to.eq(200);
          expect(resUpdate.body.message).to.eq('Registro alterado com sucesso');
        });
      });
    });
  });
  