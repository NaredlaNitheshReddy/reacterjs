import CustomButton from "./button";
import Card from "./card";
import "./ErrorModel.css";

const ErrorModel = (props) => {
  return (
    <div>
      <div className="outFocus" onClick={props.closeHandler}></div>
      <Card cardClassName={"absolute"}>
        <header>
          <h1>{props.error.header ?? "Error :("}</h1>
        </header>
        <div>{props.error.message ?? "Something went wrong..!"}</div>
        <footer>
          <CustomButton
            btnText={"Cancel"}
            onClick={props.closeHandler}
          ></CustomButton>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
