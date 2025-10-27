import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('pt-BR').format(num);
}

export function generatePassword(
  length: number = 12,
  options: { uppercase: boolean; numbers: boolean; symbols: boolean } = {
    uppercase: true,
    numbers: true,
    symbols: true
  }
): string {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let chars = lowercase;
  if (options.uppercase) chars += uppercase;
  if (options.numbers) chars += numbers;
  if (options.symbols) chars += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}