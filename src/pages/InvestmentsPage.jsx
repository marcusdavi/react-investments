import Investments from "../components/Investments";
import Investment from "../components/Investment";
import Header from "../components/Header";
import Main from "../components/Main";
import ClipLoader  from "react-spinners/ClipLoader";


import { investments } from "../data/investments";
import { useState,useEffect } from "react";

export default function InvestmentsPage() {

  const [allInvestiments, setAllInvestiments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAllInvestiments(investments);
      setLoading(false)  ;
    },1000);
    
  }, [])

  return (
    <div>
      <Header>React-Investments v.1.0.1</Header>
      <Main>
        {!loading && <Investments>
          {allInvestiments.map((investment) => {
            return (
              <Investment key={investment.id}>
                {investment}
              </Investment>
            );
          })}
        </Investments>}
        <div className="flex flex-col items-center mt-20">
        <ClipLoader  loading={loading} size={100} />
        </div>
      </Main>
      
    </div>
  );
}
