import "./Card.css";
import { useState, useEffect } from "react";
const Card = (props) => {
  const [isActive, setStatus] = useState(false);

  const [hideClass, setHideClass] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setHideClass((hideClass) => (hideClass = "hide"));
    }, 5000);
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }, []);

  function toggleClass() {
    setStatus(!isActive);
  }

  return (
    <div
      className={`${"card"}  ${isActive ? "active" : 'hide'} ${hideClass}`}
      dataId={props.id}
      onClick={toggleClass}
    >
      {props.number}
    </div>
  );
};

export default Card;
