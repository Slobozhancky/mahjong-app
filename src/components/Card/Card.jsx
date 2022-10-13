import styles from "./Card.module.css";
const Card = (props) => {
  return <div className={styles.card } >{props.number}</div>;
};

export default Card;