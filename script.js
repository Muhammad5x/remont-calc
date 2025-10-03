document.getElementById('area').addEventListener('input', calculate);
document.getElementById('workType').addEventListener('change', calculate);

function calculate() {
  let area = parseFloat(document.getElementById('area').value);
  let workType = document.getElementById('workType').value;
  let pricePerM2 = workType === 'cosmetic' ? 1800 : 3500;
  let total = area * pricePerM2;
  document.getElementById('result').textContent =
    area && area > 0
      ? `Примерная стоимость ремонта: ${total.toLocaleString()} ₽`
      : '';
}
function calculate() {
  let area = parseFloat(document.getElementById('area').value);
  if (area > 10000) {
    document.getElementById('result').textContent = "Слишком большое значение площади!";
    return;
  }
  let workType = document.getElementById('workType').value;
  let pricePerM2 = workType === 'cosmetic' ? 1800 : 3500;
  let total = area * pricePerM2;
  document.getElementById('result').textContent =
    area && area > 0
      ? `Примерная стоимость ремонта: ${total.toLocaleString()} ₽`
      : '';
}
