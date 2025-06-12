function calcularCombustivel() {
  const alcool = document.getElementById('alcool');
  const gasolina = document.getElementById('gasolina');
  const valor = document.getElementById('valor');
  const resultadoDiv = document.getElementById('resultado');

  const precoAlcool = parseFloat(alcool.dataset.valor) / 100;
  const precoGasolina = parseFloat(gasolina.dataset.valor) / 100;
  const valorAbastecer = parseFloat(valor.dataset.valor) / 100;

  if (isNaN(precoAlcool) || isNaN(precoGasolina) || isNaN(valorAbastecer)) {
    resultadoDiv.textContent = "Preencha todos os campos corretamente.";
    return;
  }

  const relacao = precoAlcool / precoGasolina;
  let tipo, litros;

  if (relacao < 0.7) {
    tipo = "álcool";
    litros = valorAbastecer / precoAlcool;
  } else {
    tipo = "gasolina";
    litros = valorAbastecer / precoGasolina;
  }

  resultadoDiv.innerHTML = `Use <strong>${tipo}</strong>,<br>você abastecerá <strong>${litros.toFixed(2)} litros</strong>.`;

  alcool.value = '';
  gasolina.value = '';
  valor.value = '';
  alcool.dataset.valor = '';
  gasolina.dataset.valor = '';
  valor.dataset.valor = '';
}

// Formatação automática sem IMask
document.addEventListener("DOMContentLoaded", () => {
  const campos = ["alcool", "gasolina", "valor"];

  campos.forEach(id => {
    const input = document.getElementById(id);

    input.dataset.valor = '';

    input.addEventListener('input', (e) => {
      let raw = input.dataset.valor.replace(/\D/g, '');

      if (e.inputType === 'deleteContentBackward') {
        raw = raw.slice(0, -1);
      } else {
        raw += e.data?.replace(/\D/g, '') || '';
      }

      input.dataset.valor = raw;

      const float = (parseFloat(raw) / 100).toFixed(2);
      input.value = float.replace('.', ',');
    });
  });
});
