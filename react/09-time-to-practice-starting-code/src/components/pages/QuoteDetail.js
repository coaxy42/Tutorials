import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from '../comments/Comments';

const QuoteDetail = () => {
  const params = useParams();

  console.log(params.quoteId);

  return (
    <Fragment>
      <h1>All Quotes</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}></Route>
      <Comments />
    </Fragment>



  );
};

export default QuoteDetail;
