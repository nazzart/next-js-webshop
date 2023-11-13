"use client";

import { clsx } from "clsx";

interface FormTextarea {
  label: string;
  name: string;
  rows: number;
  placeholder: string;
  error?: boolean;
  required?: boolean;
}

const FormTextarea: React.FC<FormTextarea> = ({
  label,
  name,
  rows,
  placeholder,
  error,
  required,
}) => {
  const styles = {
    base: "px-3 outline-0 py-2 w-full border-2 border-slate-100 focus:border-primary",
    state: {
      error: "py-30 border-red-500 focus:border-red-500 text-red-500",
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
        {label}{required ? "*" :""}
      </label>
      <textarea
        className={clsx([
          styles.base,
          error && styles.state.error
        ])}
        id={label}
        name={name}
        rows={rows}
        placeholder={placeholder}
      />
      {error && (
        <p className={clsx(["text-sm pt-1", error && styles.state.error])}>
          Input filed can't be empty!
        </p>
      )}
    </div>
  );
}

export default FormTextarea;