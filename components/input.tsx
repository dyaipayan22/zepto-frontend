interface InputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  onChange,
  onKeyDown,
  onFocus,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="px-4 py-2 border-none outline-none w-max"
    />
  );
};

export default Input;

/**
 * const handleBackspace = (e: KeyboardEvent) => {
  if (e.key === 'Backspace' && !user) {
    lastChipRef.current?.focus(); // Focus the last chip

    if (lastChipRef.current?.contains(document.activeElement)) {
      // If last chip is already focused, simulate a click on its cancel button
      lastChipRef.current?.querySelector('.cancel-button')?.click();
    }
  }
};
 */
