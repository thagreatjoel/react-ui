import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  clearable?: boolean;
  passwordToggle?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  helperText,
  errorMessage,
  loading = false,
  disabled = false,
  variant = "outlined",
  size = "md",
  clearable = false,
  passwordToggle = false,
  type = "text",
  className = "",
  ...props
}) => {
  const [value, setValue] = useState(props.value?.toString() || "");
  const [showPassword, setShowPassword] = useState(false);

  const baseStyles =
    "w-full rounded-lg transition focus:outline-none disabled:opacity-50 pr-10 text-gray-900 placeholder-gray-400";

  const variantStyles: Record<string, string> = {
    filled: "bg-gray-100 border border-transparent focus:ring-2 focus:ring-blue-500",
    outlined:
      "border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    ghost:
      "bg-transparent border-b border-gray-300 focus:border-blue-500 focus:ring-0 rounded-none",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const isPassword = type === "password" && passwordToggle;

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-semibold text-gray-700">{label}</label>}
      <div className="relative flex items-center">
        <input
          {...props}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange?.(e);
          }}
          disabled={disabled || loading}
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
            errorMessage ? "border-red-500 focus:ring-red-500" : ""
          } ${className}`}
          placeholder={props.placeholder}
        />

        {/* Loading spinner */}
        {loading && (
          <span className="absolute right-2 animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full" />
        )}

        {/* Clear button */}
        {!loading && clearable && value && (
          <button
            type="button"
            onClick={() => setValue("")}
            className="absolute right-2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}

        {/* Password toggle */}
        {isPassword && !loading && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>

      {errorMessage ? (
        <span className="text-sm text-red-500">{errorMessage}</span>
      ) : helperText ? (
        <span className="text-sm text-gray-500">{helperText}</span>
      ) : null}
    </div>
  );
};

export default InputField;
