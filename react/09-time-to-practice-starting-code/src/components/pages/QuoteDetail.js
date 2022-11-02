import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Billy", text: "Learning React is Fun!" },
  { id: "q2", author: "William", text: "I love Web Development!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p> No Quote Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author} /* Displaying quote text and author*/
      />

      <Route
        path={match.path} /* Hide the comment button */
        exact
      >
        <div className="centered">
          <Link
            className="btn--flat"
            to={`${match.url}/comments` /* see comments*/}
          >
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
