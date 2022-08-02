export const Control = ({ name, handleClick }) => {
  return (
    <input
      type="image"
      src={`assets/img/controls/${name}.png`}
      alt={name}
      className={`control-btn btn_${name}`}
      onClick={handleClick}
    />
  );
};
