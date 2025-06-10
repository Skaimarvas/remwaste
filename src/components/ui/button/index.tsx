interface ButtonProps {
  variant?: "primary" | "secondary";
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200",
  secondary:
    "flex-1 py-4 px-6 border-2 border-gray-300 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300",
};

const Button = ({ onClick, type, className, disabled, style, children, variant }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${variant ? variantClasses[variant] : ""} ${className}`}
      disabled={disabled}
      type={type}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
