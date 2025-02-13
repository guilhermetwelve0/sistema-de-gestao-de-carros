import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { FinancingOptions } from "@/lib/types";

interface FinancingCalculatorProps {
  price: number;
}

export default function FinancingCalculator({
  price,
}: FinancingCalculatorProps) {
  const [options, setOptions] = useState<FinancingOptions>({
    downPayment: price * 0.2,
    months: 48,
    interestRate: 0.99,
  });

  const calculateMonthlyPayment = () => {
    const loanAmount = price - options.downPayment;
    const monthlyRate = options.interestRate / 100;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, options.months)) /
      (Math.pow(1 + monthlyRate, options.months) - 1);
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <h3 className="text-lg font-semibold">Simulação de Financiamento</h3>

      <div className="space-y-2">
        <Label>Entrada</Label>
        <Slider
          min={price * 0.1}
          max={price * 0.9}
          step={1000}
          value={[options.downPayment]}
          onValueChange={([value]) =>
            setOptions((prev) => ({ ...prev, downPayment: value }))
          }
        />
        <div className="text-sm text-gray-500">
          {options.downPayment.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Prazo (meses)</Label>
        <Slider
          min={12}
          max={84}
          step={12}
          value={[options.months]}
          onValueChange={([value]) =>
            setOptions((prev) => ({ ...prev, months: value }))
          }
        />
        <div className="text-sm text-gray-500">{options.months} meses</div>
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <div className="text-sm text-gray-600">Parcela estimada:</div>
        <div className="text-2xl font-bold text-blue-600">
          {monthlyPayment.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          <span className="text-sm font-normal text-gray-500"> /mês</span>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Taxa de juros: {options.interestRate}% ao mês
        </div>
      </div>
    </div>
  );
}
