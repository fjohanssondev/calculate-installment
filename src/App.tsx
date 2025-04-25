import { PieChart } from "@/components/chart/pie-chart";
import { AdjustPie } from "./components/chart/adjust-pie";
import { useEffect, useState } from "react";

function App() {
  const [total, setTotal] = useState(250000);
  const [months, setMonths] = useState(4);
  const [installment, setInstallment] = useState(Math.ceil(total / months));

  useEffect(() => {
    setInstallment(Math.ceil(total / months));
  }, [total, months]);

  const handleChangeTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "" || !isNaN(Number(value))) {
      setTotal(value === "" ? 0 : Number(value));
    }
  };

  const handleChangeMonths = (e: any) => {
    setMonths(e[0]);
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-4">
        <div className="flex justify-center items-center w-full space-x-10">
          <PieChart months={months} installment={installment} />
          <AdjustPie
            total={total}
            handleChangeTotal={handleChangeTotal}
            months={months}
            handleChangeMonths={handleChangeMonths}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
