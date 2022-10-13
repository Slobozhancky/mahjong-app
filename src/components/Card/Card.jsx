import "./Card.css";
import { useState, useEffect } from "react";
// import App from "../../App";
const Card = (props) => {
  const [isActive, setStatus] = useState(false);
  const [hideClass, setHideClass] = useState("");



  useEffect(() => {
    const interval = setInterval(() => {
      setHideClass((hideClass) => (hideClass = "hide"));
    }, 3000);
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  }, []);

  function toggleClass(event) {
    if (event.target.classList.contains("hide")) {
      setHideClass((hideClass) => (hideClass = ""));
    }

    props.checkElem(event.target.attributes.dataId.nodeValue);

    setStatus(!isActive);
  }

  return (
    <div
      className={`${"card"} ${isActive ? "active" : null} ${hideClass}`}
      dataId={props.id}
      onClick={toggleClass}
    >
      {props.number}
    </div>
  );
};

export default Card;
