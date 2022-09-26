import QuoteList from '../quotes/QuoteList'


const DUMMY_QUOTES = [
    { id: 'q1', author: 'Billy', text: 'Learning React is Fun!'},
    { id: 'q2', author: 'William', text: 'I love Web Development!'},
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;

