export const Button = ({ text, icon, className }) => {
  return (
    <button className={className}>
      {icon && <img src={icon} alt="Icon" className="w-6 h-6" />}
      {text}
    </button>
  );
};
