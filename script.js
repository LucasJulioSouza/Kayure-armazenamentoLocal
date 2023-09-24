if (localStorage.getItem('visitas')) {
  
  let visitas = parseInt(localStorage.getItem('visitas'));
  visitas++;
  localStorage.setItem('visitas', visitas);
} else {
  
  localStorage.setItem('visitas', 1);
}


const contadorDeVisitas = document.getElementById('contador-visitas');
contadorDeVisitas.textContent = `Visitas: ${localStorage.getItem('visitas')}`;

const botaoMudarCor = document.getElementById('mudar-cor');
const opcoesCores = document.getElementById('opcoes-cores');
const selectCor = document.getElementById('escolha-cor');
const aplicarCorButton = document.getElementById('aplicar-cor');


function mostrarOpcoesCores() {
  opcoesCores.style.display = 'block';
}


function ocultarOpcoesCores() {
  opcoesCores.style.display = 'none';
}


function mudarCorDeFundo(cor) {
  document.body.style.backgroundColor = cor;
}


botaoMudarCor.addEventListener('click', mostrarOpcoesCores);


aplicarCorButton.addEventListener('click', () => {
  const corEscolhida = selectCor.value;
  mudarCorDeFundo(corEscolhida);
  ocultarOpcoesCores();
});
