import { typeofData } from '@/utilities/Helpers';
import { useEffect, useState } from 'react';

// type TypeData = {
//   name: string;
//   value: string;
// };

export default function useDebounce(data: string | number | any, delay: number) {
  // State and setters for debounced value
  const typeOf = typeofData(data);
  if (typeOf === 'string' || typeOf === 'number') {
    const [debouncedValue, setDebouncedValue] = useState(data);
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(data);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler);
        };
      },
      [data, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
  } else if (typeOf === 'object') {
    const { value, name = '' } = data;
    const [debouncedValue, setDebouncedValue] = useState({
      name,
      value,
    });
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue({
            name,
            value,
          });
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler);
        };
      },
      [JSON.stringify(data), delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
  }
}
