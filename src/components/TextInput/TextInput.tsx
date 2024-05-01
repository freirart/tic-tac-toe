import { useState } from 'react';

interface TextInputProps {
  onBlur: Function;
  defaultValue: string;
}

export default function TextInput({
  onBlur,
  defaultValue
}: TextInputProps) {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <input
      autoFocus
      onBlur={() => onBlur(inputValue || defaultValue)}
      onKeyDown={(e) => (e.key === 'Enter' ? onBlur(inputValue) : {})}
      type="text"
      className="md:w-36 w-24 text-center dark:bg-special-black bg-light-blue
        dark:text-white-blue"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
