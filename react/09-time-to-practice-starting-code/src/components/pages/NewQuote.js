import { useHistory } from "react-router-dom";

import QuoteForm from "../quotes/QuoteForm";

const NewQuotes = () => {
const history = useHistory();

    const addQuoteHandler = quoteData => {
        console.log(quoteData);

        history.push('/quotes'/* page history */);
    }

    return <QuoteForm onAddQuote={addQuoteHandler} />
};

export default NewQuotes;