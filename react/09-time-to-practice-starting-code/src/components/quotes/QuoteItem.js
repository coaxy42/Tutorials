import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link classname='btn' to={`/quotes/${props.id}`/* link to view quote*/}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
