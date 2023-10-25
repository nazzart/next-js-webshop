"use client";

import { clsx } from "clsx";

export default function FormInput({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  required,
  onChange,
}) {
  const styles = {
    base: "pl-4 pr-10 outline-0 py-2 w-full border-2 border-slate-100 focus:border-primary",
    state: {
      error: "py-30 border-red-500 focus:border-red-500 text-red-500",
      disabled: "cursor-not-allowed bg-gray-100 shadow-inner text-gray-400",
    },
  };

  return (
    <div>
      <label
        className={clsx([
          "text-gray-500 block mb-2 text-sm",
          error && styles.state.error,
        ])}
        htmlFor={label}
      >
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
        <p className={clsx(["text-sm pt-1", error && styles.state.error])}>
          Input filed can't be empty!
        </p>
      )}
    </div>
  );
}
