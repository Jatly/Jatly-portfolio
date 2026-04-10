const Button = ({
  children,
  onClick,
  className = "",
  bg = "bg-[#e50914]",     // default Netflix red
  color = "text-white",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-md font-semibold transition duration-300 ${bg} ${color} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;