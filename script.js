// Requisito 3
const validarCredenciais = (email, senha) => {
  const emailCorreto = 'tryber@teste.com';
  const senhaCorreta = '123456';
  return email === emailCorreto && senha === senhaCorreta;
};

const entrarBtn = document.querySelector('.btn-login');

entrarBtn.addEventListener('click', () => {
  const email = document.querySelector('.input-email').value;
  const senha = document.querySelector('.input-senha').value;
  if (validarCredenciais(email, senha)) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const validaCheckbox = () => {
  const btnEnviar = document.querySelector('#submit-btn');
  const checkbox = document.querySelector('#agreement');
  btnEnviar.disabled = true;

  checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
      btnEnviar.disabled = false;
    } else {
      btnEnviar.disabled = true;
    }
  });
};
validaCheckbox();
