import React from 'react';

const Rodape = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('E-mail cadastrado:', email);
  };

  return (
    <div style={{ backgroundColor: '#333', color: '#fff', padding: '20px', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <a href='https://www.facebook.com/exemplo' target='_blank' rel='noopener noreferrer' style={{ marginRight: '10px', cursor: 'pointer' }}>
          <img src='https://cdn-icons-png.flaticon.com/512/1384/1384005.png' alt='Facebook' width='25' />
        </a>
        <a href='https://www.instagram.com/exemplo' target='_blank' rel='noopener noreferrer' style={{ marginRight: '10px', cursor: 'pointer' }}>
          <img src='https://cdn-icons-png.flaticon.com/512/3938/3938052.png' alt='Instagram' width='25' />
        </a>
        <a href='https://www.twitter.com/exemplo' target='_blank' rel='noopener noreferrer' style={{ marginRight: '10px', cursor: 'pointer' }}>
          <img src='https://cdn-icons-png.flaticon.com/512/25/25347.png' alt='Twitter' width='25' />
        </a>
      </div>
      <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px', marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '14px', display: 'flex', flexDirection: 'column' }}>
          <p>Política de Privacidade | Termos de Uso | Cookies</p>
          <p>Contato: (61) 98637-4029 | luanpablo465@gmail.com | CEP: 7223-1106</p>
          <p>Formas de pagamento: Visa, Mastercard, American Express, ELO, Paypal, PIX, Boleto, Caixa, Mercado Livre, Troca</p>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src='https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png' alt='Visa' width='50' style={{ marginRight: '10px' }} />
            <img src='https://img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png' alt='Mastercard' width='50' style={{ marginRight: '10px' }} />
            <img src='https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png' alt='American Express' width='50' style={{ marginRight: '10px' }} />
            <img src='https://img.ltwebstatic.com/images2_pi/2018/11/14/1542165929465511500.png' alt='Discover' width='50' style={{ marginRight: '10px' }} />
            <img src='https://img.ltwebstatic.com/images2_pi/2018/06/06/15282719811871317559.png' alt='JCB' width='50' style={{ marginRight: '10px' }} />
            <img src='https://img.ltwebstatic.com/images2_pi/2018/08/15/1534311470399498284.png' alt='JCB' width='50' style={{ marginRight: '10px' }} />
            <img src='https://img.ltwebstatic.com/images3_pi/2021/08/10/16285753252c1e710a326167c3218f7485c76887a8.png' alt='JCB' width='50' style={{ marginRight: '10px' }} />
            <img src='https://img.ltwebstatic.com/images3_pi/2021/03/24/16165701532b8641ac68300d87e3408f638f11df9f.png' alt='JCB' width='50' style={{ marginRight: '10px' }} />
            <img src='https://img.ltwebstatic.com/images3_pi/2021/08/16/1629098490065621dbfe5a3e1fc57f1e654a60f4a0.png' alt='JCB' width='50' style={{ marginRight: '10px' }} />
          </div>
        </div>
        <div style={{ fontSize: '14px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <p>Suporte</p>
          <p>Perguntas frequentes</p>
          <p>Estilos de ícones</p>
          <p>Editor de ícones</p>
          <p>Coleções do Flaticon</p>
          <p>Seguir</p>
          <p>Licença de Merchandising</p>
        </div>
      </div>
      <div >
        <form onSubmit={handleFormSubmit}>
          <p style={{ fontSize: '1rem' }}>CADASTRE-SE PARA RECEBER NOTÍCIAS SOBRE CARROS</p>
          <input type='email' name='email' placeholder='Digite seu e-mail aqui' style={{ padding: '10px', fontSize: '18px', marginRight: '10px' }} />
          <button type='submit' style={{ padding: '10px', fontSize: '18px' }}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Rodape