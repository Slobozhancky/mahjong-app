import "./Card.css";
import { useState, useEffect } from "react";
// import App from "../../App";
const Card = (props) => {
  const [isActive, setStatus] = useState(false);
  const [hideClass, setHideClass] = useState("");
  const [toggleFunc, setToggleFunc] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setHideClass((hideClass) => (hideClass = "hide"));
      setToggleFunc((toggleFunc) => (toggleFunc = toggleClass));
    }, 5000);
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }, []);

  function toggleClass(event) {
    if (event.target.classList.contains("hide")) {
      setHideClass((hideClass) => (hideClass = ""));
    }

    props.checkElem(event.target);

    setStatus(!isActive);
  }

  return (
    <div
      className={`${"card"} ${isActive ? "active" : ""} ${hideClass}`}
      dataId={props.id}
      onClick={toggleFunc}
    >
      {props.id}
    </div>
  );
};

export default Card;
