// ✅ Fix: use the correct function name from your investment.js
import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input); // use correct function name here
  let totalInterestAcc = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          totalInterestAcc += yearData.interest;
          const investedCapital = yearData.annualInvestment * yearData.year;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterestAcc)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
