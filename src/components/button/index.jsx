export const Button = ({ text, icon }) => {
  return (
    <button>
      {icon && <img src={icon} alt="Icon" className="w-6 h-6" />}
      {text}
    </button>
  );
};
