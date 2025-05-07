describe('POST /usuarios - Criar novo usuário', () => {
  it('Deve criar um usuário com sucesso', () => {
    const timestamp = Date.now();
    const user = {
      nome: 'Isaque Teste',
      email: `isaque_${timestamp}@qa.com`,
      password: '123456',
      administrador: 'true'
    };

    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: user,
      failOnStatusCode: false
    }).then((res) => {
      expect([201, 400]).to.include(res.status);
      if (res.status === 201) {
        expect(res.body.message).to.eq('Cadastro realizado com sucesso');
        expect(res.body).to.have.property('_id');
      } else {
        expect(res.body.message).to.eq('Este email já está sendo usado');
      }
    });
  });
});
