function calculateEfficiency() {
  const numCandidatos = parseFloat(document.getElementById("num-candidatos").value);
  const numAplicantes = parseFloat(document.getElementById("num-aplicantes").value);
  const efficiency = (numCandidatos / numAplicantes) * 100;
  document.getElementById("result").innerHTML = `Eficiência do canal de recrutamento: ${efficiency.toFixed(2)}%`;
}

