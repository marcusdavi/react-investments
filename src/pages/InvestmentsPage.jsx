import Investments from "../components/Investments";
import Investment from "../components/Investment";
import Header from "../components/Header";
import Main from "../components/Main";

import { data } from "../data/investments";

export default function InvestmentsPage() {
  const { investments, reports } = data;
  return (
    <div>
      <Header>React-Investments v.1.0.1</Header>
      <Main>
        <Investments>
          {investments.map((i) => {
            const reportInvest = reports.filter((r) => i.id === r.investmentId);
            return (
              <Investment key={i.id} investHeader={i.description}>
                {reportInvest}
              </Investment>
            );
          })}
        </Investments>
      </Main>
    </div>
  );
}
