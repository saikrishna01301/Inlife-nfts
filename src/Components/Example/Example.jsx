import "./Example.scss";
import Construction from "../../Assets/construction.png";
const Example = () => {
  return (
    <div className="example-container">
      <img className="construction" src={Construction} alt="png" />
      <h1 className="example">
        This page is under construction &#9888; , please go to home page
      </h1>
    </div>
  );
};

export default Example;
