import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

type locale = 'vi-VN' | 'en-US' | 'de-CH' | 'en-IN';

export function numberWithComma(x: string | number, option?: { prefix?: string; suffix?: string }) {
  if (!x) return '-';
  return (
    (option?.prefix || '') + `${x}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (option?.suffix || '')
  );
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const typeofData = (value: any) =>
  Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

export function formatCurrency(value: number, locale: locale): string {
  let currency: string = 'VND';
  switch (locale) {
    case 'vi-VN':
      currency = 'VND';
      break;
    case 'en-US':
      currency = 'USD';
      break;
    case 'de-CH':
      currency = 'CHF';
      break;
    case 'en-IN':
      currency = 'INR';
      break;
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}
