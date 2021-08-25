
  export function formatNumber(number) {
    return `R$ ${formatNumberBr(number)}`;
  }

  export function formatPercent(number) {
    return `${formatNumberBr(number)}%`;
  }

  export function formatNumberPercent(totalIncome, totalPercentIncome) {
    return `R$ ${formatNumberBr(totalIncome)} (${formatNumberBr(
      totalPercentIncome
    )}%)`;
  }

  function formatNumberBr(number) {
    return parseFloat(number.toFixed(2)).toLocaleString("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }

