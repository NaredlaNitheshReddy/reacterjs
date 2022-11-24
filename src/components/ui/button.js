import "./button.css";

const CustomButton = (props) => {
  return (
    <button
      className="button"
      type={props.type || "submit"}
      onClick={props.onClick}
    >
      {props.btnText}
    </button>
  );
};

export default CustomButton;
