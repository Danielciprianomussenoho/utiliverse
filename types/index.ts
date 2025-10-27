export interface Tool {
  id: string;
  name: string;
  description: string;
  href: string;
  category: string;
}

export interface CurrencyRates {
  [key: string]: number;
}

export interface UnitCategory {
  name: string;
  units: Unit[];
}

export interface Unit {
  name: string;
  symbol: string;
  factor: number;
}