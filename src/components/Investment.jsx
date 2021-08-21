export default function Investment({ children: reports, investHeader }) {
  const reportsFull = reportAscWithIncome();
  const tdClassName = "border border-blue-600 text-center";
  const totalIncome = reports[reports.length - 1].value - reports[0].value;
  const totalPercentIncome =
    (reports[reports.length - 1].value / reports[0].value - 1) * 100;
  const tdClassHeader =
    totalIncome > 0
      ? "text-green-500"
      : totalIncome === 0
      ? "text-black"
      : "text-red-500";
  return (
    <div className="border border-blue-400 p-1 m-2 w-96">
      <header>
        <p className="font-bold text-center text-lg bg-blue-300">
          {investHeader}
        </p>
        <p className={`mt-5 font-bold text-center text-sm ${tdClassHeader}`}>
          {`Rendimento total: ${formatNumberPercent()}`}
        </p>
      </header>
      <main className="text-sm">
        <table className="mt-4 min-w-full border-separate">
          <thead className="border-2 bg-blue-200">
            <tr>
              <th className={tdClassName}>Mês/Ano</th>
              <th className={tdClassName}>Valor Total</th>
              <th className={tdClassName}>Rendimento</th>
            </tr>
          </thead>
          <tbody className="border bottom-2.5">
            {reportsFull.map((r) => {
              const tdClassValue =
                r.income > 0
                  ? "text-green-500"
                  : r.income === 0
                  ? "text-black"
                  : "text-red-500";
              const tdClassNameNumber = `border border-blue-600 text-right ${tdClassValue}`;
              return (
                <tr>
                  <td className={tdClassName}>
                    {(r.month + "/" + r.year).padStart(7, "0")}
                  </td>
                  <td className={tdClassNameNumber}>{formatNumber(r.value)}</td>
                  <td className={tdClassNameNumber}>
                    {formatPercent(r.income)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );

  function formatNumber(number) {
    return `R$ ${formatNumberBr(number)}`;
  }

  function formatPercent(number) {
    return `${formatNumberBr(number)}%`;
  }

  function formatNumberPercent() {
    return `R$ ${formatNumberBr(totalIncome)} (${formatNumberBr(totalPercentIncome)})%)`;
  }

  function formatNumberBr(number) {
    return parseFloat(number.toFixed(2)).toLocaleString("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }

  function reportAscWithIncome() {
    const reportsAsc = reports.sort((a, b) => a.month - b.month);
    const reportsAscIncome = [{ ...reportsAsc[0], income: 0 }];
    for (let index = 1; index < reportsAsc.length; index++) {
      const current = reportsAsc[index];
      const previous = reportsAsc[index - 1];
      const incomeValue = 100 * (current.value / previous.value - 1);
      reportsAscIncome.push({ ...current, income: incomeValue });
    }
    return reportsAscIncome;
  }
}
