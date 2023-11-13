"use client";

import { clsx } from "clsx";

interface FormInput {
  type?: string;
  label?: string;
  value: string;
  name?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInput> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  required,
  onChange,
}) => {
  const styles = {
    base: "pl-4 pr-10 outline-0 py-2 w-full border-2 border-slate-100 focus:border-primary",
    state: {
      error: "py-30 border-red-500 focus:border-red-500 text-red-500",
      disabled: "cursor-not-allowed bg-gray-100 shadow-inner text-gray-400",
    },
  };

  return (
    <div>
      <label className={"text-gray-500 block mb-2 text-sm"} htmlFor={label}>
        {label}
        {required ? "*" : ""}
      </label>
      <input
        className={clsx([
          styles.base,
          error && styles.state.error,
          disabled && styles.state.disabled,
        ])}
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && (
        <p className={clsx(["text-sm pt-1 pb-3", error && styles.state.error])}>
          {error}
        </p>
      )}
    </div>
  );
};
export default FormInput;
