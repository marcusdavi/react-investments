import Investments from "../components/Investments";
import Investment from "../components/Investment";
import Header from "../components/Header";
import Main from "../components/Main";

import { investments } from "../data/investments";
import { useState,useEffect } from "react";

export default function InvestmentsPage() {

  const [allInvestiments, setAllInvestiments] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAllInvestiments(investments);  
    }, 500);
    
  }, [])

  return (
    <div>
      <Header>React-Investments v.1.0.1</Header>
      <Main>
        <Investments>
          {allInvestiments.map((investment) => {
            return (
              <Investment key={investment.id}>
                {investment}
              </Investment>
            );
          })}
        </Investments>
      </Main>
    </div>
  );
}
