interface TotalPriceParams {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({ 
  price, 
  discount, 
  isInstallment, 
  months 
}: TotalPriceParams): number => {
  const interestRate = 12;

  const monthPayment = price * (1 - discount * 0.01) / months;

  if (isInstallment) return monthPayment;
  
  return monthPayment * (interestRate * 0.01 + 1);
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250