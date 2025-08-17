import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: string;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border-transparent focus:border-blue-500",
  outlined: "bg-transparent border border-gray-400 focus:border-blue-500",
  ghost: "bg-transparent border-none focus:ring-0",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="w-full flex flex-col">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={inputType}
          disabled={disabled}
          className={`w-full rounded-md focus:outline-none focus:ring-2 
            ${sizeClasses[size]} ${variantClasses[variant]} 
            ${invalid ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"} 
            ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {invalid && errorMessage ? (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      ) : (
        helperText && (
          <span className="text-xs text-gray-500 mt-1">{helperText}</span>
        )
      )}
    </div>
  );
};

export default InputField;
