function calcularCombustivel() {
  const precoAlcool = parseFloat(document.getElementById('alcool').value);
  const precoGasolina = parseFloat(document.getElementById('gasolina').value);
  const valor = parseFloat(document.getElementById('valor').value);
  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(precoAlcool) || isNaN(precoGasolina) || isNaN(valor)) {
    resultadoDiv.textContent = "Preencha todos os campos corretamente.";
    return;
  }

  const relacao = precoAlcool / precoGasolina;
  let tipo, litros;

  if (relacao < 0.7) {
    tipo = "álcool";
    litros = valor / precoAlcool;
  } else {
    tipo = "gasolina";
    litros = valor / precoGasolina;
  }

  resultadoDiv.innerHTML = `Use <strong>${tipo}</strong>,<br>você abastecerá <strong>${litros.toFixed(2)} litros</strong>.`;

}

// Formata o valor como decimal automaticamente
function formatarValorDecimal(input) {
  let valor = input.value.replace(/\D/g, ""); // remove tudo que não for dígito
  if (valor.length < 3) {
    valor = valor.padStart(3, '0'); // garante que tenha ao menos 3 dígitos
  }
  const parteInteira = valor.slice(0, -2);
  const parteDecimal = valor.slice(-2);
  input.value = `${parseInt(parteInteira)}.${parteDecimal}`;
}

// Aplica aos campos
document.addEventListener("DOMContentLoaded", () => {
  const campos = ["alcool", "gasolina", "valor"];
  campos.forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener("input", () => formatarValorDecimal(input));
  });
});
