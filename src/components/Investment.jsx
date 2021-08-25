import {formatNumber, formatPercent, formatNumberPercent} from '../helpers/NumberFormat'
import {formatMonth} from '../helpers/DateFormat'

export default function Investment({ children: investment}) {
  const tdClassName = "border border-blue-600 text-left";
  const totalIncome = investment.totalIncome;
  const totalPercentIncome =  investment.totalPercent;
  const reports = investment.reports;
    
  const tdClassHeader =
    investment.totalIncome > 0
      ? "text-green-500"
      : totalIncome === 0
      ? "text-black"
      : "text-red-500";
  return (
    <div className="border border-blue-400 p-1 m-2 w-96 rounded-lg">
      <header>
        <p className="font-bold text-center text-lg bg-blue-300">
          {investment.description}
        </p>
        <p className={`mt-5 font-bold text-center text-sm ${tdClassHeader}`}>
          {`Rendimento total: ${formatNumberPercent(totalIncome, totalPercentIncome)}`}
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
            {reports.map((r) => {
              const tdClassValue =
                r.income > 0
                  ? "text-green-500"
                  : r.income === 0
                  ? "text-black"
                  : "text-red-500";
              const tdClassNameNumber = `border border-blue-600 text-right ${tdClassValue}`;
              return (
                <tr key={r.id}>
                  <td className={tdClassName}>
                    {(formatMonth(r.month) + "/" + r.year)}
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

  
}
